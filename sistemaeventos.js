//const data = new Date()
//const dia = String(data.getDate()).padStart(2, '0') // 1 -> 01
//const mes = String(data.getMonth() + 1).padStart(2,'0') // jan = 0
//const ano = data.getFullYear() // 2021
//const dataAtual = `${dia}/${mes}/${ano}`

console.log ("Selecione a data escolhida")

let datasDisponiveis = ["Sexta-feira", "Sábado", "Domingo"]
let data_Atual = ["Quinta-feira"]

if (datasDisponiveis == "Sexta-feira", "Sábado", "Domingo") {
    console.log ("Informe sua data de nascimento")
} else {
    console.log ("Informe uma data válida")
}

let dataNascimento = 19;

if (dataNascimento > 18) {
    console.log ("Aqui está a lista de participantes e palestrantes por evento")
} else {
    console.log ("O evento selecionado tem idade mínima de 18 anos")
}

let listaParticipantes = 99;

if (listaParticipantes < 100) {
    console.log ("Sua participação no evento foi confirmada")
} else {
    console.log ("Evento lotado, por favor escolher uma nova data")
}