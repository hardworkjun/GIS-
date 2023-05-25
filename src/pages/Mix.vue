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
          <div >
            <bm-marker v-for="m,index in markerPointList" :key="index"
            :position="{lng:m.lng,lat:m.lat}"
            :dragging="true"
            :icon="icon"
            ></bm-marker>
            <bm-marker v-for="m,index in markerPointListCook" :key="'a'+index"
            :position="{lng:m.lng,lat:m.lat}"
            :dragging="true"
            :icon="iconCook"
            ></bm-marker>
        </div>
        </baidu-map>
       
      </div>
     
    </div>
  </template>
  
  <script>
  import { BmlHeatmap } from "vue-baidu-map"; //引人
  import mapStyle from "../../public/mapStyle.json";
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
      }
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
      if(JSON.parse(localStorage.getItem('markerPointList'))==null ||JSON.parse(localStorage.getItem('markerPointListCook'))==null) return
        this.markerPointList=JSON.parse(localStorage.getItem('markerPointList'))
        this.markerPointListCook=JSON.parse(localStorage.getItem('markerPointListCook'))
        console.log("1",this.markerPointList);
        console.log("2",this.markerPointListCook);
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
  
  