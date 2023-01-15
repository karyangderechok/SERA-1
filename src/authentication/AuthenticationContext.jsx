import React, { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorCreateAccount, setErrorCreateAccount] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);
  const [userData, setUserData] = useState("");
  const [appointments, setAppointments] = useState("");
  const [collegeQR, setCollegeQR] = useState([]);

  // Handle user state changes
  function onAuthStateChanged(data) {
    setUser(data);
    if (initializing) {
      setInitializing(false);
      if (data !== "" && data !== undefined && data !== null) {
        firestore()
          .collection("users")
          .doc(data.uid)
          .get()
          .then((u) => {
            if (u !== "" || u !== undefined) {
              setUserData(u.data());

              let qrData = [];

              firestore()
                .collection(u.data().college.toLowerCase())
                .get()
                .then((x) => {
                  x.forEach((y) => {
                    qrData.push(y.data());
                  });

                  if (qrData.length >= 0) {
                    setCollegeQR(qrData);
                  }
                });
            }
          });
      }
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) {
    return null;
  }

  const getAppointmentRequest = async () => {
    await firestore()
      .collection("appointments")
      .doc(user.uid)
      .get()
      .then((u) => {
        if (u !== "" || u !== undefined) {
          setAppointments(u.data());
        }
      });
  };

  const loginRequest = async (email, password) => {
    let uid;
    let db;
    setIsLoading(true);
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then((e) => {
        uid = e.user.uid;
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          setIsLoading(false);
          setErrorLogin("That email address is already in use!");
        }

        if (e.code === "auth/invalid-email") {
          setIsLoading(false);
          setErrorLogin("That email address is invalid!");
        }

        if (e.code === "auth/user-not-found") {
          setIsLoading(false);
          setErrorLogin(
            "There is no user record corresponding to this Account. The user may have been deleted."
          );
        }

        if (e.code === "auth/wrong-password") {
          setIsLoading(false);
          setErrorLogin("Wrong Password!");
        } else {
          setIsLoading(false);
          setErrorLogin(e.code);
        }
      });

    firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((u) => {
        if (u !== "" || u !== undefined) {
          db = u.data();
          setUserData(db);
        }
      });
  };

  const onLogout = () => {
    auth().signOut();
    setIsLoading(false);
  };

  const registerRequest = async (email, password, idNumber, college) => {
    setIsLoading(true);
    let userToken;
    let uid;
    let db;

    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (u) => {
        userToken = u.user.uid;
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          setIsLoading(false);
          setErrorCreateAccount("That email address is already in use!");
        }

        if (e.code === "auth/invalid-email") {
          setIsLoading(false);
          setErrorCreateAccount("That email address is invalid!");
        }

        if (e.code === "auth/operation-not-allowed") {
          setIsLoading(false);
          setErrorCreateAccount("Account is Disabled!");
        }

        if (e.code === "auth/weak-password") {
          setIsLoading(false);
          setErrorCreateAccount("Weak Password!");
        }
        setIsLoading(false);
      });

    firestore()
      .collection("users")
      .doc(userToken)
      .set({
        email: email,
        idNumber: idNumber,
        college: college,
        timestamp: firestore.FieldValue.serverTimestamp(),
      })
      .catch((e) => console.error(e));

    firestore()
      .collection("users")
      .doc(uid)
      .get()
      .then((u) => {
        if (u !== "" || u !== undefined) {
          db = u.data();
          setUserData(db);
        }
      });
  };

  const appointmentRequest = async (seat, day, time) => {
    setIsLoading(true);

    await firestore()
      .collection("appointments")
      .doc(user.uid)
      .set({
        seatNumber: seat,
        reservationDay: day,
        reservationTime: time,
        timestamp: firestore.FieldValue.serverTimestamp(),
      })
      .catch((e) => console.error(e));
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        userData,
        isAuthenticated: !!user,
        isLoading: !isLoading,
        errorLogin,
        errorCreateAccount,
        appointments,
        collegeQR,
        loginRequest,
        onLogout,
        registerRequest,
        appointmentRequest,
        getAppointmentRequest,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
