import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { AppDispatch } from "../store";

import { setUser } from '../store/reducers/user';

const createUser: (auth: Auth, email: string, password: string, dispatch: AppDispatch) => Promise<boolean> = (auth, email, password, dispatch) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            dispatch(setUser(userCredential.user));
        })
        .then(() => true)
        .catch(err => {
            console.log(err)
            return false
        })
}

const loginUser: (auth: Auth, email: string, password: string, dispatch: AppDispatch) => Promise<boolean> = (auth, email, password, dispatch) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            dispatch(setUser(userCredential.user));
        })
        .then(() => true)
        .catch(err => {
            console.log(err);
            return false;
        })
}

const logout: (dispatch: AppDispatch) => boolean = (dispatch) => {
    dispatch(setUser(null));

    return true;
}

export {
    createUser,
    loginUser,
    logout
}