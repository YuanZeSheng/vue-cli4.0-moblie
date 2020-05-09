<template>
  <div class="homeContainer">
    <HeaderContainer></HeaderContainer>
  </div> 
</template>

<script>
// @ is an alias to /src
import HeaderContainer from '@/components/header/header.vue'

export default {
  name: 'Home',
  components: {
    HeaderContainer
  }
}
</script>
