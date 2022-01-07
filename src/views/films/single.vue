<template>
  <div v-if="Object.keys(post).length > 0">
    <h2>{{post.title.rendered}}</h2>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  props: ['type', 'id'],
  setup(props) {
    const post = ref({})

    const getPost = async () => {
      const data = await fetch(`/api/films/${props.id}`)
      console.log(data)
      post.value = await data.json()
    }

    getPost()

    return {
      post
    }
  }

})
</script>