// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }

    update() {
        this.removeAllTr()
    }

    [
        {
            login: 'hudsonsena',
            name: "Hudson Sena",
            public_repos: '76',
            followers: '120000'
        },
        {
            login: 'maykbrito',
            name: "Mayk Brito",
            public_repos: '76',
            followers: '120000'
        }
    ]

    createRow() {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td class="user">
                <img src="" alt="">
                <a href="">
                    <p>Oliveira Sena</p>
                    <span>oliveirasena</span>
                </a>
            </td>

            <td class="repositories">
                76
            </td>

            <td class="foloowers">
                9589
            </td>
            
            <td><button class="remove">&times;</button></td>
        `
        return tr
    }

    removeAllTr() {
        const tbody = this.root.querySelector('table tbody')

                tbody.querySelectorAll('tr').forEach((tr) => {
                    tr.remove()
                })
    }
}