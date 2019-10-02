//Elimina todas las palabras que tengan 7 o más digitos
let mensaje = "el 20 de enero de 2019 se dio a inicio a la 3 semana  otro nacional de tecnologias";
let newMensaje = mensaje.replace(/[a-z]{7,}/g, " ");
console.log(newMensaje); 

//Eliminar expreciones que terminen en una vocal

 newMensaje1 = mensaje.replace(/[aeiou\s]\b /g, "* ");
console.log(newMensaje1); 

//Las palabras que empiezen con "M" donde la segunda letra sea vocal
let mensaje2 = "mexico mlindo";
let newMensaje2 = mensaje2.replace(/m(?=[aeiou])/g, "_");
console.log(newMensaje2); 


//Expresiones cerradas entre comillas
let mensaje3 = '"el 20 de "ener"o de "2019 se dio a inici"o a "la 3 seman"a nac"ional "de" tecnologia"';
let newMensaje3 = mensaje3.replace(/[""]+/g, '');
console.log(newMensaje3); 

//Ip´sa
let mensaje4 = "La ip de mi pc es : 128.132.1.1, la de mi compañero es 1238.168.1.1877 y la de mi otra computadora es 128.132.1.2 ";
let newMensaje4 = mensaje4.replace(/\b\d{1,3}[.]\d{1,3}[.]\d{1,3}[.]\d{1,3}\b/g, "++++");
console.log(newMensaje4); 

//Horas
let mensaje5 = "La hora es 3:57 pm ";
let newMensaje5 = mensaje5.replace(/\d+:\d+[ am| pm]+/g, " ");
console.log(newMensaje5); 


//Telefonos
let mensaje6 = "Mi número telefonico es 999-955-6976 ";
let newMensaje6 = mensaje6.replace(/[0-9]{3,3}[-][0-9]{3,3}[-][0-9]{4,4} /g, "*****");
console.log(newMensaje6); 


//Correos electronicos
let mensaje7 = "Mi correo electronico es santos07santiago@gmail.com ";
let newMensaje7 = mensaje7.replace(/ [a-zA-Z0-9.@]{18,}/g, "*****");
console.log(newMensaje7); 


//Url¨s

let mensaje8 = "Yo utilizo https://www.google.com como motor de busqueda, aunque a veces mejor uso https://www.bing.com, aunque para leer noticias, las leo en  https://www.eluniversal.com.mx ";
let newMensaje8 = mensaje8.replace(/https:..w{3}[.].*?[.]com|.mx|.net/g, "*****");
console.log(newMensaje8); 

//Codigos postales
let mensaje9 = "12856 12456 30568 1234567  33";
let newMensaje9 = mensaje9.replace(/\b[0-9]{5}\b/g, "");
console.log(newMensaje9); 


