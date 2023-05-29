<template>
  <wallpaper-plus color="208,233,242">
    <el-row>
      <el-col :span="6" v-for="(item, index) in janusStreamTestService.streams" :key="index">
        <video
            :id="item.rtcDirec"
            autoplay="autoplay"
            :style="index === 0 ? 'width: 80%;' : 'width: 90%;'"
        ></video>
        <el-row>
          <el-col :span="12">
            <div style="color: white">发起方向: {{ item.rtcDirec }}</div>
          </el-col>
          <el-col :span="12">
            <div v-if="index !== 0" class="bitrate">{{ item.bitrate.value }}</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">Stream 测试</h3>
      <el-form-item style="user-select: none;">
        <el-upload
            drag
            multiple
            ref="upload"
            :auto-upload="false"
            :action="janusStreamTestService.url"
            :file-list="janusStreamTestService.files"
            :on-change="janusStreamTestService.changeFiles"
            :http-request="janusStreamTestService.uploadFiles"
        >
          <i class="el-icon-upload avatar-uploader-icon-computer"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>

      <el-form-item style="user-select: none;">
        <el-input
            type="text"
            placeholder="请输入用户标识..."
            v-model="janusStreamTestService.userId"
            @keyup.enter.native="janusStreamTestService.connect()"
        ></el-input>
      </el-form-item>

      <el-form-item style="user-select: none;">
        <el-input
            :disabled="true"
            type="text"
            placeholder="请输入房间号..."
            v-model="janusStreamTestService.roomId"
        ></el-input>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button
            type="primary"
            @click="janusStreamTestService.connect()"
            style="width: 100%;background: #4169E1;border: none"
        >
          连接websocket
        </el-button>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
            type="primary"
            class="button-border-red"
            @click="janusStreamTestService.disconnect()"
        >
          关闭websocket
        </el-button>
      </el-form-item>
    </el-form>

    <video id="local"></video>
  </wallpaper-plus>
</template>

<script lang="ts">
import Vue, {getCurrentInstance, onMounted, ref} from "vue";
import WallpaperPlus from "@/components/WallpaperPlus.vue";
import {JanusStreamTestService} from "@/common/service/JanusStreamTestService";

export default Vue.extend({
  name: "JanusStreamTest",
  setup() {
    const janusStreamTestService = ref(new JanusStreamTestService(getCurrentInstance()));
    onMounted(() => janusStreamTestService.value.initData());
    return {
      janusStreamTestService
    }
  },
  components: {
    WallpaperPlus
  }
});
</script>

<style scoped>
/deep/ .el-upload-list__item-name:hover {
  color: #606266;
}

/deep/ .el-upload-list__item-name {
  color: white;
}

/deep/ .el-upload-dragger {
  width: 330px;
}

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