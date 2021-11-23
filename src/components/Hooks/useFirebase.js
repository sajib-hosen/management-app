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
    const registerUser = ( email, password, orgName, tagline, userName) =>{
        setIsLoading(true);
        const accessAblt ={ sales: true, purchase: true, create: true, accounting: true, home: true, manageEmployee: true }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = { role: "admin", email, displayName: userName, orgName, tagline, accessAblt }
            setUser(userCredential.user);
            saveUser( newUser, 'POST' )
            alert('Registration success')
        })
        .catch((error) => {
            setError(error);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }


    //register employee/user ========================
        const registerEmployee = ( employeeInfo ) =>{
            setIsLoading(true);
            const {email, password} = employeeInfo;
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                saveUser( employeeInfo, 'POST' )
                alert('Employee Registration Success')
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
            saveUser( credential.user, 'PUT' )
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

    // save user to DB ============================
    const saveUser = ( user, method ) =>{
        fetch('http://localhost:5000/users', { 
            method: method,
            headers: { 'content-type' : 'application/json'}, 
            body: JSON.stringify( user )
        })
        .then( res => res.json())
        .then( data => {
            if(data){
                alert("User inserted success")
            }
        })
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
        registerEmployee,
        registerUser,
        isLoading,
        user,
        error
    }
}

export default useFirebase;