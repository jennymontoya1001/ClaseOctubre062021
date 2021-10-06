//11. mostrar usuarios registrados en el local storage en una tabla

let items = document.getElementById('items');

document.addEventListener('DOMContentLoaded', () => {

    items.innerHTML = `
       <table>
         <tr>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Apellido</th>
         </tr>
       </table>
    `

    let lista = JSON.parse(localStorage.getItem('Usuarios'));

    lista.forEach(element => {
       const {usuario,nombre,apellido} = element;
       items.innerHTML += `
            <table>
              <tr>
                <td>${usuario}</td>
                <td>${nombre}</td>
                <td>${apellido}</td>
              </tr>
            </table>
       `
        
    });
})