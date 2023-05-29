<template>
  <wallpaper-plus color="208,233,242">
    <el-row>
      <el-col :span="6" v-for="(item, index) in janusWebrtcTestService.streams" :key="index">
        <video
            :id="item.rtcDirec"
            autoplay="autoplay"
            :style="index === 0 ? 'width: 80%;' : 'width: 90%;'"
        ></video>
        <el-row>
          <el-col :span="12">
            <div v-if="index === 0" style="color: white">本地视频流</div>
            <div v-else style="color: white">发起方向: {{ item.rtcDirec }}</div>
          </el-col>
          <el-col :span="12">
            <div v-if="index !== 0" class="bitrate">{{ item.bitrate.value }}</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">Janus 测试</h3>

      <el-form-item style="user-select: none;">
        <el-input
            type="text"
            placeholder="请输入用户标识..."
            v-model="janusWebrtcTestService.userId"
            @keyup.enter.native="janusWebrtcTestService.connect()"
        ></el-input>
      </el-form-item>

      <el-form-item style="user-select: none;">
        <el-input
            :disabled="true"
            type="text"
            placeholder="请输入房间号..."
            v-model="janusWebrtcTestService.roomId"
        ></el-input>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button
            type="primary"
            @click="janusWebrtcTestService.connect()"
            style="width: 100%;background: #4169E1;border: none"
        >
          连接websocket
        </el-button>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
            type="primary"
            class="button-border-red"
            @click="janusWebrtcTestService.disconnect()"
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
import {JanusWebrtcTestService} from "@/common/service/JanusWebrtcTestService";

export default Vue.extend({
  name: "JanusWebrtcTest",
  setup() {
    const janusWebrtcTestService = ref(new JanusWebrtcTestService(getCurrentInstance()))
    onMounted(() => janusWebrtcTestService.value.initData());
    return {
      janusWebrtcTestService
    }
  },
  components: {
    WallpaperPlus
  }
});
</script>

<style scoped>
.bitrate {
  color: white;
  float: right;
  margin-right: 48px;
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