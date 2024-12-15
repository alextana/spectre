import { createWebHistory, createRouter } from 'vue-router'

import Home from '../ui/Home.vue'
import ComponentList from '@/ui/ComponentList.vue'
import UiCanvas from '@/ui/UiCanvas.vue'
// import AboutView from './AboutView.vue'

const routes = [
  {
    path: '/', components: {
      default: UiCanvas,
      LeftSidebar: ComponentList,
    }
  },
  { path: '/home', component: Home },
  // { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router