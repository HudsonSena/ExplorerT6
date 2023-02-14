export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }

    update() {
        this.removeAllTr()

        [
            {
                login: 'maykbrito',
                name: "Mayk Brito",
                public_repos: '76',
                followers: '120000'
            }
        ]
    }

    creatRow() {
        const tr = document.createElement('tr')
        
        tr.innerHTML = `
            <td>
                <div class="cardUser">
                    <img src="https://avatars.githubusercontent.com/u/107481318?v=4.png" alt="">
                    <a href="" target="_blank">
                        <span class="username">Hudson Diego</span>
                        <p class="login">HudsonSena</p>
                    </a>
                </div>
            </td>
            <td class="repositories">150</td>
            <td class="followers">1000</td>
            <td><a href="" class="remove">remover</a></td>
        `
    }

    removeAllTr() {
        const tbody = this.root.querySelector('table tbody')
        const menssageAdd = document.querySelector('.Nfavorito')

        tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
            menssageAdd.classList.add('displayOn')
        })
    }
}