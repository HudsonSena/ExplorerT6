export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
                login: 'maykbrito',
                name: "Mayk Brito",
                public_repos: '76',
                followers: '120000'
            },
            {
                login: 'HudsonSena',
                name: "Hudson Diego",
                public_repos: '200',
                followers: '200000'
            }
        ]
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.creatRow()

            row.querySelector('.cardUser img').src = `https://github.com/${user.login}.png`
            row.querySelector('.cardUser img').alt = `Imagem de ${user.name}`
            row.querySelector('.cardUser img').title = `Imagem de ${user.name}`

            row.querySelector('.username').textContent = `${user.name}`

            row.querySelector('.login').textContent = `${user.login}`

            row.querySelector('.repositories').textContent = `${user.public_repos}`
            
            row.querySelector('.followers').textContent = `${user.followers}`

            this.tbody.append(row)
        })        
    }

    creatRow() {
        const tr = document.createElement('tr')
        
        tr.innerHTML = `
            <td>
                <div class="cardUser">
                    <img src="https://avatars.githubusercontent.com/u/107481318?v=4.png" alt="" title="">
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
        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        })
    }
}