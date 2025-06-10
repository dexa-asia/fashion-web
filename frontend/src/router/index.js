import { createRouter, createWebHistory } from 'vue-router'


import MainLayout from '../layouts/MainLayout.vue'
import BlankLayout from '../layouts/BlankLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      meta: {
        requiresAuth: true,
        title:'Halaman Utama',
      },
      children:[
        {
          path:'',
          name:'hompage',
          component:() => import('@/views/site/Index.vue'),
        }
      ]
    },
    {
      path:'/auth',
      name:'auth',
      component: BlankLayout,
      children:[
        {
          path:'',
          name:'login',
          component:() => import('@/views/site/Login.vue'),
        },
      ],
    },
    {
      path:'/product',
      name:'product',
      component: MainLayout,
      children:[
        {
          path:'',
          name:'prd-index',
          component:() => import('@/views/product/Index.vue'),
        },
        {
          path:'view/:id',
          name:'prd-view',
          component:() => import('@/views/product/View.vue'),
        },
      ],
    },
]
})

export default router