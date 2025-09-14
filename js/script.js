/* saludo */

window.addEventListener("DOMContentLoaded", function () {
  const saludo = confirm("¿Querés ingresar al sitio?");

// aca es el alert para ingresar texto// 
  if (saludo) {
    const nombre = prompt("¿Cuál es tu nombre?");
    //condicionales de que ocurre en cada caso
    if (nombre) {

      alert(`Bienvenido ${nombre}`);
    } 
    //aca puse para tocar directamente enter y dar un resultado diferente que sirva
    else {
      alert("Bienvenido usuario anónimo");
    }
  } 
  /*envio a la pag de la una*/
  else {
    alert("Chau!!");
    window.location.href = "https://multimedia.una.edu.ar/";
  }
});




 /* ocultar imagen */
const btn = document.getElementById('btn-toggle');
const imagenes = document.querySelectorAll('#imagen img');
const video = document.querySelector('#imagen iframe');  /* llamo a todas las img e iframes dentro de #imagen */

/*cada que hace click */
btn.addEventListener('click', () => {
  const visible = window.getComputedStyle(imagenes[0]).display !== 'none'; /*Verifica si esta en visible*/

  imagenes.forEach(img => img.style.display = visible ? 'none' : 'block');/*condicional cambia de invisible a vista block */
  video.style.display = visible ? 'none' : 'block'; /*lo mismo pero para el iframe */

/* cambia el texto dependiendo sí es visible o no */

  btn.textContent = visible ? 'Mostrar ' : 'Ocultar ';
});



/* array con los datos */
const comentarios = [
  "Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo.",
  "Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido.",
  "Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores.",
  "Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.",
  "En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.",
  "Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017.",
  "Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras.",
  "Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala.",
  "Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía.",
  "Sigue siendo una figura activa e influyente en el arte digital y ha experimentado con inteligencia artificial en proyectos recientes."
];

/*tomo info de los id y se lo coloca en los const */
const btnComentario = document.getElementById('btnComentario');
const muestra = document.getElementById('muestraComentarios');


btnComentario.addEventListener('click', () => {

  /* Selecciona un comentario aleatorio */
  
  const numRdm = Math.floor(Math.random() * comentarios.length);
  muestra.textContent = comentarios[numRdm];
});


