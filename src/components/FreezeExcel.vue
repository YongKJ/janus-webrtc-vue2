<template>
  <el-dialog
      width="350px"
      style="margin-top: 10px;"
      :modal-append-to-body="false"
      :before-close="freezeExcelService.dialogCloseChange"
      :visible.sync="freezeExcelService.freezeExcelVisible"
  >
    <span slot="title">
      <i class="el-icon-ice-cream-round el-icon--left"></i>
      冻结表格
    </span>

    <el-input
        type="text"
        placeholder="请输入冻结行数"
        style="margin-bottom: 20px"
        v-model="freezeExcelService.dataRow"
    ></el-input>

    <el-input
        type="text"
        placeholder="请输入冻结列数"
        v-model="freezeExcelService.dataCol"
    ></el-input>

    <span slot="footer">
      <el-button
          size="small"
          @click="freezeExcelService.dialogCancelChange()"
      >
        取 消
      </el-button>
      <el-button
          size="small"
          type="primary"
          style="margin-left: 10px;"
          @click="freezeExcelService.freezeExcelChange()"
      >
        导 出
      </el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import Vue, {getCurrentInstance, ref} from "vue";
import {FreezeExcelService} from "@/common/service/FreezeExcelService";

export default Vue.extend({
  name: "FreezeExcel",
  setup() {
    return {
      freezeExcelService: ref(new FreezeExcelService(getCurrentInstance()))
    }
  }
});
</script>

<style scoped>

</style>