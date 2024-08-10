<template>
  <v-app
    class="black no-scroll"
    style="overflow: hidden; left: 0; top: 0; width: 100%; height: 100%"
  >
    <v-img
      class="d-flex"
      style="
        overflow: hidden;
        position: fixed;
        filter: blur(07px);
        opacity: 0.4;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: black;
        background-color: black;
      "
      src="./assets/images/javascript-1.jpg"
    />
    <RouterTab />
    <v-main class="black">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import RouterTab from "../src/views/RouterTab.vue";
// import LoadingPage from "./components/LoadingPage.vue";
export default {
  name: "App",

  components: {
    RouterTab,
    //  LoadingPage
  },
  data: () => ({
    topbar: true,
    drawerbar: false,
    dialog: false,
  }),
};
</script>
<style>
.close {
  /* animation: closeAnim 1s 2s both normal; */
  display: none;
}
@keyframes closeAnim {
  from {
  }
  to {
    display: none;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.7) -50%,
      rgb(0, 255, 68) 100%
    );
  }
}
.size-all {
  width: 100%;
  height: 100%;
  margin: 0;
}

.color-2 {
  color: #006494;
}
.color-3 {
  color: #247ba0;
}
.color-4 {
  color: #1b98e0;
}
.color-5 {
  background-color: #e8f1f2;
}
</style>
