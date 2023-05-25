<template>
  <div class="map">
    <baidu-map
      class="map"
      :center="{ lng: 121.530307, lat: 38.875593 }"
      :zoom="19"
      :scroll-wheel-zoom="true"	
    >
      <bm-panorama></bm-panorama>
      <!-- //地图类型 -->
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
        scroll-wheel-zoom=true	
      ></bm-map-type>
      <div >
        <bm-marker v-for="m,index in markerPointList" :key="index"
          :position="{lng:m.lng,lat:m.lat}"
          :dragging="true"
          :icon="icon"
          @click="deleteRubsh"
        ></bm-marker>
        <bm-marker v-for="m,index in markerPointListCook" :key="'a'+index"
          :position="{lng:m.lng,lat:m.lat}"
          :dragging="true"
          :icon="iconCook"
          @click="deleteRubshCook"
        ></bm-marker>
      </div>
      <bm-context-menu>
        <bm-context-menu-item :callback="addRubsh" text="添加普通垃圾桶"></bm-context-menu-item>
        <bm-context-menu-item :callback="addRubshCook" text="添加分类垃圾桶"></bm-context-menu-item>
      </bm-context-menu>
    </baidu-map>
    <div style="display: flex; justify-content: space-around;margin-top: 30px;">
      <div class="one" style="height: 500px; overflow: auto">
        <span style=" font-size: larger; color: gray;">普通垃圾桶总量 {{markerPointList.length}}</span>
        <el-table
          :data="markerPointList"
          style="width: 100%;margin-top: 15px;">
          
          <el-table-column
            prop=""
            label="普通垃圾桶位置表"
            width="180">
      
              <el-table-column
                prop="lng"
                label="纵坐标"
                width="180">
              </el-table-column>
              <el-table-column
                prop="lat"
                label="横坐标"
                width="180">
              </el-table-column>
          </el-table-column>
        </el-table>
      </div>
      <div class="tow" style="height: 500px; overflow: auto">
        <span style=" font-size: larger; color: gray;">分类垃圾桶总量 {{markerPointListCook.length}}</span>
        <el-table
          :data="markerPointListCook"
          style="width: 100%;margin-top: 15px;">
          
          <el-table-column
            prop=""
            label="分类垃圾桶位置表"
            width="180">
      
              <el-table-column
                prop="lng"
                label="纵坐标"
                width="180">
              </el-table-column>
              <el-table-column
                prop="lat"
                label="横坐标"
                width="180">
              </el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import mapStyle from "../../public/mapStyle.json";

export default {
  components: {},
  data() {
    return {
      mapStyle: mapStyle,
      markerPointList: [
        { 'lng': 121.530307, 'lat': 38.875593 },
        { 'lng': 121.530407, 'lat': 38.875793 },
      ],
      markerPointListCook:[
        {'lng': 121.530407, 'lat': 38.875993}
      ],
      icon: { url: "/垃圾桶.png", size: { width: 100, height: 57 } },
      iconCook:{url: "/厨余垃圾桶.png", size: { width: 20, height: 20 }},
    };
  },
  mounted() {
    if(JSON.parse(localStorage.getItem('markerPointList'))==null ||JSON.parse(localStorage.getItem('markerPointListCook'))==null) return
    this.markerPointList=JSON.parse(localStorage.getItem('markerPointList'))
    this.markerPointListCook=JSON.parse(localStorage.getItem('markerPointListCook'))
    console.log("1",this.markerPointList);
    console.log("2",this.markerPointListCook);
  },
  methods: {
    addRubsh(e){
       console.log(e.point)
       this.markerPointList.push(e.point)
       localStorage.setItem('markerPointList',JSON.stringify(this.markerPointList))
    },
    deleteRubsh(e){
      console.log(e.point);
      this.markerPointList=this.markerPointList.filter((item)=>{
          if((item.lat < e.point.lat + 0.0002) && (item.lat > e.point.lat - 0.0002) &&(item.lng < e.point.lng + 0.0002) && (item.lng > e.point.lng - 0.0002))
          {
            console.log('ok');
            return false
          } return true
      })
      localStorage.setItem('markerPointList',JSON.stringify(this.markerPointList))
    },
    addRubshCook(e){
        this.markerPointListCook.push(e.point)
       localStorage.setItem('markerPointListCook',JSON.stringify(this.markerPointListCook))
    },
    deleteRubshCook(e){
      this.markerPointListCook=this.markerPointListCook.filter((item)=>{
          if((item.lat < e.point.lat + 0.00015) && (item.lat > e.point.lat - 0.00015) &&(item.lng < e.point.lng + 0.0002) && (item.lng > e.point.lng - 0.00015))
          {
            console.log('ok');
            return false
          } return true
      })
      localStorage.setItem('markerPointListCook',JSON.stringify(this.markerPointListCook))
    }

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
.map {
  width: 95vw;
  height: 50vh;
}
</style>

