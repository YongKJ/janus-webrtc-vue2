<template>

</template>

<script lang="ts">
import Vue, {getCurrentInstance, ref} from "vue";
import {WebrtcPeerTestService} from "@/common/service/WebrtcPeerTestService";

export default Vue.extend({
  name: "WebrtcPeerTest",
  setup() {
    return {
      webrtcPeerTestService: ref(new WebrtcPeerTestService(getCurrentInstance()))
    }
  }
});
</script>

<style scoped>

</style>