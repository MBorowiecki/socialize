import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { getAuth } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../store/hooks";
import { createUser, loginUser } from "../helpers/user";
import SideInfo from "../components/sideinfo";

const Login: React.FC = () => {
    const user = useAppSelector(state => state.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [sideInfoOpen, setSideInfoOpen] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");
    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user.data)
        if (user.data !== null) {
            setSideInfoOpen(true);
            setLoginMessage("Succesfully signed in!");
            navigate('/home')
        }
    }, [])

    const register = () => {
        createUser(auth, email, password, dispatch)
            .then(res => {
                if (res) {
                    setSideInfoOpen(true);
                    setLoginMessage("Succesfully signed up and signed in!");
                    navigate('/home')
                } else {
                    setSideInfoOpen(false);
                    setLoginMessage("Error while sign up and sign in process.");
                }
            })
    }

    const login = () => {
        loginUser(auth, email, password, dispatch)
            .then(res => {
                if (res) {
                    setSideInfoOpen(true);
                    setLoginMessage("Succesfully signed in!");
                    navigate('/home')
                } else {
                    setSideInfoOpen(false);
                    setLoginMessage("Error while sign in process.");
                }
            })
    }

    return (
        <main>
            <section className="row row-hcenter">
                <div className="col-auto mt-8">
                    <div className="card card--primary">
                        <div className="input">
                            <label htmlFor="email" className="color-light_1">E-mail</label>
                            <input id="email" type="email" className="input--control size-xxl color-light_1" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="input">
                            <label htmlFor="password" className="color-light_1">Password</label>
                            <input id="password" type="password" className="input--control size-xxl color-light_1" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="row row-hcenter">
                            <button className="btn btn-bg color-dark_2 weight-bold mr-1 col-grow" onClick={() => login()}>
                                Login
                            </button>

                            <button className="btn btn-clear color-light_2 weight-bold" onClick={() => register()}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <SideInfo open={sideInfoOpen}>
                <p className="size-xl color-light_1">{loginMessage}</p>
            </SideInfo>
        </main>
    )
}

export default Login;