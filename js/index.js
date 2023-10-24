const interesTarjeta = 1.3

function calcularInteresCuota(valorAPagar, cuotaNro, interes) {
    console.log("Detalle de cuota: 👇")
    let valorCuota = (valorAPagar * interes) / cuotaNro
    for (let i = 1; i <= cuotaNro; i++) {
        console.log("Cuota + interes:", i + ' $ ' + valorCuota)
    }
    console.log("En breve nos comunicaremos para coordinar el envio.")
}

function simuladorDeCuota() {
    let valorAPagar = parseInt(prompt("Ingresa el valor del producto que sea de tu interes:"))
    let cantidadDeCuotas = parseInt(prompt("Cantidad de cuotas: (trabajamos hasta 12 cuotas)"))

    if (cantidadDeCuotas >= 3 && cantidadDeCuotas <= 12) {
        if (valorAPagar === 17000 || valorAPagar === 18000 || valorAPagar === 20000) {
            console.log("Valor sin interes:", valorAPagar)
            console.log("Cantidad de cuotas:", cantidadDeCuotas)
            calcularInteresCuota(valorAPagar, cantidadDeCuotas, interesTarjeta)
        } else {
            console.error("El valor a pagar ingresado no es valido")
        }
    } else {
        console.error("El minimo de cuotas con las que trabajamos es de 3 y el maximo de 12.")
    }
}
