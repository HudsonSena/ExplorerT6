let estudante01 = {
    nome: "Maria", 
    primeiranota: 10,
    segundanota: 9
}
let estudante02 = {
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
}

let media1 = (estudante01.primeiranota + estudante01.segundanota) / 2
let media2 = (estudante02.primeiranota + estudante02.segundanota) / 2
let media3 = (estudante03.primeiranota + estudante03.segundanota) / 2
let media4 = (estudante04.primeiranota + estudante04.segundanota) / 2

/* ---Tentanto automatizar---
cont = 1
while(cont <= 4) {
    cont++
    if(media[cont]) {
        alert(`${estudante0[cont]} obteve média de ${media[cont]}, Parabéns, você passou no concurso`)
    } else {
        alert(`${estudante0[cont].nome} obteve média de ${media[cont]}, Não foi dessa vez, tente o próximo concurso`)
    }
}
*/

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
}