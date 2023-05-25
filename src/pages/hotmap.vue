<template>
  <div>
    <div class="hotmap">
      <baidu-map
        :center="{ lng: 121.530307, lat: 38.875593 }"
        :zoom="18"
        :scroll-wheel-zoom="true"
        style="width: auto; height: 100%"
      >
        <!-- //是否需要全景 -->
        <bm-panorama></bm-panorama>
        <!-- //地图类型 -->
        <bm-map-type
          :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
          anchor="BMAP_ANCHOR_TOP_LEFT"
        ></bm-map-type>
        <bml-heatmap :data="mapList" :max="100" :radius="30"></bml-heatmap>
        <bm-context-menu>
          <bm-context-menu-item
            :callback="addData50"
            text="添加50人流"
          ></bm-context-menu-item>
          <bm-context-menu-item
            :callback="addData100"
            text="添加100人流"
          ></bm-context-menu-item>
          <bm-context-menu-item
            :callback="addData150"
            text="添加150人流"
          ></bm-context-menu-item>
        </bm-context-menu>
      </baidu-map>
     
    </div>
    <div class="table" style="margin-top: 20px;">
      <div><span style=" font-size: larger; color: gray;">人流总量 {{mapList.reduce((sum,item)=>sum+item.count,0)}}</span></div>
        <div style="height: 600px; overflow-y: scroll">
          <el-table :data="mapList" style="margin-top: 15px;width: 540px;">
            <el-table-column prop="" label="人流分布表" width="180">
              <el-table-column prop="lng" label="纵坐标" width="180">
              </el-table-column>
              <el-table-column prop="lat" label="横坐标" width="180">
              </el-table-column>
              <el-table-column prop="count" label="人流数量" width="180">
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
        <div></div>
    </div>
  </div>
</template>

<script>
import { BmlHeatmap } from "vue-baidu-map"; //引人
export default {
  components: {
    //注册
    BmlHeatmap,
  },
  data() {
    return {
      //模拟的经纬度及热力值数据；lng：经度 lat: 纬度 count：热力值
      mapList: [
        { lng: 121.538675, lat: 38.877234, count: 11 },
        { lng: 121.528665, lat: 38.867214, count: 50 },
        { lng: 121.530738, lat: 38.875656, count: 92 },
        { lng: 121.530294, lat: 38.875677, count: 51 },
        { lng: 121.531726, lat: 38.876734, count: 53 },
        { lng: 121.530307, lat: 38.875593, count: 15 },
      ],
    };
  },
  mounted() {
    this.mapList = JSON.parse(localStorage.getItem("mapList"));
    if (this.mapList == null) {
      this.mapList = [
        { lng: 121.538675, lat: 38.877234, count: 11 },
        { lng: 121.528665, lat: 38.867214, count: 50 },
        { lng: 121.530738, lat: 38.875656, count: 92 },
        { lng: 121.530294, lat: 38.875677, count: 51 },
        { lng: 121.531726, lat: 38.876734, count: 53 },
        { lng: 121.530307, lat: 38.875593, count: 15 },
      ];
    }
  },
  methods: {
    addData50(e) {
      console.log(e);
      var data = { lng: e.point.lng, lat: e.point.lat, count: 50 };
      // var  {lng,lat}=e.point
      // var  data={lng,lat,count:50}
      // var data=(({lng,lat,count})=>({lng,lat,count:50}))(e.point)
      console.log(data);
      this.mapList.push(data);
      console.log(JSON.stringify(this.mapList));
      localStorage.setItem("mapList", JSON.stringify(this.mapList));
    },
    addData100(e) {
      console.log(e);
      var data = { lng: e.point.lng, lat: e.point.lat, count: 100 };
      // var  {lng,lat}=e.point
      // var  data={lng,lat,count:50}
      // var data=(({lng,lat,count})=>({lng,lat,count:50}))(e.point)
      console.log(data);
      this.mapList.push(data);
      localStorage.setItem("mapList", JSON.stringify(this.mapList));
    },
    addData150(e) {
      console.log(e);
      var data = { lng: e.point.lng, lat: e.point.lat, count: 150 };
      // var  {lng,lat}=e.point
      // var  data={lng,lat,count:50}
      // var data=(({lng,lat,count})=>({lng,lat,count:50}))(e.point)
      console.log(data);
      this.mapList.push(data);
      localStorage.setItem("mapList", JSON.stringify(this.mapList));
    },
  },
};
</script>
<style scoped>
::v-deep .BMap_cpyCtrl {
  display: none;
}
::v-deep .anchorBL {
  display: none;
}
.hotmap {
  width: 95vw;
  height: 50vh;
}
</style>

