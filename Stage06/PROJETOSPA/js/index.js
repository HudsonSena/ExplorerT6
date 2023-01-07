import { Router } from './router.js'

const router = new Router()
router.add('/', "pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

//estamos utilizando um objeto para conhecer a rotas e saber manuzealas de forma mais eficaz para esse projeto em SPA.
/*
const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    404: "/pages/404.html",
}
*/


