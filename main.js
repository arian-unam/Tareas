//Comentario
//Variable: le asignamos un valor. se define como let
//let nombre;
//console.log(nombre);
//nombre =  "Arian";// definimos una cadena de caracteres

//Hola mundo
//console.log("Hola Mundo desde la consola!");

//Hola mundo desde un alert
//alert("Hola mundo desde un alert!");

//Tipos de datos
//let texto = "Soy un texto"; //string
//let numero = 42; //Number
//let verdadero = true; //Boolean encendido/apagado, true/false, 0/1 solo son dos datos
//let undefined; //indefinido (aun no lo defino pero quiero el espacio de memoria)
//let vacio = null: //null (esta definido pero no tenemos un espacio)

//Suma
//let a = 10;
//let b = 20;
//console.log(a+b);


//Definir mis constantes y variables
const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const elemento = document.querySelector('#elemento');
const input = document.querySelector('#input');
const botonAgregar = document.querySelector('#botonAgregar');
const check = 'bi-record-circle';
const tachado = 'tachado';
const uncheck = 'bi-circle';
let LIST;
let id;

const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString('es-MX', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
});

//Definimos funciones
function agregarTarea(tarea, id, hecho, eliminar) {
    //orden
    if (eliminar) {
        //return
        return
    };
    //constante de funcion solo las puedo utilizar en la funcion agregarTarea
    const realizado = hecho ? check : uncheck;
    const LINE = hecho ? tachado : '';
    // las `` nos sirven para agregar elementos de html
    const elemento = ` <li id="elemento"> 
    <i id="${id}" data"hecho" class="bi ${realizado}"></i>
    <p class="tarea-lista text ${LINE}">${tarea}</p>
    <i id="${id}" data="eliminar" class="bi bi-trash"></i>
    </li> `
    lista.insertAdjacentHTML("beforeend", elemento);
};

function tareaRealizada(elemento) {
    element.classlist.toggle(check);
    element.classlist.toggle(uncheck);
    element.parentNode.querySelector('.text').classlist.toggle(tachado);
    LIST[element.id].realizado = LIST[element.id].realizado ? false : true;
};
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].eliminar = true;
};

botonAgregar.addEventListener("click", () => {
    const tarea = input.value;
    if (tarea) {
        agregarTarea(tarea, id, false, false)
        LIST.push({
            nombre: tarea,
            id: id,
            hecho: false,
            eliminar: false,
        });
        //Guardar tareas en un documento JSON con el metodo stringify en la variable LIST
        localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
        input.value = "";
    }
});

lista.addEventListener("click", function (event) {
    const element = event.target;
    const elementData = element.atributes.data.value;
    if (elementData == "hecho") {
        tareaRealizada(element);
    } else if (elementData == "eliminar") {
        tareaEliminada(element);
    };
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

//Como se va guardar en el localStorage
let data = localStorage.getItem("TODO")
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    cargarLista(LIST);
} else {
    LIST = [];
    id = 0;
};

function cargarLista(array) {
    array.forEach(
        function (item) {
            agregarTarea(item.nombre, item.id, item.hecho, item.eliminar);
        }
    );
};



