<template>
  <div class="">
    <h3>All Storeis</h3>
    <ul class="list-group">
      <li v-for="story in stories" class="list-group-item">
        <div class="row">
          <h4>
            {{story.writer}} said "{{story.plot}}"
            <span class="badge">Story upvotes {{story.upvotes}}.</span>
          </h4>
          <router-link
            :to="{ name:'stories.edit', params: {id: story.id}}" tag="button" class="btn btn-default" exac>Edit
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {store} from '../store.js'

  export default{
    data(){
      return {
        stories: store.stories // src/store.js에 전역 저장
      }
    },
    mounted(){
      console.log('stories')
    }
  }
</script>
