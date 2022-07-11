import { createRouter, createWebHashHistory } from 'vue-router'
/* import Menu from '@/components/layouts/Menu.vue' */
import Movies from '@/pages/movie/Movies.vue'
import Movie from '@/pages/movie/Movie.vue'
import MovieSearch from '@/pages/movie/MovieSearch.vue'

const routes = [
  {
    path: '/',
    name: 'movies',
    component: Movies,
  },
  {
    path: '/movie/:id',
    name: 'movie',
    props: true,
    component: Movie,
  },
  {
    path: '/search',
    name: 'search',
    props: true,
    component: MovieSearch,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
