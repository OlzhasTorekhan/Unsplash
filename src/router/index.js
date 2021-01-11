import VueRouter from 'vue-router'

import mainPage from '../pages/mainPage'
import Search from '../pages/search'
export default new VueRouter({
    mode: 'history',
    routes:[
{
    path:'/',
    name: 'Main',
    component: mainPage
},
{
    path:'../components/searchPhotos',
    name:'Search',
    component: Search
}
    ] // short for `routes: routes`
  })