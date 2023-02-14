import pokedex from './img/pokedex.png'
import shop from './img/shop.png'
import toDoList from './img/toDoList.png'

export const projects = [
    {
        tittle : 'Pokedex',
        subtittle : 'Recreación de la Pokedex, nos permite buscar cualquier Pokemon. Incluye filtros de busqueda para encontrar los Pokemon que se desean',
        technologies: ['React','JS','Css','TailWind'] ,
        img : pokedex,
        link : 'https://jdomene99.github.io/Pagina1React/',
        github : 'https://github.com/JDomene99/Pagina1React',
        
    },
    {
        tittle : 'E-commerce',
        subtittle : 'E-commerce de ropa, permite al usuario crearse una cuenta y logerase. La busqueda de productos incluye filtros para una busqueda mas personalizada',
        img : shop ,
        technologies: ['React','Express','MongoDB','TailWind'],
        link : 'https://fake-shop-josedomene.netlify.app',
        github : 'https://github.com/JDomene99/E-commerce_JoseDomene'
    },

    {
        tittle : 'To Do List',
        subtittle : 'Pagina la cual permite almacenar un listado de tareas las cúales son creadas por el usuario, tambíen se le permite actualizarlas y finalizarlas',
        img : toDoList ,
        technologies: ['React','Express','MongoDB','TailWind'],
        link : 'https://todolist-oiau.onrender.com/',
        github : 'https://github.com/JDomene99/ToDoList'
    },
    
]
