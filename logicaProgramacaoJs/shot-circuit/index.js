/*
&& -> false && true -> false
|| ->
*/
console.log('luiz otavio' && 0 && 'maria')//isso retornara 0 porque esse valor é avaliado como false, e acontece o curto-circuto onde foi avaliado o false
/*valores que avaliam em falso no javaScript
    *:false(falso literal)
    *:0
    *: strings vazias('',"")
    *:null/undefined
    *:NaN
    qualquer coisa foram a listagem acima, é listado como true
*/
console.log('Luiz' && 'Maria') //isso retorna Maria por que todo o circuito é true, e o ultimo avaliado é o que sera exibido
console.log('luiz' && NaN && 'Maria')

//tudo isso é util para fazer um codigo perfomatico e com menos linhas
function falaOi() {
    return 'Oi'
}
const vaiExecutar = NaN
//veja que com esse operador não precisei criar blocos condicionais para executar a função
console.log(vaiExecutar && falaOi())

//exemplo ||(or)
const corUsuario = null;
const corPadrao = corUsuario || 'preto'