<template>
  <div v-if="props.isPopupVisible" class="popup">
    <div class="popup__top">
      <h2>Create a new article</h2>
      <button class="btn" @click="closePopup">Close</button>
    </div>
    <hr />
    <div class="popup__main">
      <div class="main__uploadimg">
        <span>Add img to your article:</span>
        <input
          class="fileupload"
          type="file"
          :key="inputKey"
          @change="handleFileChange"
        />
      </div>
      <div class="main__articletext">
        <span>Title to your article:</span>
        <input type="text" v-model="articleTitle" />
        <span>Tag to your article:</span>
        <input type="text" v-model="articleTag" />
        <span>Text to your article:</span>
        <textarea v-model="articleText"></textarea>
      </div>
      <div v-if="photoURL">URL фото: {{ photoURL }}</div>
      <div class="footerbtn">
        <button class="btn" @click="uploadPhoto">Upload photo</button>
        <button class="btn" @click="saveArticle">Save article</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase/index";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { formattedDate } from "../../utils";

const db = getFirestore(app);

const auth = getAuth();
const user = auth.currentUser;
const photo = ref(null);
const photoURL = ref("");
const inputKey = ref(0);
const articleTitle = ref("");
const articleTag = ref("");
const articleText = ref("");
const storage = getStorage(app);

const props = defineProps({
  isPopupVisible: Boolean,
});

const handleFileChange = (event) => {
  photo.value = event.target.files[0];
};

const uploadPhoto = async () => {
  if (!photo.value) return;

  const uploadRef = storageRef(storage, `photos/${photo.value.name}`);
  const uploadTask = uploadBytesResumable(uploadRef, photo.value);

  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => {},
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        photoURL.value = downloadURL;
      });
    }
  );
};

const saveArticle = async () => {
  if (!photoURL.value) {
    alert("Please upload the photo first!");
    return;
  }

  const articleData = {
    title: articleTitle.value,
    tag: articleTag.value,
    text: articleText.value,
    photoURL: photoURL.value,
    userId: user.uid,
    date: formattedDate,
    author: "Kiryl Tserpilouski",
  };

  try {
    await addDoc(collection(db, "articles"), articleData);
    alert("Article saved successfully!");
    articleTitle.value = "";
    articleTag.value = "";
    articleText.value = "";
    photo.value = null;
    photoURL.value = "";
  } catch (error) {
    console.error("Error saving the article: ", error);
  }
};

const emit = defineEmits(["update-popup-visibility"]);
const closePopup = () => {
  emit("update-popup-visibility", false);
  inputKey.value++;
};

watchEffect(() => {
  if (!props.isPopupVisible) {
    photo.value = null;
    photoURL.value = "";
  }
});
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1280px;
  background-color: rgb(255, 255, 255);
  color: black;
  z-index: 100;
  border: 2px solid red;

  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }

  &__main {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
  }
}

.main {
  display: flex;

  &__uploadimg {
    display: flex;
    margin-bottom: 1rem;
  }

  &__articletext {
    display: flex;
    flex-direction: column;
  }
}

hr {
  margin-top: 0rem;
  margin-bottom: 1rem;
}

input {
  width: 50%;
  border: 1px solid black;
  height: 2rem;
  margin-bottom: 1rem;
}

textarea {
  width: 50%;
  margin-bottom: 2rem;
}

.fileupload {
  display: inline-block;
  padding: 10px 15px;
  background-color: #ffffff; /* цвет фона */
  color: #ffffff; /* цвет текста */
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  width: 20%;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ff5b4f;
  }
}

.footerbtn {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  & > * {
    margin-right: 1rem;
  }
}

.btn {
  border: none;
  background-color: black;
  color: white;
  width: 10rem;
  height: 2rem;
  margin-bottom: 0;
  &:hover {
    color: white;
    background-color: red;
  }
}

h2 {
  font-size: 2rem;
}
</style>
