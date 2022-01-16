<template>
  <ul>
    <li @click="filter()">全体</li>
    <li @click="filter('cat', 158)">上映会・イベントレポート</li>
    <li @click="filter('cat', 112)">制作日誌</li>
    <li @click="filter('cat', 110)">映画監督、日々の暮らし</li>
    <li @click="filter('cat', 109)">雑木林コラム</li>
  </ul>
  <hr>
  <div
    v-for="post in posts"
    :key="post.id"
  >
    <router-link :to="{
      name: 'post',
      params: {
        slug: post.slug,
        id: post.id
      }
    }">
      <Card :post="post" />
    </router-link>
  </div>
  <div class="loadmore" @click="more()">MORE</div>
  <br><br><br><br><br>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Card from '@/components/Card'

export default ({
  components: { Card },
  props: ['paged'],
  setup () {

    const postType = 'posts'
    let paged = 1
    let currentFilter = ''
    let currentFilterID = 0

    const store = useStore()
    if(store.state[postType].posts.length < 1) {
      store.dispatch('fetchPosts', { postType })
    }

    const posts = computed(() => store.state[postType].posts)

    const init = () => {
      paged = 1
      store.commit('emptyData', { postType })
    }

    const filter = (by, id) => {
      init()
      currentFilter = by || ''
      currentFilterID = id || 1
      fetch()
    }

    const more = () => {
      paged++
      fetch()
    }

    const fetch = () => {
      store.dispatch('fetchPosts', {
        postType,
        paged,
        filter_by: currentFilter,
        filter_param: currentFilterID
      })
    }

    return {
      posts,
      more,
      filter
    }
  },
})
</script>

<style scoped>
  .loadmore {
    border: 1px solid;
    padding: 10px;
  }
</style>