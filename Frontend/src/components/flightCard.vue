<template>
    <div class="card mb-3 mr-3" v-for="flightItem in flight" :key="flightItem.id">
      <div class="card-header">
        {{ flightItem.departure_city }} ({{ flightItem.departure_airport_code }}) to {{ flightItem.dest_city }} ({{ flightItem.dest_airport_code }})
      </div>
      <div class="card-body">
        <h5 class="card-title">Outbound: {{ flightItem.outbound_date }}</h5>
        <h5 class="card-title">Inbound: {{ flightItem.inbound_date }}</h5>
        <p class="card-text">Price: {{ flightItem.lowestPrice }}</p>
        <p class="card-text">Number of Stopovers: {{ flightItem.stop_overs }}</p>
        <p v-if="stopoverCount > 0">Stopover City: {{ flightItem.via_city }}</p>
      </div>
    </div>
  </template>
  
  <script>
import flightData from '../flightdetails.json'

  export default {
    data(){
return{
    flight:flightData.flights
}
    },
    props: {
      departureCity: String,
      departureCityCode: String,
      arrivalCity: String,
      arrivalCityCode: String,
      outboundDate: String,
      inboundDate: String,
      price: Number,
      stopoverCount: Number,
      stopoverCity: String
    }
  };
  </script>
  