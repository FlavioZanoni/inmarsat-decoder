const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let ask = () => {
  readline.question(`Qual o codigo? `, binario => {

    console.log(`decodificando '${binario}' !`)

    // clear the string
    binario = binario.trim()

    // if the binario has spaces, take them out
    if (binario[8] == ' ') {
      let binarioCut = binario.substring(0, 8) + binario.substring(9, 17) + binario.substring(18, 26) + binario.substring(27, 35)

      binario = binarioCut
    }

    let info = {
      dia: "",
      hora: "",
      nivel: "",
      chuva: "",
      coletor: ""
    }

    if (binario.length == 32) {
      info.dia = parseInt(binario.substring(0, 5), 2)
      info.hora = parseInt(binario.substring(5, 10), 2)
      info.nivel = parseInt(binario.substring(10, 24), 2)
      info.chuva = parseInt(binario.substring(24, 32), 2)

    } else if ((parseInt(binario.substring(0, 6), 2) == 63) && (binario.length == 40)) {
      if (binario.length() <= 32) {
        info.coletor = parseInt(binario.substring(0, 6), 2)
        info.chuva = parseInt(binario.substring(6, 14), 2)
        info.nivel = parseInt(binario.substring(14, 32), 2)
      } else {
        info.coletor = parseInt(binario.substring(0, 6), 2)
        info.chuva = parseInt(binario.substring(6, 22), 2)
        info.nivel = parseInt(binario.substring(22, 40), 2)
      }
    }

    console.log(info)
    ask()
  })
}

ask()