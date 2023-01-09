import { Router } from './router.js'

const router = new Router()
router.add('/', "/home.html")
router.add("/exploracao", "/exploracao.html")
router.add("/oUniverso", "/oUniverso.html")
router.add(404, "../pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()