import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import EventIndex from '@/views/events/index'
import EventSingle from '@/views/events/single'
import FilmIndex from '@/views/films/index'
import FilmSingle from '@/views/films/single'
import ChannelIndex from '@/views/channel/index'
import ChannelSingle from '@/views/channel/single'
import MediaIndex from '@/views/media/index'
import MediaSingle from '@/views/media/single'
import BlogIndex from '@/views/blog/index'
import Post from '@/views/Post'

const routes = [
  { path: '/', component: Home },
  { path: '/events', component: EventIndex },
  { path: '/events/:id', name: 'eventSingle', component: EventSingle, props: true },
  { path: '/films', component: FilmIndex },
  { path: '/films/:id', name: 'filmSingle', component: FilmSingle, props: true },
  { path: '/channel', component: ChannelIndex },
  { path: '/channel/:id', name: 'channelSingle', component: ChannelSingle, props: true },
  { path: '/media', component: MediaIndex },
  { path: '/media/:id', name: 'mediaSingle', component: MediaSingle, props: true },
  {
    path: '/blog',
    component: BlogIndex,
    props: true
  },
  {
    path: '/:slug',
    name: 'post',
    component: Post,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router