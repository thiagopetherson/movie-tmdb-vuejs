<template>
  <div>
    <Menu @procurar="getMovies" />
    <h1>{{ title }}<span>{{ this.getBusca }}</span></h1>
    <div class="movie-search">    
      <MovieCard v-for="(movie, index) in movies" :key="index" :movie="movie" :showLink="true" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Menu from '@/components/layouts/Menu.vue'
import MovieCard from '@/pages/movie/MovieCard.vue'

export default {
  name: 'MovieSearch',
  components: {
    Menu: Menu,
    MovieCard: MovieCard,
  },
  data () {
    return {
      title: 'Resultado da busca para: ',
      movies: null,     
    }
  },
  computed: {
    ...mapGetters(['getBusca']),
  },
  methods: {
    async getMovies () {
      const searchWithQueryURL = `https://api.themoviedb.org/3/search/movie/?api_key=7c239e80ee7bf4bc9b4fcea4906f0e3f&query=${this.getBusca}`
      await this.axios.get(searchWithQueryURL)        
        .then(resp => {          
          this.movies = resp.data.results          
        })  
    }
  },
  mounted () {
    this.getMovies()
  }
}
</script>

<style scoped lang="sass">

h1
  margin: 20px 0 5px 0  
  font-size: 2rem

  span
    color: #f7d354

.movie-search 
  width: 80%
  margin: 0px auto
  display: flex
  flex-wrap: wrap
  justify-content: space-around

</style>