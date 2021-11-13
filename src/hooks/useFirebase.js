import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile, signOut } from "firebase/auth";

//initialize firebase
initializeFirebase();


const useFirebase = () =>{
  const [user,setUser] = useState({});
  // Loading spinner
  const [isLoading, setIsLoading] = useState(true);
  // error
  const [authError,setAuthError] = useState('');


  // auth for all the function
  const auth = getAuth();
// google provider
const googleProvider = new GoogleAuthProvider();

  // register user
  const registerUser = (email,password,name,history)=>{
      setIsLoading(true);
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
          setAuthError('')
          const newUser = {email, displayName: name};
          setUser(newUser);
          // send name to firebase after creation
          updateProfile(auth.currentUser,{
            displayName: name
          }).then(()=>{
          }).catch((error)=>{
          });
          history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false));
  }

  // sign in with email and pass 
  const loginUser = (email,password,location,history)=>{
      setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
    })
    .catch((error) => {
        setAuthError(error.message);
    })
    .finally(()=>setIsLoading(false));
  }


  // Google sign in method
  const signInWithGoogle = (location,history) =>{
    setIsLoading(true);
    signInWithPopup(auth,googleProvider)
  .then((result) => {
    const user = result.user;
    setAuthError('');
  }).catch((error) => {
    setAuthError(error.message);
  }).finally(()=>setIsLoading(false));;
  }




  // state change in browser but login will be stable
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
          return () => unsubscribe
     },[])

  // sign out
  const logout = () =>{
      setIsLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=>setIsLoading(false));
  }

  return{
      user,
      isLoading,
      authError,
      signInWithGoogle,
      registerUser,
      loginUser,
      logout,
  }
}
export default useFirebase;