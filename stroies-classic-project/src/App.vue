<template>
  <div id="app">
    <img src="./assets/logo.png">
    <component :is="currentComponent"></component>
    <p>
      This is very useful...
    </p>
    <a href="#" @click="currentComponent = 'hello'">Show Hello</a>
    <a href="#" @click="currentComponent = 'greet'">Show Greet</a>
    <!-- <login></login> -->
    <!-- <register></register> -->
    <!-- <stories></stories> -->
    <!-- <router-view/> -->
    <ul class="nav nav-tabs">
      <!-- 조건에 따라 'active' 클래스를 설정  -->
      <li v-for="page in pages" :class="isActivePage(page) ? 'active' : ''">
        <!-- 링크를 이용해 탭 사이를 이동  -->
        <a @click="setPage(page)">{{page | capitalize}}</a>
      </li>
    </ul>
    <component :is="activePage"></component>
    <router-link :to="{name:'home'}">Home</router-link>
    <router-link :to="{name:'login'}">Login</router-link>
    <!-- route link는 사용자가 라우터가 활성화된 앱에서 탐색할 수 있도록 만든 컴포넌트. 기본적으로 a태그와 역할이 같다. -->
    <router-view></router-view>
    <!-- router view는 컴포넌트가 렌더링 되는 동안 모든 일이 일어나는 곳.  -->
  </div>
</template>

<script>
import Vue from 'vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Stories from './components/Stories.vue'
import Greet from './components/Greet'
import Hello from './components/Hello'

Vue.filter('capitalize', function(value){
  return value.charAt(0).toUpperCase() + value.substr(1) // 탭메뉴의 첫글자를 대문자로 변경
});

export default {
  // name: 'App',
  // components:{
  //   Login,
  //   Register,
  //   Stories
  // }
  components:{
    Greet,
    Hello,
    Login,
    Register,
    Stories
  },
  data(){
    return{
      currentComponent: 'greet',
      pages: [
        'stories',
        'register',
        'login'
      ],
      activePage: 'stories'
    }
  },
  methods:{
    setPage(newPage){ // 새로운 페이지를 렌더할 페이지로 변경하는 함수
      this.activePage = newPage
    },
    isActivePage(page){ // 해당 데이터의 페이지가 현재 렌더가 허가된 페이지인지 검사하는 함수
      return this.activePage === page
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
