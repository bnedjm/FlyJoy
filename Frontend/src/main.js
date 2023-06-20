import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft, faArrowRight, faPlane, faPlaneArrival, faPlaneDeparture, faRightLeft, faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faPlaneDeparture,faPlaneArrival,faRightLeft,faArrowRight,faArrowLeft)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(bootstrap).mount('#app')

