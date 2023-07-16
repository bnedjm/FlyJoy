
import { createApp } from 'vue'
import App from './App.vue'

// import routing 
import{createRouter,createWebHistory} from 'vue-router'
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft, faArrowRight, faPlane, faPlaneArrival, faPlaneDeparture, faRightLeft, faPlus,faUser,faMinus,faSuitcaseRolling,faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
library.add( faPlaneDeparture,faPlaneArrival,faRightLeft,faArrowRight,faArrowLeft,faUser,faPlus,faMinus,faSuitcaseRolling,faArrowRightArrowLeft)
// import components
import flightCard from './components/flightCard.vue'

//Router confirguaration
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/searches',component:flightCard} //our domain.com/searches => flightCard
    ]
});


const app=createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(bootstrap)
app.use(router)
app.mount('#app')

