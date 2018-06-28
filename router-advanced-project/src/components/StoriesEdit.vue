<template>
  <div class="row">
    <h3>Editing</h3>
    <form>
      <div class="form-group col-md-offset-2 col-md-8">
        <input class="form-control" v-model="story.plot" />
      </div>
      <div class="form-group col-md-12">
        <button @click="saveChanges(story)" class="btn btn-success">Save Changes</button>
        <button @click="goBack()" class="btn">Go Back</button>
      </div>
    </form>
  </div>
</template>

<script>
import {store} from '../store.js'

export default{
  props: ['id'], // /router/index.js에 정의된 것을 가져옴
  data(){
    return{
      story: {}
    }
  },
  methods: {
    isTheOne(story){
      return story.id === this.id
    },
    saveChanges(story){
      console.log('Saved')
      this.$router.push('/stories')
    },
    goBack(){
      this.$router.push('/stories')
      // $router.go(-1);  not working.
    }
  },
  mounted(){
    this.story = store.stories.find(this.isTheOne)
  }
}
</script>
