let nombre = document.getElementById("nombreAlumno")
let correo = document.getElementById("correoAlumno")
let password = document.getElementById("passAlumno")
let password2 = document.getElementById("pass2Alumno")
let pais = document.getElementById("paisAlumno")
let inscribir = document.getElementById("inscribeme")
let checado = document.getElementById("exampleCheck1")

const verif1 = ()=>{
  if(checado.checked == false){
    alert("Debes estar de acuerdo con los términos")
    inscribir.disabled = true;
  }
  if(password.value === password2.value){
    inscribir.disabled = false;
  }else{
    inscribir.disabled = true;
    alert("Escribe la misma contraseña");
  }
}

inscribir.addEventListener("click", verif1)