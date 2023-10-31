import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null)
    const [loader, setLoader] = useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

   useEffect(() => {
    setLoader(false)
     const unSubscribe = onAuthStateChanged(auth, currentUser => {
        const useEmail = currentUser?.email || users?.email;
        const loggedUser = { email: useEmail}
        setUsers(currentUser)
        if(currentUser){
           
            axios.post('http://localhost:5000/jwt' ,loggedUser)
            .then(res => {
                console.log('token response' ,res.data);
            })
        }
        else{
            axios.post('http://localhost:5000/logout', loggedUser, {
                withCredentials: true
            })
            .then(res => {
                console.log(res.data);
            })
        }
   
     })
     return () => {
        return unSubscribe()
     }

   },[])

    const authInfo = {
        users, loader, createUser, signIn, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;