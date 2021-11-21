import firebaseInit from "./firebaseConfig/firebase.init";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInit();

const useFirebase = () =>{
    const [ user, setUser ] = useState({});
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const auth = getAuth();

    //register user ================================
    const registerUser = ( email, password) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            alert('Registration Success')
        })
        .catch((error) => {
            setError(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    //login user with email and password ===========
    const logInWithEmail = ( email, password, location, navigate ) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            alert('Login Success')
            const direction = location?.state?.from || '/';
            navigate(direction);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    //google sign in ===============================
    const googleSingIn = ( location, navigate) =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup( auth, googleProvider)
        .then((credential ) => {
            setUser(credential.user);
                const destination = location?.state?.from || '/';
                navigate(destination);
        })
        .catch(error =>{
            setError(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    //logOut =======================================
    const logOut =() =>{
        signOut(auth).then(() => {
          }).catch((error) => {
            setError(error);
          });
    }

    // Observe User State =========================
    useEffect(() =>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
          })
          return () => unsubscribed;
    } ,[])

    return{
        googleSingIn,
        logOut,
        logInWithEmail,
        registerUser,
        isLoading,
        user,
        error
    }
}

export default useFirebase;