let cantidadObras = 0;
let obras = [];
let obraIndex = 1;

// Elementos llamados
const paso1 = document.getElementById('paso1');
const paso2 = document.getElementById('paso2');
const paso3 = document.getElementById('paso3');
const resultados = document.getElementById('resultados');
const btnCantidad = document.getElementById('btnCantidad');
const btnAgregarObra = document.getElementById('btnAgregarObra');
const btnCalcular = document.getElementById('btnCalcular');
const btnReiniciar = document.getElementById('btnReiniciar');
const obraActual = document.getElementById('obraActual');
const nombreObraInput = document.getElementById('nombreObra');
const duracionObraInput = document.getElementById('duracionObra');
const pesoObraInput = document.getElementById('pesoObra');
const tiempoMBInput = document.getElementById('tiempoMB');
const costoMBInput = document.getElementById('costoMB');
const totalDuracionP = document.getElementById('totalDuracion');
const promedioPesoP = document.getElementById('promedioPeso');
const obraMinimaP = document.getElementById('obraMinima');
const mesesPresupuestoP = document.getElementById('mesesPresupuesto');


/* cantidad de obras */


btnCantidad.addEventListener('click', () => {
  const valor = parseInt(document.getElementById('cantidadObras').value);

  /*con esta condicional tomo el info si es correcto y oculto, sino tira mensaje para repetir */
  if (valor >= 3) {

    cantidadObras = valor;

    paso1.classList.add('oculto');
    paso2.classList.remove('oculto');
    obraActual.textContent = obraIndex;

  } 
  
  else {
    alert('La cantidad de obras debe ser 3 o más.');
  }
});


/* agregar obras */


btnAgregarObra.addEventListener('click', () => {

  const nombre = nombreObraInput.value.trim();
  const duracion = parseFloat(duracionObraInput.value);
  const peso = parseFloat(pesoObraInput.value);

  if (!nombre || duracion < 1 || peso < 4) {   /* requisitos para poder continuar  */

    alert('Datos inválidos. Verifica nombre, duración y peso.');

    return;
  }

  obras.push({ nombre, duracion, peso });



  /* vacio inputs */

  nombreObraInput.value = '';
  duracionObraInput.value = '';
  pesoObraInput.value = '';

  obraIndex++; /*siguente parte */

  if (obraIndex > cantidadObras) {

    paso2.classList.add('oculto');
    paso3.classList.remove('oculto');    /* oculto forumarios terminados */
  } 
  
  else {
    obraActual.textContent = obraIndex;
  }
});


/*   calcular resultados */

btnCalcular.addEventListener('click', () => {
  const tiempoMB = parseFloat(tiempoMBInput.value);
  const costoMB = parseFloat(costoMBInput.value);

  if (tiempoMB < 10 || costoMB < 15) {
    alert('Valores inválidos: tiempo por MB ≥10 y costo mensual ≥15');
    return;
  }


  /*   Duración total */

  const duracionTotal = obras.reduce((sum, o) => sum + o.duracion, 0);
  totalDuracionP.textContent = `Duración total: ${duracionTotal} minutos`;


  /* Peso promedio */

  const pesoPromedio = obras.reduce((sum, o) => sum + o.peso, 0) / obras.length;
  promedioPesoP.textContent = `Peso promedio: ${pesoPromedio.toFixed(2)} MB`;

  /* Obra de menor duración y tiempo de transferencia */

  const obraMin = obras.reduce((min, o) => (o.duracion < min.duracion ? o : min), obras[0]);
  const tiempoTransferencia = obraMin.peso * tiempoMB;
  const tiempoSegundos = tiempoTransferencia / 1000;

  obraMinimaP.innerHTML = `Obra de menor duración: <span>${obraMin.nombre}</span>, tiempo de transferencia: <span class="${tiempoSegundos < 1 ? 'verde' : 'rojo'}">${tiempoSegundos.toFixed(2)} s</span>`;


  /* Meses que se puede mantener con 540.000 */

  const costoMensualTotal = obras.reduce((sum, o) => sum + o.peso * costoMB, 0);
  const meses = Math.floor(540000 / costoMensualTotal);

  mesesPresupuestoP.textContent = `Cantidad de meses que se puede mantener: ${meses}`;

  paso3.classList.add('oculto');
  resultados.classList.remove('oculto');
});



/* Reiniciar */

btnReiniciar.addEventListener('click', () => location.reload());
