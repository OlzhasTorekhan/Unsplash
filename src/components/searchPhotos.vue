<template>
  <div class="container">
    <div class="mainSearch">
      <h1><p class="text-shadow">Unsplash API photo search technology</p></h1>
      <input type="text" v-model="searchText" placeholder="Type here..."/>
      <button @click="pressButton()" class="searchButton">Search photo</button>
    </div>
    <div v-bind:style="activeDisplay">
        <ol class= "photosList" style="list-style:none;">
        <li> <img src="https://images.unsplash.com/photo-1550985607-b636cef44ec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTY4OTJ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwyfHw&ixlib=rb-1.2.1&q=80&w=400" alt=""></li>
        <li> <img src="https://images.unsplash.com/photo-1527842891421-42eec6e703ea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max" alt=""></li>
        <li> <img src="https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max" alt=""></li>
        <li> <img src="https://images.unsplash.com/photo-1551405780-03882d5a2ba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTY4OTJ8MHwxfHNlYXJjaHwyfHxuYXR1cmV8ZW58MHwyfHw&ixlib=rb-1.2.1&q=80&w=400" alt=""></li>
        <li> <img src="https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max" alt=""></li>
        <li> <img src="https://images.unsplash.com/photo-1544804170-686a81898b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxOTY4OTJ8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHwyfHw&ixlib=rb-1.2.1&q=80&w=400" alt=""></li>
</ol>
    </div>
    <ol style="list-style:none;" class="photos">
      <li v-for="(item, index) in list" :key="index" class="exactPhoto">
        <img :src="item.urls.small" />
        <p> {{item.user.name}}</p>
        <p>Likes: {{item.likes}}</p>
        <p> {{item.user.location}}</p>

      </li>
      
    </ol>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
export default {
  name: "searchPhotos",
  data() {
      
    return {
      list: undefined,
      searchText: "",
      activeDisplay: {
          display: ''
      }
    };
  },
  mounted() {},
  props: [],
  methods: {
    pressButton() {
      const url =
        "https://api.unsplash.com/search/photos?query=" +
        this.searchText +
        "&client_id=iqjW9shx5i7up0RhkmTQILgO_CM-2X2rVPZDt76W_gA&per_page=50&orientation=squarish";
      Vue.axios.get(url).then(resp => {
        this.list = resp.data.results
        this.searchText = ""
        this.activeDisplay.display = 'none'
      });
    },
  }
};
</script>
<style scoped>
.photos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items:center;
  background:black;
}
.photosList{
      display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items:center;
  background:black;
}
.photosList:nth-of-type(1){
    padding-top:30px;

}
.photosList:last-child{
    padding-bottom:30px;

}
.photosList li img{
        border: thin solid #ccc;
    height: 100%;
    padding: 15px;
    box-shadow: 5px 5px 10px #ccc;
    padding-bottom: 70px;
    color:white;
    width: 350px;
    height: 350px;
}
.photos:nth-of-type(1){
    padding-top:30px;

}
.photos:last-child{
    padding-bottom:30px;

}
.mainSearch {
  padding: 30px;
  background:#ccc;
  background-size: cover;
}
input{
    width:30%;
    padding:10px;
    outline:none;
    border-radius:15px;
    border: none;
    font-weight: bold;
    color:steelblue;
    box-shadow: 5px 5px 10px;
}
.searchButton{
    border:none;
    background-color:red;
    color: white;
    outline:none;
    margin:15px;
    padding:10px;
    font-size: 15px;
    border-radius:15px;
    font-weight: bold;
    box-shadow: 5px 5px 10px steelblue;
}
.searchButton:hover{
    background-color:cyan;
}

.exactPhoto{
    border: thin solid #ccc;
    height: 100%;
    padding: 15px;
    box-shadow: 5px 5px 10px #ccc;
    padding-bottom: 70px;
    color:white
}

p{
    border-bottom:thin solid #ccc;
    margin:5px;
    font-weight: bold;
}
p:last-child{
    border:none;
    margin:5px;
    font-weight: bold;
}

</style>