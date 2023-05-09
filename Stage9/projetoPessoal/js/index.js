import { Router } from './router.js'

const router = new Router()
router.add('/', "pages/home.html")
router.add("/about", "pages/about.html")
router.add("/chat", "pages/chat.html")
router.add("/clinics", "pages/clinics.html")
router.add("/login", "pages/login.html")
router.add("/professionals", "pages/professionals.html")
router.add("/register", "pages/register.html")
router.add(404, "pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const btnHome = document.querySelector('.btnHome')
const btnClinics = document.querySelector('.btnClinics')
const btnProfessionals = document.querySelector('.btnProfessionals')
const btnAbout = document.querySelector('.btnAbout')
const btnLogin = document.querySelector('.btnLogin')
const btnRegister = document.querySelector('.btnRegister')

btHome.addEventListener('click', bgHome)
function bgHome() {
    bgBody.classList.add('bgHome')
    bgBody.classList.remove('bgUniverse')
    bgBody.classList.remove('bgExploracao')
    btHome.classList.add('textcolor')
    btExploracao.classList.remove('textcolor')
    btUniverse.classList.remove('textcolor')
}
btUniverse.addEventListener('click', bgUniverse)
function bgUniverse() {
    bgBody.classList.remove('bgHome')
    bgBody.classList.add('bgUniverse')
    bgBody.classList.remove('bgExploracao')
    btHome.classList.remove('textcolor')
    btExploracao.classList.remove('textcolor')
    btUniverse.classList.add('textcolor')
}
btExploracao.addEventListener('click', bgExploracao)
function bgExploracao() {
    bgBody.classList.remove('bgHome')
    bgBody.classList.remove('bgUniverse')
    bgBody.classList.add('bgExploracao')
    btHome.classList.remove('textcolor')
    btExploracao.classList.add('textcolor')
    btUniverse.classList.remove('textcolor')
}