bin2Dec.onclick = () => {
    // recebe o número binário digitado
    let num = String(numero.value)

    // separa o número em partes e inverte a array para calcular
    let arr = num.split("").reverse()

    //faz o cálculo
    var total = 0
    for (i = 0; i < num.length; i++) {
        let aux = 2 ** i * arr[i]
        total += aux
    }

    // mostra o valor no campo
    decimal.value = total
    numero.value = ""
}