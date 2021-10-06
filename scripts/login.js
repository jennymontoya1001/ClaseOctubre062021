//8. capturar la información de las cajas de texto

const capturar = () => {
    let usuario = document.getElementById('inputNombre').value;
    let password = document.getElementById('inputPassword').value;
    obtenerLocalStorage(usuario,password);
}

//9. capturar el formulario
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
     e.preventDefault();
     capturar();
})

//10. consultar la data almacenada en el localstorage
const  obtenerLocalStorage = (user,pass) => {
       
    let usuarios = JSON.parse(localStorage.getItem('Usuarios'));

     let login = usuarios.find(usu => usu.usuario === user && usu.password === pass)

    if(login===undefined){
        alert(`El usuario no existe`);
    }
    else{
        window.location.href = 'bienvenido.html';
    }

}