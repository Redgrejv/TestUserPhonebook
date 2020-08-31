
import Home from '../views/Home.vue'
import Sign from '../views/Sign.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {show: true, auth: false, showAfterAuth: true }
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: Sign,
        props: {action: 'in'},
        meta: {show: false, auth: false, showAfterAuth: false }
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: Sign,
        props: {action: 'up'},
        meta: {show: false, auth: false, showAfterAuth: false }
    },
    {
        path: '*',
        name: 'NotFound',
        meta: {show: false, auth: false, showAfterAuth: true }
    }
  ]

export default routes;