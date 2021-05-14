const url="https://api.coincap.io/v2"

let getAssets = () =>{
    // Estamos buscando 20 criptomonedas,
    // por eso limit
    // then y .json son promesas

    // data es un atributo de la respuesta
    return fetch(`${url}/assets?limit=20`)
    .then(rslt => rslt.json())
    .then(rslt => rslt.data);
}
let getAsset = (coin) => {
    return fetch (`${url}/assets/${coin}`)
    .then( res => res.json())
    .then( res => res.data)
}
// Para obtener el historial de una monera
let getAssetHistory = (coin) => {
    // Nos da la hora
    const now = new Date()
    // Es el valor de ahora (dia)
    const end = now.getTime()
    // Da la fecha de un día anterior
    now.setDate(now.getDate()-1)
    // El valor de ayer (dia)
    const start = now.getTime()
    return fetch (
        `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    )
    .then(res => res.json())
    .then(res => res.data)
}
let getMarket = (coin) => {
    return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(h => h.json())
    .then(h=> h.data)
}
let getExchange = (id) => {
    return fetch(`${url}/exchanges/${id}`)
    .then(h => h.json())
    .then(h => h.data)
}
export default{
    getAssets,
    getAsset,
    getAssetHistory,
    getMarket,
    getExchange
}