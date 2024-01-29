import { db } from "../firebase/index";
import { getDocs, addDoc, collection } from "firebase/firestore";

export async function getComments({ commit }) {
  try {
    const querySnapshot = await getDocs(collection(db, "comments"));
    const comments = querySnapshot.docs.map((doc) => doc.data()); // Преобразование данных документов
    commit("setComment", comments);
  } catch (error) {
    console.error("Ошибка при получении комментариев:", error);
  }
}

export async function addComment({ commit }, comment) {
  try {
    await addDoc(collection(db, "comments"), comment);
  } catch (error) {
    console.log("Error added comment", error);
  }
}
