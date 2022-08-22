<template class="">
  <v-app class="">
    <!-- <div style="margin: 0; padding: 0: position: absolute">sdassadsad</div> -->
    <v-img
      style="
        position: fixed;
        opacity: 0.2;
        filter: blur(3px);
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      "
      src="https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg"
    />

    <RouterTab
      v-if="
        !$route.path.startsWith('/admin') && $vuetify.breakpoint.width > 600
      "
    />
    <v-main class="black">
      <v-scroll-x-transition mode="in" hide-on-leave="true">
        <router-view></router-view>
      </v-scroll-x-transition>
    </v-main>

    <v-footer app class="transparent">
      <!-- -->
    </v-footer>
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
  height: 100%;
  width: 100%;
}
.black {
  background-color: #13293d;
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
