const estudantes = [
    {
        nome: "Maria", 
        primeiranota: 10, 
        segundanota: 9
    },
    {
        nome: "José", 
        primeiranota: 8, 
        segundanota: 7
    },
    {
        nome: "João",
        primeiranota: 6,
        segundanota: 5
    },
    {
        nome:"Rita",
        primeiranota: 7,
        segundanota: 9
    }
]

function operation(num1, num2){
    media = (num1 + num2)/2
}

index = 0
for(let value in estudantes){
    operation(estudantes[index].primeiranota, estudantes[index].segundanota)

    if(media >= 7){
        alert(`Parabéns, ${estudantes[index].nome}! Sua média é de ${media}, você passou no concurso`)
    } else {
        alert(`Não foi dessa vez, ${estudantes[index].nome}. Sua média é de ${media}, você não passou no concurso`)
    }
    index++
}

/*let estudante02 = {
    nome: "José", 
    primeiranota: 8, 
    segundanota: 7
}
let estudante03 = {
    nome: "João", 
    primeiranota: 6, 
    segundanota: 5
}
let estudante04 = {
    nome: "Rita", 
    primeiranota: 7, 
    segundanota: 7
}*/

/*let media1 = (estudante01.primeiranota + estudante01.segundanota) / 2
let media2 = (estudante02.primeiranota + estudante02.segundanota) / 2
let media3 = (estudante03.primeiranota + estudante03.segundanota) / 2
let media4 = (estudante04.primeiranota + estudante04.segundanota) / 2

if(media1 >= 7) {
    alert(`${estudante01.nome} obteve média de ${media1}, Parabéns, você passou no concurso`)
} else {
    alert(`${estudante01.nome} obteve média de ${media1}, Não foi dessa vez, tente o próximo concurso`)
}

if(media2 >= 7) {
    alert(`${estudante02.nome} obteve média de ${media2}, Parabéns, você passou no concurso`)
} else {
    alert(`${estudante02.nome} obteve média de ${media2}, Não foi dessa vez, tente o próximo concurso`)
}

if(media3 >= 7) {
    alert(`${estudante03.nome} obteve média de ${media3}, Parabéns, você passou no concurso`)
} else {
    alert(`${estudante03.nome} obteve média de ${media3}, Não foi dessa vez, tente o próximo concurso`)
}

if(media4 >= 7) {
    alert(`${estudante04.nome} obteve média de ${media4}, Parabéns, você passou no concurso`)
} else {
    alert(`${estudante04.nome} obteve média de ${media4}, Não foi dessa vez, tente o próximo concurso`)
}*/