console.log("hola desde dados");
function lanzardados() {
    let dados1 =   Math.floor(Math.random() * 6)+1;
    let dados2 =   Math.floor(Math.random() * 6)+1;
    let suma = dados1 + dados2;

    $({ deg: 0 }).animate({ deg: 360 }, {
        duration: 600,
        step: function (now) {
            var scale = (1 * now / 360);
            $('#ImgDados1').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgDados2').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
        }
    }); 
    document.getElementById("ImgDados1").src="assets/images/dados/"+dados1+".svg";
    document.getElementById("ImgDados2").src="assets/images/dados/"+dados2+".svg";    
    document.getElementById("SumaDados").innerHTML = suma;
    if(suma==7){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡¡GANA LA CASA!!',
          showConfirmButton: false,
          timer: 1500
        })
    }
    if (suma > 0 && suma < 7 && document.getElementById("menoradio").checked) {
        // alert("Ganaste");
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡¡FELICIDADES GANASTE!!',
          showConfirmButton: false,
          timer: 1500
        })
    }
    else if(suma > 7 && suma < 13 && document.getElementById("mayoradio").checked)
    {
        // alert("Ganaste");
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡¡FELICIDADES GANASTE!!',
          showConfirmButton: false,
          timer: 1500
        })
    }
    else if(suma > 7 && suma < 13 && document.getElementById("menoradio").checked)
    {
       Swal.fire({
          position: 'center',
          icon: 'warning',
          title: '¡¡PERDISTE!!',
          showConfirmButton: false,
          timer: 1500
        })
    }
    else if(suma > 0 && suma < 7 && document.getElementById("mayoradio").checked)
    {
        // alert("Perdiste");
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: '¡¡PERDISTE!!',
          showConfirmButton: false,
          timer: 1500
        })
    }
    //$('#ImgDados1').attr("src", "../img/dados/"+dados1+".svg");
    //$('#SumaDados').html(suma);
    
}
