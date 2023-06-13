<template>
    <div class="container">

        <div id="form">

       <h3 class="text-white">Booking Details</h3>

    <div id="input">
      <input type="text" id="input-group" v-model="from" placeholder="From"/>
        <input type="text" id="input-group" v-model="to"  placeholder="To"/>
    </div>

    <div id="input2">
        
      <input type="date" id="input-group"  v-model="departureDate" />
  
   
      <input type="date" id="input-group" v-model="returnDate"  />
    </div>
      
    

      
    <div id="input4">
    <input type="number" min="0" id="input-group" v-model="stayDurationFrom" placeholder="Duration (days) From"  />
    <input type="number" min="0" id="input-group"  v-model="stayDurationTo" placeholder="To"  />
    <input type="number" min="0" id="input-group"  placeholder="Max Stop overs" v-model="maxStopOver" />
    </div>

    <div id="input3">
    <span class="text-primary" id="input-group"><h6> Select your Fare</h6></span>
    <input type="radio" id="input-group" v-model="isOnewaySelected" @click="isReturnSelected=false" />
    <label for="input-group" class="text-white">One Way</label>
    <input type="radio" id="input-group" v-model="isReturnSelected"  @click="isOnewaySelected=false"/>
    <label for="input-group" class="text-white">Round Trip</label>
     </div>

        </div>
      

  
      <!-- Add any other form fields you require -->
  
      <button class="search" type="submit" @click="handleSubmit">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FlightBookingForm',
    data() {
      return {
        from: '',
        to: '',
        departureDate: null,
        returnDate: null,
        isReturnSelected: false,
        isOnewaySelected:false,
        stayDurationFrom:null,
        stayDurationTo:null,
        maxStopOver:null,
        // Add any other form fields you require
      };
    },
    methods: {
      // handleSubmit() {
      //   console.log('Form submitted');
      //   console.log('From:', this.from);
      //   console.log('To:', this.to);
      //   console.log('Departure Date:', this.departureDate);
      //   console.log('Return Date:', this.returnDate);
      //   console.log('Is Return Selected:', this.isReturnSelected);
      //   // Perform additional logic here, such as validation or API requests
      // },
    
    }
  };
  </script>
  <style>
#form{
    background-color: #000;
    height: 500px;
    width: 700px;
    margin: auto;
    padding: 20px;
    opacity: 0.7;
}#form h3{
    border-bottom:2px solid #3399ff; 
    width:210px;
    padding: 5px;
}
::placeholder{
    color: #fff;
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

#input3 #input-group{
    margin-left:50px ;

}

#input2 #input-group{
    width: 300px;
    margin: 5px;
    border-top: none;
    border-left: none;
    border-right:none ;
    outline: none;
    background: transparent ;
    color: #fff;
}
#input4 #input-group{
    width: 300px;
    margin: 5px;
    border-top: none;
    border-left: none;
    border-right:none ;
    outline: none;
    background: transparent ;
    color: #fff;
}
#input4{
    color: #fff;
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
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  letter-spacing: -.8px;
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
  border-color: #3399ff;
  color: #3399ff;
  fill: #3399ff;
}

.search:active {
  border-color: #3399ff;
  color: #3399ff;
  fill: #3399ff;
}

@media (min-width: 768px) {
  .search {
    min-width: 170px;
  }
}

</style>
  