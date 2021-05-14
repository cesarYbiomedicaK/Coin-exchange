import numeral from 'numeral';
const dollarFilter = (value) => {
    if (!value){
        return '$ 0'
    }
    return numeral(value).format('($ 0.00a)')
} 

const percentFilter = (value) => {
    if(!value){
        return '0%';
    }
    return `${Number(value).toFixed(2)}%`
}
// No hacemos export default, para que se pueda 
// importar de manera atómica para que cuando se importe
// no se importe otro tipo de filtro
export {dollarFilter, percentFilter}