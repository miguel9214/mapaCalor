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
  [0, 0, 'NUEVO ORIENTE', 8, 2, 1, 0, 1, 0, 4],
  [8.320920, -73.595067, 'NUEVA COLOMBIA', 38, 9, 10, 1, 1, 0, 17],
  [8.310212, -73.635063, 'CIUDADELA DE LA PAZ', 224, 32, 32, 4, 7, 3, 146],
  [8.306709, -73.621951, 'SAN PEDRO', 22, 10, 7, 0, 0, 0, 5],
  [8.305995, -73.615135, 'SAN FRANCISCO', 1, 0, 0, 0, 0, 0, 1],
  [8.305995, -73.615135, 'VILLA VICTORIA', 35, 5, 14, 0, 0, 1, 15],
  [8.319338, -73.600846, 'VILLA SAN ROQUE', 5, 3, 0, 0, 0, 0, 2],
  [0, 0, 'BELLO HORIZONTE', 1, 0, 1, 0, 0, 0, 0],
  [8.312306, -73.61723, 'SABANITA', 47, 16, 9, 0, 0, 0, 31],
  [0, 0, 'VILLANUEVA', 2, 0, 1, 0, 0, 0, 1],
  [8.299424, -73.615106, '7 DE AGOSTO', 134, 16, 21, 4, 3, 0, 90],
  [8.320519, -73.603449, '11 DE NOVIEMBRE', 138, 14, 16, 1, 7, 0, 100],
  [8.314796, -73.599433, '20 DE ENERO', 78, 4, 7, 4, 2, 1, 60],
  [8.308387, -73.602543, 'ALTO PRADO', 29, 5, 3, 1, 1, 0, 19],
  [8.300392, -73.625911, 'ALVARO PALLARES', 164, 15, 14, 2, 0, 3, 130],
  [8.291867, -73.619519, 'ARBOLEDA DE ALVEQUIN', 58, 14, 17, 1, 0, 0, 26],
  [8.312047, -73.630537, 'BARAHOJA', 301, 50, 61, 4, 15, 4, 167],
  [8.012765, -73.720630, 'BARRANCA LEBRIJA', 4, 0, 2, 0, 0, 0, 2],
  [8.321028, -73.606488, 'BELLA VISTA', 33, 0, 1, 0, 0, 0, 32],
  [0, 0, 'BOMBADERO', 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 'BOQUERON, SAN BENILO', 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 'BRISAS ALTAS', 30, 10, 12, 0, 2, 0, 6],
  [8.312095, -73.611115, 'BRISAS BAJAS', 10, 5, 2, 0, 0, 0, 3],
  [8.295195, -73.619668, 'BRISAS DE BUTURAMA', 17, 4, 4, 0, 0, 1, 8],
  [8.320945, -73.594980, 'BUENOS AIRES', 2, 2, 0, 0, 0, 0, 0],
  [8.231136, -73.694144, 'BUTURAMA', 0, 0, 0, 0, 0, 0, 0],
  [8.307784, -73.632510, 'CAMILA SANCHEZ', 42, 4, 8, 1, 0, 0, 29],
  [7.946845, -73.676765, 'CAMPO AMALIA', 2, 2, 0, 0, 0, 0, 0],
  [8.306713, -73.6265, 'CAMPO SERRANO', 137, 26, 20, 2, 2, 2, 85],
  [8.301364, -73.621381, 'CAÑAVERAL', 66, 7, 16, 1, 2, 1, 39],
  [0, 0, 'CANDELARIA', 0, 0, 0, 0, 0, 0, 0],
  [8.310720, -73.615372, 'CARRETERO', 75, 14, 13, 2, 2, 0, 44],
  [0, 0, 'CEDRITOS', 9, 0, 0, 0, 0, 0, 9],
  [8.309787, -73.623156, 'CENTRO', 129, 15, 18, 1, 1, 1, 93],
  [8.335608, -73.595024, 'CERRO DE LOS CHIVOS', 3, 2, 1, 0, 0, 0, 0],
  [8.239226, -73.595778, 'COLUMPIOS', 1, 0, 1, 0, 0, 0, 0],
  [8.304203, -73.609681, 'COMULTRASAN', 4, 2, 1, 0, 0, 0, 1],
  [8.319066, -73.607104, 'CORDILLERA', 210, 8, 32, 2, 10, 5, 153],
  [0, 0, 'CORRACES', 1, 1, 0, 0, 0, 0, 0],
  [8.341268, -73.638289, 'CORRALES', 3, 2, 0, 0, 0, 0, 1],
  [8.415276, -73.547788, 'CUESTA RICA MARINILLA', 1, 0, 1, 0, 0, 0, 0],
  [8.308651, -73.610535, 'DIVINO NIÑO', 49, 7, 12, 0, 1, 1, 28],
  [0, 0, 'DOMINGO SAN PABLO', 1, 1, 0, 0, 0, 0, 0],
  [8.312562, -73.621481, 'EL BOSQUE', 240, 31, 42, 1, 12, 4, 150],
  [0, 0, 'EL CARBON', 3, 2, 1, 0, 0, 0, 0],
  [8.300458, -73.618843, 'EL HIGUERON', 17, 3, 2, 0, 1, 0, 11],
  [0, 0, 'EL MIRADOR', 26, 1, 1, 0, 1, 0, 23],
  [8.303601, -73.620467, 'EL PROGRESO', 108, 12, 16, 1, 2, 1, 76],
  [8.317419, -73.602244, 'FLORIDABLANCA', 205, 28, 34, 4, 9, 1, 129],
  [8.305669, -73.601530, 'GALAN', 132, 32, 32, 6, 2, 1, 59],
  [0, 0, 'GIRON', 1, 0, 1, 0, 0, 0, 0],
  [8.298505, -73.620950, 'IDEMA', 191, 30, 31, 1, 6, 1, 122],
  [8.312289, -73.638492, 'ISAMAR', 29, 6, 3, 0, 0, 0, 20],
  [0, 0, 'JARDIN', 15, 4, 2, 1, 0, 0, 8],
  [8.313993, -73.631425, 'JERUSALEN', 69, 5, 9, 7, 2, 0, 46],
  [8.309665, -73.598330, 'JHON F KENNEDY', 3, 0, 0, 0, 0, 0, 3],
  [0, 0, 'JOAQUIN ROYERO', 0, 0, 0, 0, 0, 0, 0],
  [8.299130, -73.616758, 'LA CEIBA', 79, 10, 7, 1, 3, 1, 57],
  [8.313312, -73.613198, 'LA ESPERANZA', 41, 4, 4, 1, 0, 1, 31],
  [8.307465, -73.616182, 'LA PAZ', 0, 0, 0, 0, 0, 0, 0],
  [8.312431, -73.613610, 'LA PRIMAVERA', 54, 6, 8, 0, 1, 0, 39],
  [8.303677, -73.609009, 'LAS ACACIAS', 74, 18, 17, 2, 2, 0, 35],
  [8.308822, -73.611835, 'LAS AMERICAS', 34, 14, 12, 1, 0, 0, 7],
  [0, 0, 'LAS BATEAS', 1, 1, 0, 0, 0, 0, 0],
  [8.313759, -73.612383, 'LAS BRISAS', 156, 26, 32, 5, 2, 2, 89],
  [8.334923, -73.605578, 'LAS CAMPANAS', 29, 9, 9, 0, 0, 0, 11],
  [8.310937, -73.609998, 'LAS DELICIAS', 49, 5, 4, 0, 0, 0, 40],
  [8.309446, -73.628143, 'LAS FERIAS', 40, 6, 6, 1, 0, 0, 27],
  [0, 0, 'LAS VEGAS', 20, 4, 5, 0, 0, 0, 11],
  [8.308765, -73.608489, 'LA UNION', 297, 56, 39, 15, 7, 4, 176],
  [8.311793, -73.616548, 'LAURELES', 2, 0, 0, 0, 0, 0, 2],
  [8.313906, -73.609486, 'LA VICTORIA', 102, 22, 23, 3, 0, 0, 54],
  [8.300305, -73.620287, 'LIBERTAD', 144, 19, 17, 2, 2, 1, 103],
  [8.306965, -73.629740, 'LIBERTADOR', 19, 6, 5, 0, 0, 0, 8],
  [8.133459, -73.769094, 'LOMA DE CORREDOR', 3, 2, 0, 0, 0, 0, 1],
  [8.306390, -73.630929, 'LOS ALCONES', 114, 23, 17, 4, 1, 1, 68],
  [8.302310, -73.629371, 'LOS COCOS', 128, 22, 16, 0, 2, 1, 87],
  [8.292771, -73.633710, 'LOS COQUITOS', 4, 0, 0, 0, 0, 0, 4],
  [8.296958, -73.625693, 'MARIA AUXILIADORA', 21, 5, 5, 0, 0, 0, 11],
  [8.312331, -73.599365, 'MARIA EUGENIA', 298, 74, 90, 5, 1, 1, 127],
  [8.312356, -73.604559, 'MARIA EUGENIA BAJA', 7, 1, 3, 0, 0, 0, 3],
  [8.313156, -73.609585, 'MERCADO', 4, 1, 1, 1, 0, 0, 1],
  [8.288568, -73.622421, 'MONTEALEGRE', 27, 9, 11, 0, 1, 0, 6],
  [8.836593, -73.613545, 'NOREAN', 5, 0, 2, 0, 0, 0, 3],
  [8.289368, -73.629665, 'NUEVO AMANECER', 72, 12, 24, 4, 1, 3, 28],
  [8.305807, -73.593653, 'NUEVO HORIZONTE', 32, 5, 9, 0, 2, 1, 15],
  [8.298232, -73.614668, 'OASIS', 53, 17, 20, 2, 1, 1, 12],
  [8.321461, -73.600926, 'OBREGON', 36, 6, 5, 0, 0, 0, 25],
  [8.305786, -73.619571, 'OLAYA HERRERA', 46, 11, 4, 1, 3, 0, 27],
  [8.301991, -73.622684, 'PALMIRA', 33, 6, 11, 0, 0, 0, 16],
  [8.305153, -73.616856, 'PARAISO', 34, 9, 11, 0, 0, 0, 14],
  [8.306830, -73.615112, 'PATIÑO EL BARSAL', 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 'POR DEFINIR', 5148, 330, 599, 111, 341, 142, 3625],
  [8.306830, -73.615112, 'POTOSI', 54, 16, 17, 1, 0, 0, 20],
  [8.295299, -73.617680, 'PRADERA', 167, 27, 23, 1, 5, 2, 109],
  [0, 0, 'PRIMERO DE AGOSTO', 1, 0, 0, 0, 0, 0, 1],
  [8.082101, -73.693832, 'PUERTO PATIÑO', 14, 4, 5, 1, 0, 0, 4],
  [0, 0, 'PURUSALTOS', 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 'QUINTA DE LA SABANA', 1, 0, 0, 0, 0, 1, 0],
  [8.301567, -73.615289, 'REMANSO', 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 'ROMANZA', 30, 11, 11, 0, 0, 0, 8],
  [8.297612, -73.615119, 'ROMERO DIAZ', 192, 47, 52, 4, 6, 1, 82],
  [0, 0, 'SALAS S LOPEZ', 0, 0, 0, 0, 0, 0, 0],
  [8.314316, -73.610316, 'SAN ANDRECITO', 11, 1, 2, 0, 1, 1, 6],
  [8.317397, -73.605989, 'SAN EDUARDO', 126, 12, 23, 3, 1, 0, 87],
  [8.313272, -73.614494, 'SAN FERNANDO', 24, 4, 8, 1, 0, 0, 11],
  [8.305463, -73.610855, 'SAN JOSE', 27, 11, 9, 1, 0, 0, 6],
  [8.296052, -73.620795, 'SAN MARCOS', 60, 10, 10, 0, 2, 1, 37],
  [8.304729, -73.599080, 'SAN MARTIN', 81, 19, 30, 0, 0, 0, 32],
  [8.313792, -73.602732, 'SAN MIGUEL', 8, 1, 1, 0, 0, 0, 6],
  [8.309846, -73.623640, 'SAN ROQUE', 47, 14, 7, 0, 0, 0, 26],
  [8.303966, -73.629462, 'SANTA ANA', 65, 17, 11, 0, 1, 0, 36],
  [8.199585, -73.666622, 'SANTA LUCIA', 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 'SIMON BOLIVAR', 1, 1, 0, 0, 0, 0, 0],
  [8.304567, -73.629148, 'SOLANO PEREZ', 15, 6, 4, 1, 0, 0, 4],
  [0, 0, 'SOLEDAD', 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 'TABLON', 3, 1, 0, 0, 0, 0, 2],
  [8.319951, -73.611239, 'TEJADA', 12, 3, 2, 1, 0, 0, 6],
  [8.313764, -73.598404, 'UNIVERSIDAD INDUSTRIAL', 30, 9, 7, 0, 0, 1, 12],
  [8.313242, -73.613594, 'VANGUARDIA', 100, 20, 21, 1, 0, 0, 49],
  [8.315305, -73.625474, 'VILLA DEL SOL', 0, 0, 0, 0, 0, 0, 0],
  [8.310456, -73.626010, 'VILLA LUZ', 61, 6, 6, 1, 1, 0, 47],
  [0, 0, 'VILLA MACARIA', 1, 0, 1, 0, 0, 0, 0],
  [8.310828, -73.628699, 'VILLA MELISA', 10, 1, 2, 1, 0, 0, 6],
  [0, 0, 'VILLA SOL', 1, 0, 1, 0, 0, 0, 0],
  [8.305547, -73.615523, 'VISTA HERMOSA', 58, 14, 12, 3, 0, 0, 31],
  [0, 0, 'YUMAQUE', 2, 0, 1, 0, 0, 0, 1]
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
    .bindTooltip(tooltipContent, { closeButton: false, permanent: false, direction: 'top' });

  // Asigna el evento click para abrir/cerrar tooltips
  marker.on('click', toggleTooltip);

  // Abre todas las tooltips al iniciar el mapa
  marker.openTooltip();
});
