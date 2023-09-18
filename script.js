// Crea un mapa y establece la vista inicial en Aguachica, Cesar, Colombia
var map = L.map('map').setView([8.3121, -73.6143], 14);

// Agrega una capa de vista satelital
L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  attribution: '&copy; <a href="https://www.google.com/maps">Google Maps</a> contributors'
}).addTo(map);

// Datos de ejemplo (latitud, longitud, barrio, total personas, muy positivo, positivo, indeciso, negativo, muy negativo, no registra)
var data = [
  [8.3085, -73.6165, '07 DE AGOSTO', 12, 4, 3, 2, 1, 0, 2],
  [8.3123, -73.6157, 'SANTA LUCÍA', 8, 2, 1, 3, 0, 0, 2],
  [8.3110, -73.6132, 'SAN MARTÍN', 15, 5, 4, 3, 2, 1, 0],
  // Agrega más datos aquí
];

// Continúa agregando los demás datos de los barrios

var heatData = data.map(function(item) {
  return [item[0], item[1], item[3]];
});

// Agrega áreas de color (marcaciones de calor)
var heat = L.heatLayer(heatData, {
  radius: 30,
  gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'red' }
}).addTo(map);

// Función para abrir o cerrar las tooltips
function toggleTooltip(e) {
  var tooltip = e.target.getTooltip();
  if (tooltip) {
    if (tooltip.isOpen()) {
      tooltip.closeTooltip();
    } else {
      tooltip.openTooltip();
    }
  }
}

// Agrega tooltips con los datos adicionales
heatData.forEach(function(dataPoint, index) {
  var tooltipContent = `Barrio: ${data[index][2]}<br>Total Personas: ${data[index][3]}<br>
    Muy Positivo: ${data[index][4]}<br>Positivo: ${data[index][5]}<br>
    Indeciso: ${data[index][6]}<br>Negativo: ${data[index][7]}<br>
    Muy Negativo: ${data[index][8]}<br>No Registra: ${data[index][9]}`;
  
  var marker = L.marker([dataPoint[0], dataPoint[1]])
    .addTo(map)
    .bindTooltip(tooltipContent, { closeButton: false, permanent: true, direction: 'top' });

  // Asigna el evento click para abrir/cerrar tooltips
  marker.on('click', toggleTooltip);

  // Abre todas las tooltips al iniciar el mapa
  marker.openTooltip();
});
