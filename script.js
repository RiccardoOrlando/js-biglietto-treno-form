// DOM Elements
const formname = document.getElementById("nome")
const nomepasseggerobigl = document.getElementById("passeggero")
const formKM = document.getElementById("km")
const formEtà = document.getElementById("età")
const button = document.getElementById("genera")
const annulla = document.getElementById("annulla")
const offertabigl = document.getElementById("biglietto")
const carrozzaelm = document.getElementById("carrozza")
const cpcode = document.getElementById("codicecp")
const costobiglietto = document.getElementById("costobiglietto")
const sectionbiglietto = document.getElementById("sectionbigl")


button.addEventListener("click", function(){
    const km = Number(formKM.value);
    const età = Number(formEtà.value);
    const pricebigl = (km * 0.21).toFixed(2);
    const carrozza= Math.floor(Math.random() * 10);
    const codicecp= Math.floor(Math.random() * 10000) + 90000;
    const iltuobiglietto = sectionbiglietto.classList.remove("d-none")

    // Calcolo Sconto
    const discountunder = ((pricebigl / 100) * 20).toFixed(2);
    const priceunder = (pricebigl - discountunder).toFixed(2);

    const discountover = ((pricebigl / 100) * 40).toFixed(2);
    const priceover = (pricebigl - discountover).toFixed(2);

    if (età < 18) {
        nomepasseggerobigl.innerHTML = formname.value
        offertabigl.innerHTML = "discounted price (under 18)"
        costobiglietto.innerHTML = priceunder
        carrozzaelm.innerHTML = carrozza
        cpcode.innerHTML = codicecp
    } else if (età >= 65) {
        nomepasseggerobigl.innerHTML = formname.value
        offertabigl.innerHTML = "discounted price (over 65)"
        costobiglietto.innerHTML = priceover
        carrozzaelm.innerHTML = carrozza
    } else {
        nomepasseggerobigl.innerHTML = formname.value
        offertabigl.innerHTML = "FULL PRICE"
        costobiglietto.innerHTML = pricebigl
        carrozzaelm.innerHTML = carrozza
    }

})


annulla.addEventListener("click", function(){
    const iltuobiglietto = sectionbiglietto.classList.add("d-none")
})