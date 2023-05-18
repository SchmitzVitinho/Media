//1117
let notaUm
let notaDois
let i
let media

i = 0

while (i<1){

notaUm = Number(prompt("digite a primeira nota: "))

if (notaUm<0 || notaUm>10) {
alert ("nota inválida")
}else{
i = 1
}
}

i = 0

while (i<1){

notaDois = Number(prompt("digite a segunda nota: "))

if (notaDois<0 || notaDois>10) {
alert ("nota inválida")
}else{
i = 1
}
}

media = (notaUm + notaDois)/2

alert('a sua média é: ' + media)