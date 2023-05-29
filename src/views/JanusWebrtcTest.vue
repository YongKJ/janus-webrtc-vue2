<template>

</template>

<script lang="ts">
import Vue, {getCurrentInstance, ref} from "vue";
import {JanusWebrtcTestService} from "@/common/service/JanusWebrtcTestService";

export default Vue.extend({
  name: "JanusWebrtcTest",
  setup() {
    return {
      janusWebrtcTestService: ref(new JanusWebrtcTestService(getCurrentInstance()))
    }
  }
});
</script>

<style scoped>

</style>