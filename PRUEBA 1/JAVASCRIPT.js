function funcion() {
    js = document.getElementById("js")
    js.innerHTML = "Patata"
    js.style.color = "red"
    texto = js.textContent
    console.log(texto)
}

document.getElementById("boton").onclick = function() {funcion()}