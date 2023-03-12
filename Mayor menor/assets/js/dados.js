console.log("hola desde dados");
function lanzardados() {
    let dado1 =   Math.floor(Math.random() * 6)+1;
    let dado2 =   Math.floor(Math.random() * 6)+1;
    let suma = dado1 + dado2;

    $({ deg: 0 }).animate({ deg: 360 }, {
        duration: 600,
        step: function (now) {
            var scale = (1 * now / 360);
            $('#ImgDado1').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgDado2').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
        }
    }); 
    document.getElementById("ImgDado1").src="assets/images/dados/"+dado1+".svg";
    document.getElementById("ImgDado2").src="assets/images/dados/"+dado2+".svg";    
    document.getElementById("SumaDados").innerHTML = suma;
    if(suma==7){
        alert("Gana la Casa");
    }
    if (suma > 0 && suma < 7 && document.getElementById("menoradio").checked) {
        alert("Ganaste");
    }
    else if(suma > 7 && suma < 13 && document.getElementById("mayoradio").checked)
    {
        alert("Ganaste");
    }
    else if(suma > 7 && suma < 13 && document.getElementById("menoradio").checked)
    {
        alert("Perdiste");
    }
    else if(suma > 0 && suma < 7 && document.getElementById("mayoradio").checked)
    {
        alert("Perdiste");
    }
    //$('#ImgDado1').attr("src", "../img/dados/"+dado1+".svg");
    //$('#SumaDados').html(suma);
    
}
