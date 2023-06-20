<template>
    <div class="container">

        <div id="form">

       <h3 class="text-black">Booking Details</h3>

       <div id="input3">
   
   <input type="radio" id="input-group" v-model="isOnewaySelected" @click="isReturnSelected=false" />
   <label for="input-group" class="text-black">One Way</label>
   <input type="radio" id="input-group" v-model="isReturnSelected"  @click="isOnewaySelected=false"/>
   <label for="input-group" class="text-black">Round Trip</label>
    </div>

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

 <div class="btnStyle">
  <button class="search" type="submit" @click="handleSubmit">Search</button>
 </div>
    
        </div>
      

  
      <!-- Add any other form fields you require -->
  
      
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
    background-color: #ffffff;
    height: auto;
    width: 700px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}#form h3{
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

</style>
  