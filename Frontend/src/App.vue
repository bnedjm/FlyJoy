<script setup>
import FlightBookingForm from './components/form.vue'
import SearchBar from './components/seachbar.vue'

</script>

<template>
<div class="flex-container">


  <div class="flex-item">
    <FlightBookingForm></FlightBookingForm>
  </div>
  
  <div class=" flex-item d-flex flex-wrap ">
  <router-view></router-view>
  </div>
  

</div>

</template>

<style scoped>
/* .grid-container{
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
} */
.flex-container{
  display: flex;
gap: 3rem;
justify-content: center;

}
.flex-item{
  flex: 1;
  max-width: 700px;
 
}
@media(max-width:1300px){
  .flex-container{
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .flex-item{
    align-items: center;
    justify-content: center;
  }
}
.searchForm{
flex-basis: 700px;
}
.searchResult{
  flex-basis: 600px;

}

</style>
