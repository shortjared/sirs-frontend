<template>
  <div id="app" v-md-theme="'default'">
  <modal :show.sync="show" :on-close="close">
      
  </modal>

    <div id="title-and-share">
      <h1 style="float:left;width:500px">
        Social Serverless Image Sharing
      </h1>

      
      <share-bar></share-bar>
      <stats></stats>
    </div>

    <div style="clear:both;"></div>
    <image-list></image-list>
  </div>
</template>

<script>
import ImageList from './components/ImageList.vue'
import Stats from './components/Stats.vue'
import ShareBar from './components/ShareBar.vue'

export default {
  name: 'app',
  components: {
    ImageList,
    Stats,
    ShareBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}

#title-and-share {
  padding: 10px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
