<template>
  {{posts}}
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const posts = ref([])

    const getPosts = () => {
        fetch('/api/news')
            .then(response => response.json())
            .then(data => {
                posts.value = data;
            });

    };

    onMounted(() => {
      getPosts();
    })

    return {
        posts
    }
  },
}
</script>