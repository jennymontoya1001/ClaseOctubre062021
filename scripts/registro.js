//5. creación de un array, arreglo, vector o lista
let array = [];

//1. capturar los datos que deseamos registrar (guardar)

const capturaDatos = () => {
     let usuario = document.getElementById('inputUsuario').value;
     let nombre = document.getElementById('inputNombre').value;
     let apellido = document.getElementById('inputApellido').value;
     let password = document.getElementById('inputPassword').value;
     let repeat = document.getElementById('inputRepeat').value;
    
     
     if(password===repeat){
        guardarLocalStorage(usuario,nombre,apellido,password);
        alert(`Usuario registrado`);
     }
     else{
         alert(`Las contraseñas no coinciden`);
     }
}

//2. capturar o controlar evento del formulario
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    capturaDatos();
})

//3. función almacenar en local storage

const guardarLocalStorage = (usu,nom,apell,pass) =>{

    //4. crear un objeto con la información recibida desde la función capturaDatos
    const objeto = {
         usuario: usu,
         nombre: nom,
         apellido: apell,
         password: pass
    }
     
    //6. guardar el objeto en el array que creamos de manera global
      array.push(objeto)
  
    //7. Almacenar en el local storage
    localStorage.setItem('Usuarios',JSON.stringify(array));
}