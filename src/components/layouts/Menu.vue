<template>
  <div class="menu-container">
        <div class="header-item header-item-1">
          <font-awesome-icon :icon="['fa', 'video']" color="red" size="1x" border />&nbsp; <router-link to="/">Top Filmes</router-link>
        </div>
        <div class="header-item header-item-2">
            <input class="campo-texto" type="text" placeholder="Busque seu filme" v-model="busca" />
            <input class="botao-busca" type="submit" value="Pesquisar" @click="procurar"/>
        </div>       
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data () {
    return {      
      busca: '',
    }
  },
  methods: {
    procurar() {
      if ( this.busca.trim() === "" ) return false  
      
      let busca = this.busca
      this.busca = ""
      
      if (this.$route.name === "search") {        
        this.$store.dispatch({ type: 'setBusca', busca: busca })
        this.$emit('procurar')
      } else {
        this.$store.dispatch({ type: 'setBusca', busca: busca })
        this.$router.push({ name: 'search' })
      }  
    }
  }
}
</script>

<style scoped lang="sass">

.menu-container
  width: 100%
  height: 60px  
  background: #121212
  color: #f7d354
  display: flex
  flex-direction: row

  .header-item       
    height: 100%
    align-items: center

  .header-item-1    
    margin-left: 50px
    color: #f7d354
    font-weight: bold
    font-size: 1.4rem
    display: flex
    flex-direction: row    
    flex-grow: 12 

  .header-item-2    
    color: black
    display: flex
    flex-direction: row    
    flex-grow: 1  
    justify-content: center    
    gap: .5rem

    .campo-texto
        padding: 10px
        border-radius: 4px
        border: none
        color: black

    .botao-busca
        padding: 10px
        background-color: #F7D354
        border: 2px solid #F7D354
        border-radius: 4px
        color: #000
        padding: .3rem        
        display: flex
        align-items: center
        cursor: pointer

        &:hover
            background-color: transparent
            color: #F7D354
      
        
</style>
