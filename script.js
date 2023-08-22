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
  [8.3085, -73.6165, 12, '07 DE AGOSTO'],
  [8.3100, -73.6160, 9, '11 DE NOVIEMBRE'],
  [8.3082, -73.6170, 4, '20 DE  ENERO'],
  [8.3150, -73.6200, 13, 'ACACIAS'],
  [8.3125, -73.6135, 15, 'ALCONES'],
  [8.3060, -73.6105, 1, 'ALMIRADOR'],
  [8.3122, -73.6168, 10, 'ALTO PRADO'],
  [8.3145, -73.6122, 8, 'ALVARO PALLARES'],
  [8.3088, -73.6178, 6, 'ARBOLEDA'],
  [8.3068, -73.6118, 5, 'ARBOLEDA DE ALBERQUIN'],
  [8.3112, -73.6175, 19, 'BARAHOJA'],
  [8.3065, -73.6125, 2, 'BELLO HORIZONTE'],
  [8.3160, -73.6140, 1, 'BOMBADERO'],
  [8.3142, -73.6142, 31, 'BRISAS ALTAS'],
  [8.3105, -73.6138, 4, 'BRISAS BAJAS'],
  [8.3080, -73.6140, 6, 'BRISAS BUTURAMA'],
  [8.3072, -73.6155, 5, 'CAMILA SANCHEZ'],
  [8.3130, -73.6185, 2, 'CAMPO AMALIA'],
  [8.3125, -73.6195, 19, 'CAMPO SERRANO'],
  [8.3105, -73.6165, 7, 'CAÑAVERAL'],
  [8.3125, -73.6125, 8, 'CARRETERO'],
  [8.3108, -73.6158, 18, 'CENTRO'],
  [8.3140, -73.6172, 3, 'CERRO DE LOS CHIVOS'],
  [8.3098, -73.6150, 23, 'CIUDADELA DE LA PAZ'],
  [8.3125, -73.6145, 4, 'COMULTRASAN'],
  [8.3095, -73.6185, 9, 'CORDILLERA'],
  [8.3142, -73.6132, 11, 'DIVINO NIÑO'],
  [8.3138, -73.6160, 1, 'DOMINGO SAN PABLO'],
  [8.3155, -73.6165, 32, 'EL BOSQUE'],
  [8.3108, -73.6148, 11, 'EL PROGRESO'],
  [8.3125, -73.6130, 16, 'FLORIDABLANCA'],
  [8.3090, -73.6125, 55, 'GALAN'],
  [8.3165, -73.6140, 1, 'GIRON'],
  [8.3100, -73.6175, 5, 'HIGERON'],
  [8.3120, -73.6140, 69, 'HOS BARAHOJA'],
  [8.3092, -73.6155, 18, 'IDEMA'],
  [8.3115, -73.6152, 2, 'IZAMAR'],
  [8.3118, -73.6165, 3, 'JARDINES'],
  [8.3090, -73.6160, 5, 'JERUSALEN'],
  [8.3145, -73.6155, 6, 'LA CEIBA'],
  [8.3078, -73.6168, 6, 'LA ESPERANZA'],
  [8.3150, -73.6155, 1, 'LA PRIMAVERA'],
  [8.3085, -73.6140, 24, 'LAS AMERICAS'],
  [8.3105, -73.6135, 1, 'LAS BATEAS'],
  [8.3120, -73.6135, 66, 'LAS BRISAS'],
  [8.3095, -73.6150, 27, 'LAS CAMPANAS'],
  [8.3135, -73.6160, 12, 'LAS DELICIAS'],
  [8.3142, -73.6165, 4, 'LAS FERIAS'],
  [8.3078, -73.6130, 12, 'LAS VEGAS'],
  [8.3090, -73.6148, 37, 'LA UNION'],
  [8.3115, -73.6152, 32, 'LA VICTORIA'],
  [8.3125, -73.6155, 15, 'LIBERTAD'],
  [8.3092, -73.6155, 6, 'LIBERTADOR'],
  [8.3100, -73.6175, 20, 'LOS COCOS'],
  [8.3120, -73.6140, 2, 'LOS COQUITOS'],
  [8.3100, -73.6140, 4, 'MARIA AUXILIADORA'],
  [8.3110, -73.6160, 108, 'MARIA EUGENIA'],
  [8.3115, -73.6152, 3, 'MARIA EUGENIA BAJA'],
  [8.3110, -73.6148, 1, 'MERCADO'],
  [8.3090, -73.6165, 5, 'MONTEALEGRE'],
  [8.3095, -73.6145, 16, 'NUEVA COLOMBIA'],
  [8.3100, -73.6170, 32, 'NUEVO AMANECER'],
  [8.3080, -73.6128, 12, 'NUEVO HORIZONTE'],
  [8.3135, -73.6175, 2, 'NUEVO ORIENTE'],
  [8.3085, -73.6135, 40, 'OASIS'],
  [8.3090, -73.6168, 5, 'OBREGON'],
  [8.3125, -73.6150, 6, 'OLAYA HERRERA'],
  [8.3120, -73.6145, 9, 'PALMIRA'],
  [8.3130, -73.6152, 15, 'PARAISO'],
  [8.3112, -73.6155, 591, 'POR DEFINIR'],
  [8.3148, -73.6138, 24, 'POTOSI'],
  [8.3115, -73.6155, 21, 'PRADERA'],
  [8.3098, -73.6145, 7, 'PRIMAVERA'],
  [8.3140, -73.6170, 1, 'PRIMERO DE AGOSTO'],
  [8.3102, -73.6185, 13, 'PUERTO PATIÑO'],
  [8.3090, -73.6155, 1, 'PURUSALTOS'],
  [8.3085, -73.6140, 0, 'REMANSO'],
  [8.3108, -73.6155, 105, 'ROMERO DIAZ'],
  [8.3095, -73.6170, 29, 'SABANITA'],
  [8.3142, -73.6142, 4, 'SAN ANDRECITO'],
  [8.3105, -73.6175, 21, 'SAN EDUARDO'],
  [8.3128, -73.6130, 10, 'SAN FERNANDO'],
  [8.3118, -73.6125, 1, 'SAN FRANCISCO'],
  [8.3088, -73.6160, 12, 'SAN JOSE'],
  [8.3110, -73.6138, 20, 'SAN MARCOS'],
  [8.3128, -73.6140, 58, 'SAN MARTIN'],
  [8.3092, -73.6130, 2, 'SAN MIGUEL'],
  [8.3145, -73.6160, 18, 'SAN PEDRO'],
  [8.3100, -73.6135, 10, 'SAN ROQUE'],
  [8.3095, -73.6148, 15, 'SANTA ANA'],
  [8.3122, -73.6152, 1, 'SANTA LUCIA'],
  [8.3082, -73.6175, 11, 'SOLANO PEREZ'],
  [8.3100, -73.6120, 1, 'SOLEDAD'],
  [8.3128, -73.6138, 1, 'V. CARACOL'],
  [8.3118, -73.6125, 1, 'VILLA CONTRI ALTO'],
  [8.3095, -73.6140, 12, 'VILLA CONTRY'],
  [8.3092, -73.6152, 2, 'VILLA DE DIOS'],
  [8.3102, -73.6178, 9, 'VILLA DEL PRADO'],
  [8.3120, -73.6155, 1, 'VILLA ESTADIO'],
  [8.3140, -73.6145, 9, 'VILLA FATIMA'],
  [8.3090, -73.6160, 5, 'VILLA IRINA'],
  [8.3125, -73.6160, 4, 'VILLAMARE'],
  [8.3135, -73.6170, 7, 'VILLA MARE'],
  [8.3085, -73.6152, 1, 'VILLA MARIA'],
  [8.3105, -73.6165, 1, 'VILLANUEVA'],
  [8.3092, -73.6140, 12, 'VILLA PARAGUAY'],
  [8.3128, -73.6135, 6, 'VILLA SAN ANDRES'],
  [8.3108, -73.6155, 4, 'VILLA SAN ROQUE'],
  [8.3125, -73.6145, 10, 'VILLA SOL'],
  [8.3098, -73.6168, 18, 'VILLA VICTORIA'],
  [8.3122, -73.6158, 1, 'VILLA VISTA'],
  [8.3105, -73.6170, 4, 'VISTA HERMOSA'],
  // ... Agrega más datos aquí
];

// Continúa agregando los demás datos de los barrios


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