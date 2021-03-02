var navbarX = document.querySelectorAll("#ratitas");
function f1()
{
    var recorrido = document.documentElement.scrollTop;
    recorrido = recorrido.toFixed(0);
    if(recorrido>300)
    {   navbarX[0].style.backgroundColor = "BLUE";
        navbarX[0].style.top = 0    ;
    }
    else
    {  navbarX[0].style.backgroundColor = "transparent";
        navbarX[0].style.top = 0;
    }
}
window.addEventListener('scroll' , f1);


