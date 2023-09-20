import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Send verification email
  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // add name when signup
  const updateUserName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // update proile nam and upload photo
  const updateUserInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Login user
  const loginUserWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // reset password 
  const resetPassword=(email)=>{
    return sendPasswordResetEmail(auth,email);
  }

  // Sign in with google
  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Logout User
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser && currentUser.emailVerified) {
          setUser(currentUser);
        } else {
          setUser(null);
          // Sign out the user to clear Firebase Authentication state
          signOut(auth); //need to be tested
        }
        setLoading(false);
      });

      return () => {
        unSubscribe();
      };
    }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    emailVerification,
    resetPassword,
    logoutUser,
    loginUserWithEmailPassword,
    googleSignin,
    updateUserName,
    updateUserInfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
