import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,updateProfile, signOut } from "firebase/auth";

//initialize firebase
initializeFirebase();
// auth for all the function
const auth = getAuth();
// google provider
const googleProvider = new GoogleAuthProvider();


const useFirebase = () =>{
  const [user,setUser] = useState({});
  // Loading spinner
  const [isLoading, setIsLoading] = useState(true);
  // error
  // const [authError,setAuthError] = useState(''); // O
  const [error,setError] = useState(""); //N
  const [admin,setAdmin]=useState(false); //N



  // Google sign in method
  const signInWithGoogle = (history,location) =>{
    // setIsLoading(true); //o
    signInWithPopup(auth,googleProvider)
  .then((result) => {
    setUser(result.user); // N
    const user = result.user
    saveUser(user.email, user.displayName, "put")
    setError('');
    history.push(location?.state?.from || "/dashboard")
  })
  .catch((error) => {
    setError(error.message);
  })
  // .finally(()=>setIsLoading(false));  //o
  };


  // state change in browser but login will be stable
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
        if (user) {
          setUser(user);
          setError("");
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
 },[])



  // register user
  const registerUser = (email,password,name,history)=>{
      setIsLoading(true);
      createUserWithEmailAndPassword(auth,email,password)
      .then((result) => {
          setError("");
          // console.log(result.user);
          // save to use in database
          saveUser(email,name, "post")

          
          updateProfile(auth.currentUser,{
            displayName: name
          }).then((result)=>{
            setUser(result.user)
          }).catch((error)=>{
          });
          history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=>{
      setIsLoading(false)
      });
  };

  // sign in with email and pass 
  const loginUser = (email,password,history,location)=>{
     const uri = location?.state?.from
      // setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        setError("");
        history.push(uri||"/dashboard")
    })
    .catch((error) => {
        setError(error.message);
    })
    // .finally(()=>setIsLoading(false));
  };


  


  // sign out
  const logout = () =>{
    const auth = getAuth();
      // setIsLoading(true)
    signOut(auth)
    .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
      // .finally(()=>setIsLoading(false));
  };


  //check admin
useEffect(()=>{
  // setIsLoading(true)
  fetch(`https://mighty-caverns-68467.herokuapp.com/users/${user.email}`)
  .then(res=>res.json())
  .then(data=>{
    setAdmin(data.admin)
    // setIsLoading(false) 
})

},[user.email])

  const saveUser=(email,displayName,method)=>{

    const user ={email,displayName}
    fetch("https://mighty-caverns-68467.herokuapp.com/users",
    {method:method,
  headers:{"content-type":"application/json"},
  body: JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>console.log(data))

  }

  return{
      admin,
      user,
      isLoading,
      error,
      signInWithGoogle,
      registerUser,
      loginUser,
      logout,
  };
};
export default useFirebase;