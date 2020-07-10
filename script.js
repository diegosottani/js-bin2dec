// Ao clicar no botão, faz a conversão de binário para decimal
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

// Filtra os números digitados, somente 0 ou 1. Permite Enter para ativar o cálculo
numero.onkeypress = (num) => {
    if (num.key === '1' || num.key === '0') {
        return true
    } else if (num.key === "Enter") {
        bin2Dec.onclick()
    }
    else {
        alert("Digite apenas 0 ou 1\nEx: 11001")
        numero.focus()
        return false
    }
}