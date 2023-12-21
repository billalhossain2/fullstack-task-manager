import { useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword} from "firebase/auth";

import { createContext } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const loginWithGoogle = ()=> signInWithPopup(auth, googleProvider);
    const registerWithEmailPwd = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const updateUserProfile = (displayName, photoURL)=>updateProfile(auth.currentUser, {displayName, photoURL})
    const logOutUser = ()=>signOut(auth);
    const signInWithEmailPwd = (email, password)=>signInWithEmailAndPassword(auth, email, password)

    const userInfo = {
        user,
        loading,
        loginWithGoogle,
        registerWithEmailPwd,
        updateUserProfile,
        logOutUser,
        signInWithEmailPwd
    }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, user=>{
      setUser(user);
      setLoading(false);
    });

    return ()=>unSubscribe();
  }, [])

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider