
import HomeSec from '../components/HomeSection.vue'
import CheckList from '../components/CheckList.vue'

const routes = [
    { 
        path: '/', 
        component: HomeSec, 
        name: 'home' 
    },
    { 
        path: '/checklist', 
        component: CheckList, 
        name: 'checklist' 
    },
    
]

export default routes;