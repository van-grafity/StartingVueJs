import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Register = () => import('./views/Register').then(m => m.default || m)
const Login = () => import('./views/Login').then(m => m.default || m)
const Home = () => import('./views/Home').then(m => m.default || m)
const Headers = () => import('./views/Headers').then(m => m.default || m)
const Footer = () => import('./views/Footer').then(m => m.default || m)
const ForgotPassword = () => import('./views/ForgotPassword').then(m => m.default || m)


const routes = [
    { path: '/Register', name: 'register', component: Register },
    { path: '/Login', name: 'login', component: Login },
    { path: '/Home', name: 'home', component: Home },
    { path: '/Headers', name: 'headers', component: Headers },
    { path: '/Footer', name: 'footer', component: Footer },
    { path: '/ForgotPassword', name: 'forgotPassword', component: ForgotPassword }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router