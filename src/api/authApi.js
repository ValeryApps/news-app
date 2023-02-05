import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const auth = getAuth();

export const register_user = async (userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    await updateProfile(auth.currentUser, { displayName: userData.username });
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      username: userData.username,
      email: userData.email,
      roles: ["user"],
      created: serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
};

export const login_user = async (userInfo) => {
  try {
    await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password);
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const userData = await getDoc(doc(db, "users", userId));
    if (userData.exists()) {
      return userData.data();
    }
    return null;
  } catch (error) {
    throw error;
  }
};
