<template>
    <div class="container">

        <div id="form">

       <h3 class="text-black">Booking Details</h3>

       <div id="input3">
   
   <input type="checkbox" id="input-group" v-model="isOnewaySelected" @click="isReturnSelected=false" />
   <label for="input-group" class="text-black">One Way</label>
   <input type="checkbox" id="input-group" v-model="isReturnSelected" @click="isOnewaySelected=false" />
   <label for="input-group" class="text-black">Round Trip</label>
    </div>
    <table class="input5">
      <tbody>
        <tr>
          <th ><font-awesome-icon    @click="increment" :icon="['fas', 'user']"   style="color: #3453d1;"/></th>
          <th><span>Adults</span></th>
          <th ><button  :disabled="numberOfAdults === 0"><font-awesome-icon @click="decrement('numberOfAdults')" :icon="['fas', 'minus']" /></button></th>
          <th ><span >{{ numberOfAdults }}</span></th>
          <th ><button><font-awesome-icon  @click="increment('numberOfAdults')"   :icon="['fas', 'plus']" /></button></th>
        </tr>
        <tr>
          <th ><font-awesome-icon :icon="['fas', 'suitcase-rolling'] "  style="color: #3453d1;"/></th>
          <th ><span>Bags</span></th>
          <th ><button :disabled="numberOfBags === 0"><font-awesome-icon @click="decrement('numberOfBags')" :icon="['fas', 'minus']" /></button></th>
          <th ><span >{{ numberOfBags }}</span></th>
          <th ><button><font-awesome-icon  @click="increment('numberOfBags')"   :icon="['fas', 'plus']" /></button></th>
        </tr>
      </tbody>
    </table>
    
    <div id="input">
      <SearchBar   placeholder="Where from?" @selected-airport="handleOutboundAirport"/>
      <SearchBar   placeholder="Where to?"  @selected-airport="handleInboundAirport"/> 
    </div>
    

     <!-- <div id="input">
      <input type="text" id="input-group" v-model="from" placeholder="From" @input="filteredFlightData"/>
        <input type="text" id="input-group" v-model="to"  placeholder="To"/>
    </div> -->


    <div id="input2">
        
      <input type="date" id="input-group"  v-model="departureDate" />
  
   
      <input type="date" id="input-group" v-model="returnDate" :disabled="isOnewaySelected" />
    </div>
      
    

      
    <div id="input4">
    <input type="number" min="0" id="input-group" v-model="stayDurationFrom" placeholder="Duration (days) From"  />
    <input type="number" min="0" id="input-group"  v-model="stayDurationTo" placeholder="To"  />
    <input type="number" min="0" id="input-group"  placeholder="Max Stop overs" v-model="maxStopOver" />
    </div>
   

 <div class="btnStyle">
  <!-- <router-link to="/searches"> <button class="search" type="submit" @click="andleSubmit">Search</button></router-link> -->
  <button class="search" type="submit" @click="handleSubmit">Search</button>
 </div>
    <div id="input">

      
    </div>
        </div>
      

  

  
      
    </div>
  </template>
  
  <script>
  import airportData  from '../data.json'
  import SearchBar from './seachbar.vue'

  export default {
    components:{
      SearchBar
    },
    name: 'FlightBookingForm',
    data() {
      return {
        airportData: airportData,
        numberOfAdults:1,
        numberOfBags:0,
        from: '',
        to: '',
        departureDate: null,
        returnDate: null,
        isReturnSelected: false,
        isOnewaySelected:false,
        stayDurationFrom:null,
        stayDurationTo:null,
        maxStopOver:null,
        flightType:((this.isOnewaySelected===true)?this.isOnewaySelected="oneway":this.isReturnSelected='round'),

     
        // Add any other form fields you require
      };
    },

    methods: {
handleOutboundAirport(data){
this.from=data
  },
  handleInboundAirport(data){
    this.to=data
  },     
 increment(property) {
      this[property]++;
    },
    decrement(property) {
      if (this[property] > 0) {
      this[property]--;
      }},

      handleSubmit() {
        console.log('Form submitted');
        console.log('Is Return Selected:', this.isReturnSelected);
        console.log('Is One way Selected:', this.isOnewaySelected);
        console.log('Flight type: ', this.flightType);
        console.log('Number of adults', this.numberOfAdults);
        console.log('Number of bags', this.numberOfBags);
        console.log('From:', this.from);
        console.log('To:', this.to);
        console.log('Departure Date:', this.departureDate);
        console.log('Return Date:', this.returnDate);
        console.log('Duration from: ',this.stayDurationFrom);
        console.log('Duration to: ',this.stayDurationTo);
        console.log('Max stopovers: ',this.maxStopOver);
        fetch('http://54.159.155.157/searches',{
  method:'POST',
  headers:{
    'content-type':'application/json'
          },
  body:JSON.stringify({
            flight_type: this.flightType,
            adults:this.numberOfAdults,
            adult_hold_bag:this.numberOfBags,
            fly_from: this.from,
            fly_to: this.to,
            date_from: this.departureDate,
            date_to: this.returnDate,
            nights_in_dst_from: this.stayDurationFrom,
            nights_in_dst_to: this.stayDurationTo,
            max_stopovers: this.maxStopOver,
            curr: "PLN",
            one_for_city: 1,
       })
  }
)
this.$router.push('/searches')
   
      },
      


   } 
}
  </script>
  <style>

#form{
    background-color: #ffffff;
    height: auto;
    width: 700px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
@media(max-width:1300px){
  #form{
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
  }
}


#form h3{
    border-bottom:2px solid #3453d1; 
    width:210px;
    padding: 5px;
}
::placeholder{
    color: #000;
}

#input #input-group{
    width: 300px;
    margin: 5px;
    border-top: none;
    border-left: none;
    border-right:none ;
    outline: none;
    background: transparent ;

}
#input{
  display: flex;
    align-items:baseline;
   
}
#input3{
  display: flex;
    align-items:baseline;
    margin: 20px;
    margin-left: 0;
}

#input3 #input-group{
    margin-left:20px ;

}
#input3 h6{
  color: #3453d1;
}

#input2 #input-group{
    width: 300px;
    margin: 5px;
    border-top: none;
    border-left: none;
    border-right:none ;
    outline: none;
    background: transparent ;
    color: #000;
}
#input4 #input-group{
    width: 300px;
    margin: 5px;
    border-top: none;
    border-left: none;
    border-right:none ;
    outline: none;
    background: transparent ;
    color: #000;
}
#input4{
    color: #000;
}
.search{

  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
 
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
 
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 0 17px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.search:focus {
  color: #000;
}

.search:hover {
  border-color: #3453d1;
  color: #3453d1;
  fill: #3453d1;
}

.search:active {
  border-color: #3453d1;
  color: #3453d1;
  fill: #3453d1;
}

@media (min-width: 768px) {
  .search {
    min-width: 170px;
  }
}
.btnStyle{
  text-align: center;
  margin: 30px;
}



 .input5 th {
  padding-left: 10px;
  padding-bottom: 5px;
 }
.input5 button{
border-color: #3453d1;
  color:#3453d1;
  border-radius: 50%;
  background-color: white
}




</style>
  