<template class="red">
  <v-app
    class="black no-scroll"
    style="overflow: hidden; left: 0; top: 0; width: 100%; height: 100%"
  >
    <v-img
      class="d-flex"
      style="
        overflow: hidden;
        position: fixed;
        filter: blur(20px);
        opacity: 0.5;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: black;

        background-color: black;
      "
      src="https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg"
    />

    <RouterTab v-if="!$route.path.startsWith('/admin')" />
    <v-main class="black">
      <div class="size-all">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import RouterTab from "../src/views/RouterTab.vue";
export default {
  name: "App",
  components: { RouterTab },
  data: () => ({
    topbar: true,
    drawerbar: false,
  }),
};
</script>
<style>
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
