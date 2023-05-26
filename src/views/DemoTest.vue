<template>
  <wallpaper-plus color="208,233,242">

  </wallpaper-plus>
</template>

<script lang="ts">
import Vue, {getCurrentInstance, ref} from "vue";
import WallpaperPlus from "@/components/WallpaperPlus.vue";
import {DemoTestService} from "@/common/service/DemoTestService";

export default Vue.extend({
  name: "DemoTest",
  setup() {
    return {
      demoTestService: ref(new DemoTestService(getCurrentInstance()))
    }
  },
  components: {
    WallpaperPlus
  }
});
</script>

<style scoped>

</style>