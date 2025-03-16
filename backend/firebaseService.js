// dependencies
import { initializeApp } from "firebase/app";
import { 
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut 
} from "firebase/auth";
import { 
  getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc 
} from "firebase/firestore";
import { 
  getStorage, ref, uploadBytes, getDownloadURL 
} from "firebase/storage";


const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID"
};

// init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// auth functions
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// db functions
export const addHabit = async (userId, habit) => {
  try {
    await addDoc(collection(db, "habits"), {
      userId,
      habit,
      timestamp: new Date()
    });
  } catch (error) {
    throw error;
  }
};

export const getHabits = async (userId) => {
  try {
    const habitsSnapshot = await getDocs(collection(db, "habits"));
    return habitsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).filter(habit => habit.userId === userId);
  } catch (error) {
    throw error;
  }
};

// upload photo to firebase storage
export const uploadPhoto = async (uri, userId) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(storage, `habits/${userId}/${Date.now()}`);
    await uploadBytes(storageRef, blob);

    return await getDownloadURL(storageRef);
  } catch (error) {
    throw error;
  }
};

export { auth, db, storage };