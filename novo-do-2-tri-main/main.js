
const frm = document.querySelector("form")
const resp1 = document.querySelector("loutMedicamento")
const resp2 = document.querySelector("#out Promocao")


frm.addEventListener("submit", (e) => {

const medicamento = frm.inMedicamento.value
const preco = Number(frm.inPreco.value)


const promocao = Math.floor(preco * 2)


resp1.innerText = `Promoção de ${medicamento}`
resp2.innerText = `Leve 2 por apenas R$ $ (promocao.toFixed(2)}`
e.preventDefault()
})