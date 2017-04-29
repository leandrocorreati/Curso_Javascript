/**
 * Created by leandro on 28/04/2017.
 */

var padrao =18;
var incremento =0;

function constraste()
{
    var cor = ["#000", "#ccc", "#cfc", "#fa4"];
    var letra = ["#fff", "#000","#000","#02c"];
    incremento++;
    if(incremento > cor.length)
    {
        incremento = 0;
    }
    document.getElementById("fundo").style.backgroundColor= cor[incremento];
    document.getElementById("texto").style.color= letra[incremento];
}
function tamFonte(contador)
{
    if(contador == 18)
    {
        padrao = contador;

    }else
    {
        padrao += contador;
    }
    if(padrao >= 81)
    {
        padrao = 81;
    }else if(padrao < 9)
    {
        padrao = 9;
    }
    document.getElementById("texto").style.fontSize=padrao + "px";
}