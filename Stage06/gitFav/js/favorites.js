import { GithubUser } from "./GithubUser.js"

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []        
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))        
    }

    async add(username) {
        try {
            const userExists = this.entries.find(entry => entry.login === username)
            const user = await GithubUser.search(username)

            if(userExists) {
                throw new Error('Usuário ja existe')
            }

            if(user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }            

            this.entries = [user, ...this.entries]
            this.update()
            this.save()
            this.conditiondisplay()

        } catch(error) {
            alert(error.message)
        }
        
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
        this.conditiondisplay()
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')        

        this.update()
        this.onadd()
        this.conditiondisplay()
    }

    conditiondisplay() {
        this.displayOff = this.root.querySelector('.Nfavorito')

        if(this.entries.length == 0) {
            this.displayOff.classList.add('displayOn')
        } else {
            this.displayOff.classList.remove('displayOn')
        }
    }

    onadd() {
        const addButton = this.root.querySelector('.boxInput button')
        
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.boxInput input')

            this.add(value)
        }
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

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar este favorito?')
                if(isOk) {
                    this.delete(user)
                }
            }

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