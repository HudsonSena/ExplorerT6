//Esssa forma de class, é utilizada para criar novos objetos, e ainda que eles matenham a mesma forma, como se fosse uma fôrma para objetos que consequentimente serão iguis em seus valores. 
export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        //event.preventDefault é utilizado em funções ou tag semanticas como o submit do form, para retirar ou para a função automática, ou seja, para que a função automatica do submit não funcione ou não seja ativada assim que apertar o botão.(para esse caso)
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle() {
        //const pathname = window.location.pathname
        //ou
        //Chama-se de desestruturar e pode ser usado com mais de um item do location ex: {pathname, href, port e etc...}
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        
        //fetch é uma função padrão assíncrona, só ira funcionar assim que o javaScript ler todas as outras funções síncronas.
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}