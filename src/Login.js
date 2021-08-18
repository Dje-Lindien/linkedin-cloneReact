import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
            );
        }).catch(error => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert("Veuillez entrer un nom complet !");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    })
                );
            });
        }).catch(error => alert(error));
    };


    return (
        <div className="login">
            <img src="https://www.llc-avocats.com/sites/uploads/2018/03/Logo-LinkedIn.png" alt="" />

            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)} placeholder="Nom complet (requis pour identification)"
                    type="text"
                />

                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}placeholder="URL photo de profil (facultatif)" type="text"
                />

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                    type="email"
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}placeholder="Mot de passe"
                    type="password"
                />

                <button type ="submit" onClick={loginToApp}>Valider</button>
            </form>

            {/* {" "} = ajout d'espace :) */}
            <p>Pas encore inscrit ?{" "}
                <span className="login__register" onClick={register}>S'enregistrer maintenant</span>
            </p>
        </div>
    )
}

export default Login
