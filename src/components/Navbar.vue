<template>
  <header>
    <div class="container">
      <div class="head-title">
        <div class="box-icon">
          <i class="box-icon_icon fab fa-facebook"></i>
          <i class="box-icon_icon fab fa-twitter"></i>
          <i class="box-icon_icon fab fa-instagram"></i>
          <i class="box-icon_icon fab fa-pinterest"></i>
        </div>
        <div class="box-title">
          <span class="title">Philosophy.</span>
        </div>
        <div class="search">
          <span class="search_name">SEARCH</span>
          <i class="box-icon_icon fas fa-search"></i>
        </div>
      </div>
      <div class="navmenu">
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }">Your articles</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'user' }">User</router-link>
          </li>
          <li>
            <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      console.error("Sign out error:", error);
    });
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: rgb(0, 0, 0);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding-top: 2rem;
}
.head-title {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
}
.box-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
  &_icon {
    color: white;
    font-size: 1.5rem;
  }
  &_icon:hover {
    color: red;
    cursor: pointer;
  }
  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
}

.search {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  &_name {
    color: white;
    font-size: 0.8rem;
    margin-right: 0.5rem;
  }
}

.box-title {
  font-size: 2rem;
  flex-grow: 1;
  text-align: center;
}

.title {
  color: white;
}

.navmenu {
  margin-bottom: 3rem;
  > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style-type: none;

    & > *:not(:last-child) {
      margin-right: 4rem;
    }

    li {
      font-size: 1rem;
      color: white;
      padding-bottom: 0.3rem;
      border-bottom: 2px;

      :hover {
        color: red;
        border-bottom: 2px red solid;
      }
    }
  }
}
</style>
