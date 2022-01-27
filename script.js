/* Reglas de encriptación:
"e" es convertido para "enter"          
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"   
*/

/*Solo se permite ingreso de letgras minúsculas, no se permite acentos ni caracteres especiales. */

    var vocal = ["a", "e", "i", "o", "u"];
    var llave = ["ai", "enter", "imes", "ober", "ufat"];
    var textoIngresado = document.getElementById("input-texto");
    
    /* Función Validar Texto: valida el texto ingresado por el usuario */
    function validarTexto(texto) {
      let expresion = /^[a-z ]+$/;
      var validar = true;
      if(texto.length == 0) {
        alert("El campo está vacío");
        validar = false;
      }
      else {
          if(!expresion.test(texto)) {
            alert("Solo se admite letras minúsculas, sin acentos ni caracteres especiales");
            validar = false;
          }
      }
      textoIngresado.focus();
      textoIngresado.value = "";
      return validar;
    }
    
    /* Función Encriptar: encripta y muestra el valor del input-texto */
  	function encriptar(texto) {

      var txtEncriptado= "";
      contador = 0;
      while (contador < texto.length) {
        var letra = texto[contador];
          for(var i = 0; i < vocal.length; i++) {
            if(letra == vocal[i]) {
              letra = llave[i];
              txtEncriptado += letra;
              break;
            }
          }
          if(!vocal.includes(texto[contador])) {
            txtEncriptado += texto[contador];
          }
        contador++;     
        }
      return txtEncriptado;
    }
      
    var btnEncriptar = document.getElementById("btn-encriptar");
    btnEncriptar.addEventListener("click", function(event) {
      event.preventDefault();
      var texto = textoIngresado.value;
      if(validarTexto(texto)) {
        document.getElementById("msg").value = encriptar(texto);
      }
    });
  
    /* Función Desencriptar: desencripta y muestra el valor del input-texto */
    function desencriptar(texto) {
      
      var txtDesencriptado= "";
      for (i=0; i<llave.length; i++) {
        var txtDesencriptado = texto.replaceAll(llave[i], vocal[i]);
        texto = txtDesencriptado;
      }
      return txtDesencriptado;
    }
    
    var btnDesencriptar = document.getElementById("btn-desencriptar");
    btnDesencriptar.addEventListener("click", function(event) {
      event.preventDefault();
      var texto = textoIngresado.value;
      if(validarTexto(texto)) {
        document.getElementById("msg").value = desencriptar(texto);
      }
    });  
      
    /* Función Copiar: copia el texto a la memoria*/
    function copiar() {
      var txtCopiar = document.getElementById("msg");
      txtCopiar.select();
      document.execCommand("copy");
      txtCopiar.value= "";
    }
    var btnCopiar = document.getElementById("btn-copy");
    btnCopiar.onclick = copiar;