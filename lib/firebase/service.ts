import {
 collection,
 doc,
 getDoc,
 getDocs,
 getFirestore,
 where,
 query,
 addDoc,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
 const snapshot = await getDocs(collection(firestore, collectionName));
 const data = snapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
 }));
 return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
 const snapshot = await getDoc(doc(firestore, collectionName, id));
 const data = snapshot.data();
 return data;
}

export async function register(data: {
 fullname: string;
 email: string;
 password: string;
 role?: string;
}) {
 const q = query(
  collection(firestore, "users"),
  where("email", "==", data.email)
 );
 const snapshot = await getDocs(q);
 const users = snapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
 }));
 if (users.length > 0) {
  return {status: false, statusCode: 400, message: "Email sudah terdaftar!"};
 } else {
  data.role = "admin";
  data.password = await bcrypt.hash(data.password, 10);
  try {
   await addDoc(collection(firestore, "users"), data);
   return {status: true, statusCode: 200, message: "Berhasil Daftar"};
  } catch (error) {
   return {status: false, statusCode: 400, message: "Gagal Mendaftar"};
  }
 }
}

export async function login(data: {email: String}) {
 const q = query(
  collection(firestore, "users"),
  where("email", "==", data.email)
 );

 const snapshot = await getDocs(q);
 const user = snapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
 }));

 if (user) {
  return user[0];
 } else {
  return null;
 }
}