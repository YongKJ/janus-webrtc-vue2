<template>
  <wallpaper-plus color="208,233,242">
    <el-row>
      <el-col :span="3" >
        <el-row style="margin-top: 16px">
          <el-col :span="12">
            <div class="info-text" v-for="(info, index) in janusAudioTestService.participants" :key="index">
              {{ index === 0 ? "本地音频流" : "参与者：" + info.rtcDirec }}
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="3" v-show="janusAudioTestService.isPlay">
        <audio id="muted" autoplay class="audio-play"></audio>
        <div class="info-text" style="margin-top: 16px">混合音频</div>
      </el-col>
    </el-row>

    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">Audio 测试</h3>

      <el-form-item style="user-select: none;">
        <el-input
            type="text"
            placeholder="请输入用户标识..."
            v-model="janusAudioTestService.userId"
            @keyup.enter.native="janusAudioTestService.connect()"
        ></el-input>
      </el-form-item>

      <el-form-item style="user-select: none;">
        <el-input
            :disabled="true"
            type="text"
            placeholder="请输入房间号..."
            v-model="janusAudioTestService.roomId"
        ></el-input>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button
            type="primary"
            @click="janusAudioTestService.connect()"
            style="width: 100%;background: #4169E1;border: none"
        >
          连接websocket
        </el-button>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
            type="primary"
            class="button-border-red"
            @click="janusAudioTestService.disconnect()"
        >
          关闭websocket
        </el-button>
      </el-form-item>
    </el-form>

  </wallpaper-plus>
</template>

<script lang="ts">
import Vue, {getCurrentInstance, onMounted, ref} from "vue";
import WallpaperPlus from "@/components/WallpaperPlus.vue";
import {JanusAudioTestService} from "@/common/service/JanusAudioTestService";

export default Vue.extend({
  name: "JanusAudioTest",
  setup() {
    const janusAudioTestService = ref(new JanusAudioTestService(getCurrentInstance()))
    onMounted(() => janusAudioTestService.value.initData());
    return {
      janusAudioTestService
    }
  },
  components: {
    WallpaperPlus
  }
});
</script>

<style scoped>
.info-text {
  color: white;
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 330px;
  padding: 35px 35px 15px 35px;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px rgba(155, 89, 182, .5);
  position: relative;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #f3f9f1;
  user-select: none;
  font-size: 32px;
  font-weight: 500;
}

.button-border-red {
  width: 100%;
  background: rgba(45, 45, 45, 0.33);
  border: 1px solid #E74C3C;
}

.button-border-red:hover {
  width: 100%;
  background: rgba(45, 45, 45, 0.33);
  border: 1px solid #E74C3C;
  box-shadow: 0 0 25px rgba(236, 112, 99, .5);
}
</style>