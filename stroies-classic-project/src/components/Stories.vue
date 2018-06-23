<template>
  <ul class="list-group">
    <li v-for="story in stories" class="list-group-item">
      {{story.writer}} said "{{story.plot}}"
      Story upvotes {{story.upvotes}}.
    </li>
  </ul>
</template>

<script>
  import {store} from '../store.js'

  export default{
    data(){
      return {
        stories: store.stories // src/store.js에 전역 저장
      }
    }
  }
</script>
