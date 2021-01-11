<template>
  <div id="app">
    <searchPhotos/>
  </div>
</template>

<script>

import searchPhotos from './components/searchPhotos'
export default {
  name: 'App',
      data(){
        return{
            searchImg: ''
        }
      },
  components: {
    searchPhotos
  }
}

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin:0;
  padding:0;
  
}
body{background: black;
}

</style>
