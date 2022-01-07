import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home'
import NewsIndex from '@/views/news/index'
import NewsSingle from '@/views/news/single'
import EventIndex from '@/views/events/index'
import EventSingle from '@/views/events/single'
import FilmIndex from '@/views/films/index'
import FilmSingle from '@/views/films/single'
import ChannelIndex from '@/views/channel/index'
import ChannelSingle from '@/views/channel/single'
import MediaIndex from '@/views/media/index'
import MediaSingle from '@/views/media/single'
import BlogIndex from '@/views/blog/index'
import BlogSingle from '@/views/blog/single'

const routes = [
  { path: '/', component: Home },
  { path: '/news', component: NewsIndex },
  { path: '/news/:id', name: 'newsSingle', component: NewsSingle, props: true },
  { path: '/events', component: EventIndex },
  { path: '/events/:id', name: 'eventSingle', component: EventSingle, props: true },
  { path: '/films', component: FilmIndex },
  { path: '/films/:id', name: 'filmSingle', component: FilmSingle, props: true },
  { path: '/channel', component: ChannelIndex },
  { path: '/channel/:id', name: 'channelSingle', component: ChannelSingle, props: true },
  { path: '/media', component: MediaIndex },
  { path: '/media/:id', name: 'mediaSingle', component: MediaSingle, props: true },
  { path: '/blog', component: BlogIndex },
  { path: '/blog/:id', name: 'blogSingle', component: BlogSingle, props: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router