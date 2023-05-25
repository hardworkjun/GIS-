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
          <div >
            <bm-driving
            :start=start
            :end=end
            :auto-viewport="true"
            policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"
            :panel="false"
            location="大连海事大学"
            :waypoints=waypoints>
          </bm-driving>
          <bm-context-menu>
            <bm-context-menu-item :callback="startrout" text="设为起点"></bm-context-menu-item>
            <bm-context-menu-item :callback="endrout" text="设为终点"></bm-context-menu-item>
            <bm-context-menu-item :callback="addrout" text="添加途经点"></bm-context-menu-item>
          </bm-context-menu>
        </div>
        </baidu-map>
      </div>
</div>
  </template>

<script>
import mapStyle from "../../public/mapStyle.json";
export default {
  data() {
    return {
      start:'远航楼',
      end:'学汇楼',
      waypoints:[],
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
    if(JSON.parse(localStorage.getItem('markerPointList'))==null ||JSON.parse(localStorage.getItem('markerPointListCook'))==null) return
    this.markerPointList=JSON.parse(localStorage.getItem('markerPointList'))
    this.markerPointListCook=JSON.parse(localStorage.getItem('markerPointListCook'))
    console.log("1",this.markerPointList);
    console.log("2",this.markerPointListCook);
  },
  methods: {
    startrout(e){
      this.start={'lng':e.point.lng,'lat':e.point.lat}
    },
    endrout(e){
      this.end={'lng':e.point.lng,'lat':e.point.lat}
    },
    addrout(e){
      this.waypoints.push({'lng':e.point.lng,'lat':e.point.lat})
    }
  },
}
</script>

<style>
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