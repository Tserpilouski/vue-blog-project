<template>
  <div v-if="props.isPopupVisible" class="popup">
    <div class="popup__top">
      <span>Create a new article</span>
      <button @click="closePopup">Close</button>
    </div>
    <hr />
    <div class="popup__main">
      <div class="main__uploadimg">
        <span>Add img to you article:</span>
        <input type="file" required accept="image/*" />
      </div>
      <div class="main__articletext">
        <span>Title to your article:</span>
        <span>Tag to you article:</span>
        <span>Text to you article:</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { app } from "../../firebase/index";
import { doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { storage } from "../../firebase/index";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
const db = getFirestore(app);
const collectionRef = doc(db, "doc", "doc1");

const props = defineProps({
  isPopupVisible: Boolean,
});

const emit = defineEmits(["update-popup-visibility"]);
const closePopup = () => {
  emit("update-popup-visibility", false);
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1280px;
  background-color: aliceblue;
  color: black;

  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 2rem 0.5rem 2rem;
  }

  &__main {
    display: flex;
    flex-direction: column;
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
    & > * {
      margin-bottom: 1rem;
    }
  }
}

hr {
  margin: 0;
}
</style>
