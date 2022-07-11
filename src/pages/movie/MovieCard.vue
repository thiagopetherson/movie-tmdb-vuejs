<template> 
    <div class="movie-card"> 
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title">
      <h2>{{ movie.title }}</h2>
      <p><i class="fa-solid fa-star icon-color"></i> {{ movie.vote_average }}</p>
      <router-link v-if="showLink" class="router-link" :to="`/movie/${movie.id}`">Detalhes</router-link>
      <p v-if="!showLink" class="tagline">{{ movie.tagline }}</p> 
      <a :href="`https://www.youtube.com/results?search_query=${movie.title} Trailer`" target="_blank" v-if="!showLink" class="btn-trailer">
        <i class="fa-brands fa-youtube"></i> Trailer
      </a>     
    </div>
    <div class="movie-details" v-if="!showLink">   
      <div class="movie-details-item">   
        <MovieDetails :movie="movie" />
      </div>
    </div> 
</template>

<script>
import MovieDetails from '@/pages/movie/MovieDetails.vue'

export default {
  name: 'MovieCard',
  components: {
    MovieDetails: MovieDetails
  },
  props: {
    movie: {
      type: Object,
      default: null
    },
    showLink: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped lang="sass">

.movie-card
  width: 30%
  display: flex
  flex-direction: column
  padding: 1.5rem  
  background-color: #111
  margin-top: 1rem
  margin-bottom: 1rem

  img
    max-width: 100%
    margin-bottom: 1rem

  h2
    margin-bottom: 1rem

  p
    font-size: 1.3rem
    margin-bottom: 1rem
    font-weight: bold

    .icon-color
      font-size: 1.3rem
      color: #f7d354
      font-weight: bold
  
  .tagline
    text-align: center
    font-size: 1rem      
    font-style: italic

  .router-link
    background-color: #f7d354
    border: 2px solid #f7d354
    border-radius: 4px
    color: #000
    padding: 1rem 0.5rem
    text-align: center
    font-weight: bold

    &:hover
      background-color: transparent
      color: #f7d354  

  .btn-trailer
    background-color: #c4302b 
    border-radius: 4px
    color: #fff
    padding: 1rem 0.5rem
    text-align: center
    font-weight: bold
    width: 35%
    align-self: center

    &:hover
      background-color: transparent
      border: 1px solid #c4302b 
      color: #fff 

.movie-details
  display: flex
  flex-direction: row
  justify-content: center
  
  .movie-details-item
    width: 45%

</style>
