

<template>
    <div class="autocomplete" >
      <input type="text" class="input-group" v-model="searchValue" @input="filterAirports" :placeholder="placeholder">
      <ul v-if="showDropdown" class="autocomplete-list">
        <li v-for="airport in filteredAirports" :key="airport.IATA" @click="selectAirport(airport)">
          {{ airport.Airport }} {{ airport.IATA }}
        </li>
      </ul>
      
    </div>
  </template>
  
  <script>
  import airportData from '../data.json'
  export default {
    props:{
        placeholder:{
      type: String,
      required: true
    },
        airports: {
      type: Array,
      required: true
    }    },
    data() {
      return {
        searchValue: "",
        airports:airportData,
        filteredAirports: [],
        showDropdown: false
      };
    },
    methods: {
      filterAirports() {
        const searchQuery = this.searchValue.toLowerCase();
        this.filteredAirports = this.airports.filter((airport) =>
          airport.Airport.toLowerCase().startsWith(searchQuery)
        );
        this.showDropdown = !!this.searchValue;
      },
      selectAirport(airport) {
        this.searchValue = airport.Airport;
        this.showDropdown = false;
        this.$emit('selected-airport',this.searchValue)
        // Emit an event or perform further actions with the selected airport
      }
    }
  };
  </script>
  
  <style scoped>
  .autocomplete {
    position: relative;
  }

  .input-group{
    width: 300px;
    margin: 5px;
    border-top: none;
    border-left: none;
    border-right:none ;
    outline: none;
    background: transparent ;
    color: #000;
  }
  
  .autocomplete-list {
    position: absolute;
    z-index: 10;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    background-color: white;
    border: 1px solid #ccc;
    list-style: none;
    padding: 0;
  }
  
  .autocomplete-list li {
    padding: 8px;
    cursor: pointer;
  }
  
  .autocomplete-list li:hover {
    background-color: #f5f5f5;
  }
  </style>
  