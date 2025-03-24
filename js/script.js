//obtener datos de la API
// crear funcion para generar edad aleatoria con spread opertator
//crear lista contenedor de usuarios en html ul con ID = Usuarios
//agregar imagen a cada usuario
//agregar lista de elementos con innerHTML


const MIN = 18
const MAX = 65

const edadAleatoria = () =>  Math.floor(Math.random() *(MAX - MIN) + MIN);
     



fetch (`https://jsonplaceholder.typicode.com/users`) 
    .then (response => {
        if (!response.ok) {
            throw new Error (`Error: ${response.status}`);
        }
        return response.json()
    })

    .then ( data => {
        const edadUsers = data.map (user => {
            return{
                ...user,
                edad: edadAleatoria (),
                imagen: `../assets/img/${user.id}.jpeg`
            };
        });
        
        console.log(edadUsers);
        usuariosContainer(edadUsers);   //esto era lo que me faltaba para que saliesen las img( invocar la funcion)


    })
    .catch ( error => {
        console.error ( "Error al obtener la informacion", error);
    });


function usuariosContainer (usuarios) {
    const usuariosDom = document.getElementById ("listaUsuarios");

    usuarios.forEach (user =>{
        const liUsers = document.createElement ("li");
        liUsers.classList.add ("usuario");

        liUsers.innerHTML = `
            
            <img src= "${user.imagen}" alt="${user.name}">
            <h2>${user.name}</h2>
            <p>NombreUsuario: ${user.username}</p>
            <p>Edad: ${user.edad}</p>
            <p>Telefono: ${user.phone}</p>
            <p>Email: ${user.email}</p>
            <p>Empresa: ${user.company.name}</p>
            <p>Direccion: ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>`;
       



    usuariosDom.appendChild (liUsers);
            
                
            
        
    });
}

    

