// import { ref } from 'vue'
import { createStore } from 'vuex'

const state = {
  news: {
    posts: [],
    pageNumber: 0
  },
  posts: {
    posts: [],
    pageNumber: 0
  }
}

const getters = {
  getPost : (state) => (postType, id) => {
    return state[postType].posts.filter(post => post.id == id)
  }
}

const mutations = {
  setData: (state, payload) => {
    const postType = payload.postType
    payload.posts.forEach(v => {
      const alreadyLoaded = state[postType].posts.find(a => a.id === v.id)
      if(!alreadyLoaded) {
        state[postType].posts.push(v)
      }
    })
    state[postType].pageNumber = Number(payload.pageNumber)
  },
  emptyData: (state, payload) => {
    state[payload.postType].posts = []
    state[payload.postType].pageNumber = 0
  }
}

const actions = {
  async fetchPosts ({ commit }, payload) {
    let url = new URL(`${window.location.origin}/api/${payload.postType}`)

    for (const param in payload) {
      if(payload[param]) {
        url.searchParams.set(param, payload[param])
      }
    }

    console.log(url)

    // if (payload.paged){
    // }

    // if (payload.paged){
    //   url.searchParams.set('paged', payload.paged)
    // }
    // if(payload.paged) {
    //   _url = `${_url}?paged=${payload.paged}`
    // }
    // if(payload.sortBy) {
    //   _url = `${_url}?paged=${payload.paged}`
    // }
    const res = await fetch(url)
    const posts = await res.json()
    const pageNumber = res.headers.get('x-wp-totalpages')
    commit('setData', { posts, pageNumber, postType: payload.postType })
  },
  async fetchPost (_, payload) {
    const res = await fetch(`/api${payload.postType}?p=${payload.id}&name=${payload.name}`)
    return await res.json()
  }
}

export const store = createStore({
  state,
  getters,
  mutations,
  actions
})