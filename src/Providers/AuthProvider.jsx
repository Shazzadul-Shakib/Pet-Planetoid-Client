import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from '../Firebase/firebase.config';




const auth = getAuth(app);
export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    // Create user with email and password
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // Update profile with name
    const updateUserName=(name)=>{
        return updateProfile(auth.currentUser, {
          displayName: name
        });
    }

    // Login user
    const loginUserWithEmailPassword=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);

    }

    // Sign in with google 
    const googleSignin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };


    // Logout User
    const logoutUser=()=>{
        return signOut(auth);
    }

    // Call outside API to check if user or not otherwise unsubscribe it
    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser);
            setLoading(false);
        });
        return ()=>{
            return unSubscribe();
        }
        
    },[])

    const authInfo = {
      user,
      loading,
      createUser,
      logoutUser,
      loginUserWithEmailPassword,
      googleSignin,
      updateUserName,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;