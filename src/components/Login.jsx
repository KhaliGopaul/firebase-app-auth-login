import { useState } from 'react';
import { initalizeApp } from 'firebase/app';
import { getAuth, createUsersWithAndPassword } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDivVeC21Oj53_4-iSLv42CW09pwBOdsbM",
    authDomain: "first-login-kg.firebaseapp.com",
    projectId: "first-login-kg",
    storageBucket: "first-login-kg.appspot.com",
    messagingSenderId: "979381549228",
    appId: "1:979381549228:web:3faad4d0712161b8484709"
  };


function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleSignUp = async () => {
        // connect to firebase project
        const app = initalizeApp(firebaseConfig);
        // connect to Auth
        const auth = getAuth(app);
        // send email and password to firebase auth
        const user = await createUserWithEmailAndPassword(auth, email, password)
        .catch(err => alert(err.message))
        // if all is ok
        if(user)
        console.log(user)
        setIsLoggedIn(true)
    }
return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">
            Email:
            <input 
            value={email} onChange={e => setEmail(e.target.value)}
                name="email" type="email" placeholder="you@there.com" />
            </label><br />
        <label for="password">
            password:
            <input 
            value={password} onChange={e => setPassword(e.target.value)}
                name="password" type="password" />
        </label><br />
        <button onClick={handleSignUp}>Sign Up</button>
    </form>
)
}
export default Login;