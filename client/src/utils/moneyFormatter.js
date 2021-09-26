export function moneyFormatter(value){
    let decimalValue = value.toFixed(2)
    let commaValue = String(decimalValue).replace('.',',')
    let formattedValue = `R$ ${commaValue}`
    return formattedValue
}