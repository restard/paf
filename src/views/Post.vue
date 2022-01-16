<template>
  <div
    v-for="post in posts"
    :key="post.id"
  >
    <div v-html="post.title" />
    <div v-html="post.content" />
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  props: ['id', 'slug'],
  setup(props) {

    const route = useRoute()
    const store = useStore()

    const postType = 'posts'

    let posts = ref([])
    const storedPost = store.getters.getPost(postType, props.id)

    if(storedPost.length > 0) {
      posts.value = storedPost
    } else {
      (async() => {
        posts.value = await store.dispatch('fetchPost', { postType, name: route.path })
      })();
    }

    return {
      posts,
      storedPost
    }
  }
})
</script>