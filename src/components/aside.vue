<template>
  <div class="aside">
    <el-row class="tac">
      <el-col :span="26">
        <el-menu
          router
          default-active="map"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="map">
            <i class="el-icon-menu"></i>
            <span slot="title">垃圾桶分布图</span>
          </el-menu-item>
          <el-menu-item index="hotmap">
            <i class="el-icon-document"></i>
            <span slot="title">人流密度图</span>
          </el-menu-item>
          <el-menu-item index="mix">
            <i class="el-icon-view"></i>
            <span slot="title">混合对比图</span>
          </el-menu-item>
          <el-menu-item index="rout">
            <i class="el-icon-location-information"></i>
            <span slot="title">路径规划图</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.aside {
  border-right: 1px solid rgb(211, 211, 211);
}
.tac {
  border: 0;
  margin: 0;
}
</style>