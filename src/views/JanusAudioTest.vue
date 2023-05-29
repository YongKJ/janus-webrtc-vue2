<template>

</template>

<script lang="ts">
import Vue, {getCurrentInstance, ref} from "vue";
import {JanusAudioTestService} from "@/common/service/JanusAudioTestService";

export default Vue.extend({
  name: "JanusAudioTest",
  setup() {
    return {
      janusAudioTestService: ref(new JanusAudioTestService(getCurrentInstance()))
    }
  }
});
</script>

<style scoped>

</style>