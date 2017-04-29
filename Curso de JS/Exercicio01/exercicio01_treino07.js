/**
 * Created by leandro on 28/04/2017.
 */
function clique()
{
    document.getElementById("fundo").style.backgroundColor = "000";
}
function troca(cor)
{
    if (cor =="vermelho")
    {
        document.getElementById("fundo").style.backgroundColor = "red";
        document.getElementById("quadrado").style.backgroundColor = "#f0f";
    }
    else if(cor == "verde")
    {
        document.getElementById("fundo").style.backgroundColor = "green";
    }
    else
    {
        document.getElementById("fundo").style.backgroundColor = "blue";
    }
}