<template>
  <div
    v-for="post in posts"
    :key="post.id"
  >
    <router-link :to="{ name: 'mediaSingle', params: { type: 'media', id: post.id } }">
      <Card
        :title="post.title.rendered"
        :id="post.id"
      />
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Card from '@/components/Card'

export default ({
  components:{Card},
  setup() {
    const posts = ref([])

    const getPosts = async () => {
      const data = await fetch('/api/media_coverage/')
      posts.value = await data.json()
    }
    getPosts();

    onMounted(() => {
    })

    return {
      posts
    }
  },
})
</script>