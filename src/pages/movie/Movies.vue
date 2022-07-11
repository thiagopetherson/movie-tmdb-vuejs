<template>
  <div>
    <Menu />
    <h1>{{ title }}</h1>
    <div class="movies">    
      <MovieCard v-for="(movie, index) in movies" :key="index" :movie="movie" showLink="true" />
    </div>
  </div>
</template>

<script>
import Menu from '@/components/layouts/Menu.vue'
import MovieCard from '@/pages/movie/MovieCard.vue'

export default {
  name: 'Movies',
  components: {
    Menu: Menu,
    MovieCard: MovieCard,
  },
  data () {
    return {
      title: 'Melhores Filmes',
      movies: null,
    }
  },
  methods: {
    async getMovies () {
      await this.axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=7c239e80ee7bf4bc9b4fcea4906f0e3f`)        
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
  color: #f7d354
  font-size: 2rem

.movies 
  width: 80%
  margin: 0px auto
  display: flex
  flex-wrap: wrap
  justify-content: space-around

</style>
