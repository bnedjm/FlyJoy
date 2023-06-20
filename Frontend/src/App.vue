<script setup>
import FlightBookingForm from './components/form.vue'
import flightCard from './components/flightCard.vue';
</script>

<template>
  
  <div >
    <FlightBookingForm></FlightBookingForm>
   
  </div>
  <div class="col-md-10">
      <div class="d-flex flex-wrap justify-content-end">
  <flightCard></flightCard>
  </div>
  </div>
</template>

<style scoped>

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
