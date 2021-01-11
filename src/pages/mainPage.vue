<template>
    <div class="container">
        <h1 class="glow">Unsplash Photo searcher</h1>
        <button @click="$router.push({name:'Search'})">GO </button>
    </div>
</template>

<style scoped>
.container{

}
h1{
    color:skyblue;
}
button{
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
    transition:  transform 0.5s;
        width:50px;
    animation: out 0.5s ease-in-out forwards;
        
}
button:hover{
    background-color:cyan;

    /* transform: scale(1.2, 1.2) */
    animation: in 0.5s ease-in-out forwards;
}
@-webkit-keyframes in{
    from{width:50px;}
    to{width:100px;}
}
@-webkit-keyframes out{
    from{width:100px;}
    to{width:50px;}
}
.container{
    margin-top: 20%;
}
.glow {
  font-size: 40px;
  color: #fff;
  text-align: center;
}
</style>
