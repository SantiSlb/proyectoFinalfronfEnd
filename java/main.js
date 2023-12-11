/* MENSAJE DE BIENVENIDA */

if (!localStorage.getItem('alertaMostrada')) {
    let nombreIngreso = prompt("Ingresa tu nombre :)");
    if (nombreIngreso) {
        console.log("Alerta mostrada a: " + nombreIngreso);
        alert("¡Hola " + nombreIngreso + "! Estoy encantado de enseñarte mi proyecto definitivo para la primera parte de aprendizaje Desarrollo web Front-end, el cual es un prototipo de mi portafolio. El mismo obtendrá, en el transcurso de su construcción, una galería con próximos proyectos, mejoras en el formulario de contacto, animaciones con js y más diseños responsivos. Actualmente se mantiene con diseños para 768px (Celulares grandes) y 360px (Celulares pequeños) en sus versiones horizontales. Quise hacer este diseño sin usar Bootstrap, para profundizar más en los primeros métodos de diseño. ¡Gracias por visitar mi página!");
        localStorage.setItem('alertaMostrada', 'true');
    }
} else {
    console.log("Alerta ya mostrada anteriormente.");
}
