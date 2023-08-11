 // Crea un mapa y establece la vista inicial en Aguachica, Cesar, Colombia
 var map = L.map('map').setView([8.3121, -73.6143], 14);

 // Agrega una capa de vista satelital
 L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
   maxZoom: 20,
   subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
   attribution: '&copy; <a href="https://www.google.com/maps">Google Maps</a> contributors'
 }).addTo(map);

 // Datos de ejemplo (latitud, longitud, cantidad de personas, nombre del barrio)
 var data = [
   [8.3105, -73.6112, 500, 'Barrio 1'],
   [8.3150, -73.6140, 800, 'Barrio 2'],
   [8.3058, -73.6107, 300, 'Barrio 3'],
   // Agrega más datos aquí
 ];

 var heatData = data.map(function(item) {
   return [item[0], item[1], item[2]];
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

 // Agrega tooltips con el número de personas y el nombre del barrio
 heatData.forEach(function(dataPoint, index) {
   var tooltipContent = `Barrio: ${data[index][3]}<br>Personas: ${data[index][2]}`;
   var marker = L.marker([dataPoint[0], dataPoint[1]])
     .addTo(map)
     .bindTooltip(tooltipContent, { closeButton: false, permanent: true, direction: 'top' });

   // Asigna el evento click para abrir/cerrar tooltips
   marker.on('click', toggleTooltip);
   
   // Abre todas las tooltips al iniciar el mapa
   marker.openTooltip();
 });