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
    function validarTexto() {
      var texto = textoIngresado.value;
      let expresion = /[a-z_ ]/;

      if(texto.length == 0) {
        alert("El campo está vacío");
        return false;
      }
      else {
        for(var i=0; i<texto.length; i++) {
          if(!expresion.test(texto[i])) {
            alert("Solo se admite letras minúsculas, sin acentos ni caracteres especiales");
            textoIngresado.value = "";
            textoIngresado.focus();
            return false;
          }
        }
      }
    }
    var btnValidar = document.getElementById("btn-encriptar");
    btnValidar.addEventListener("click", validarTexto);
    
    /* Función Encriptar: encripta y muestra el valor del input-texto */
  	function encriptar() {

      var texto = textoIngresado.value;
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
      textoIngresado.value = "";
      document.getElementById("msg").value = txtEncriptado;
    }
      
    var btnEncriptar = document.getElementById("btn-encriptar");
    btnEncriptar.addEventListener("click", encriptar);
  
    /* Función Desencriptar: desencripta y muestra el valor del input-texto */
    function desencriptar() {
      var texto = textoIngresado.value;
      var txtDesencriptado= "";

      for (i=0; i<llave.length; i++) {
        var txtDesencriptado = texto.replaceAll(llave[i], vocal[i]);
        texto = txtDesencriptado;
      }
      textoIngresado.value = "";
      document.getElementById("msg").value = txtDesencriptado;
    }
    
    var btnDesencriptar = document.getElementById("btn-desencriptar");
    btnDesencriptar.addEventListener("click", desencriptar);  
      
    /* Función Copiar: copia el texto a la memoria*/
    function copiar() {
      var txtCopiar = document.getElementById("msg");
      txtCopiar.select();
      document.execCommand("copy");
      txtCopiar.value= "";
    }

    var btnCopiar = document.getElementById("btn-copy");
    btnCopiar.onclick = copiar;