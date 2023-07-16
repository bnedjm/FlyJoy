
<template>
  <div class="flight-card" v-for="flightItem in flight" :key="flightItem.id" >
       
     

      <div class="cities ">
        <table class="table">
        <tbody>
          <tr>
            <th><font-awesome-icon :icon="['fasl', 'plane-departure']" style="color: #3453d1;" /></th>
            <th></th>
            <th> <span class="date" >{{ flightItem.outbound_date }}</span></th>
            <th> <font-awesome-icon :icon="['fas', 'arrow-right-arrow-left']" style="color: #3453d1;"  /> </th>
            <th><span class="date">{{ flightItem.inbound_date }}</span></th>
            <th></th>
            <th> <font-awesome-icon icon="fa-solid fa-plane-departure" flip="horizontal" style="color: #3453d1;"/></th>
          </tr>
    <tr >
      <th class="time" scope="col">17:00</th>
      <th class="city-code" scope="col">{{ flightItem.departure_airport_code }}</th>
      
      <th scope="col">{{ flightItem.departure_city }}</th>

      <th scope="col"><font-awesome-icon :icon="['fas', 'arrow-right']" style="color: #3453d1;" /></th>

      <th scope="col">{{ flightItem.dest_city }}</th>
      
      <th class="city-code" scope="col ">{{ flightItem.dest_airport_code}}</th>
      <th class="time" scope="col">19:00</th>
    </tr>
    <tr >
      <th scope="col" class="time">20:00</th>
      <th class="city-code" scope="col">{{ flightItem.dest_airport_code}}</th>
      <th scope="col">{{ flightItem.dest_city }}</th>
 

      <th scope="col"><font-awesome-icon :icon="['fas', 'arrow-left']" style="color: #3453d1;" /></th>
      <th scope="col">{{ flightItem.departure_city }}</th>
      <th class="city-code" scope="col">{{ flightItem.departure_airport_code }}</th>
      <th class="time" scope="col">22:00</th>
    

 
    </tr>
  </tbody>
</table>
      </div>
      
      
      <div class="stopovers">
        
        <i class="fas fa-exchange-alt"></i>
        <span v-if="flightItem.stop_overs === 0">Non-stop</span>
        <span v-else-if="flightItem.stop_overs === 1">1 Stop</span>
        <span v-else>{{ flightItem.stop_overs }} Stops</span>
        
        <span class="stopover-city" v-if="flightItem.stop_overs > 0">via {{ flightItem.via_city }}</span>
      </div>
      <div class="price">
        <span class="currency">$</span>
        {{ flightItem.lowestPrice }}
      </div>
    <!-- </div> -->
  </div>
</template>

  
  <script>
import flightData from '../flightdetails.json'

  export default {
    data(){
return{
    flight:flightData.flights,
    results:[],
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
      stopoverCity: String,
      flightResults:Function,
    },
    methods:{
      Mounted(){
     
     fetch('https://flyjoy-41368-default-rtdb.europe-west1.firebasedatabase.app/flightSearch.json')
     .then(response=>{if(response.ok){
       return response.json()
     }})
     .then(data=>{console.log(data);
    const results=[];
    for(const id in data){
      results.push({
        id:id,

      })
    }
    }

     
     )
   
   }
    }
  };
  </script>
  <style scoped>
  .flight-card {
    background-color: #ffffff;
    border-radius: 6px;
    padding: 15px;
    height: auto;
    width: 600px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  @media(max-width: 1300px){
    .flight-card{
      width: 395px;
      padding: 5px;
    }
    .dates{
      display: flex;
      align-items: center;
    }
  }
  
  .flight-card-header {
    display: flex;
    align-items:center;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .city {
    font-size: 18px;
  }
  
   .city-code {
    font-size: 14px;
    color: #999;
  }
   

  
  .flight-card-body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .cities{
    display: flex;
    justify-content:space-between;
    margin-bottom: 10px;

  }
  /* .city{
    margin-left: 40px;
    margin-right: 5px;
  } */
  /* .city-code{
    margin-right: 15px;
  } */
 
    .time{
      color: #3453d1;
    }
 
  .dates .date {
    font-size: 14px;
    color:#3453d1;
    /* margin-left:10px; */
    margin-right:70px;
    margin-left: 60px;
  }
  
  .price {
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3453d1
  }
  
  .price .currency {
    font-size: 16px;
    margin-right: 2px;
  }
  
  .stopovers {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .stopovers .fa-exchange-alt,
  .stopovers .fa-map-marker-alt {
    margin: 0 5px;
    color: #777;
    
  }
  .stopovers .stopover-city {
    margin-left: 5px;
    color: #777;
  }
  </style>
