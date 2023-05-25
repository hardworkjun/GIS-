<template>
    <div id="app">
      <top></top>
      <div class="father">
        <Aside></Aside>
        <router-view />
      </div>
  
    </div>
  </template>
  
  <script>
  import map01 from '@/pages/map01'
  import top from '@/components/top';
  import Aside from '@/components/aside'
  import hotmap from '@/pages/hotmap';
  export default {
    name: 'App',
    components:{map01,top,Aside,hotmap}
  }
  </script>
  
  <style>
  .body{
    margin: 0;
  }
  .father{
    display: flex;
    height: 800px;
    width: 100vw;
    overflow: hidden;
  }
  </style>
  