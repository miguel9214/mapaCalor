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
  [8.299424, -73.615106, '07 DE AGOSTO', 243, 53, 26, 10, 7, 0, 147],
  [8.320519, -73.603449, '11 DE NOVIEMBRE', 197, 50, 20, 7, 12, 2, 106],
  [8.314796, -73.599433, '20 DE ENERO', 121, 26, 13, 8, 4, 4, 66],
  [8.308387, -73.602543, 'ALTO PRADO', 35, 7, 7, 1, 1, 0, 19],
  [8.300392, -73.625911, 'ALVARO PALLARES', 282, 74, 27, 13, 4, 4, 160],
  [8.291867, -73.619519, 'ARBOLEDA DE ALVEQUIN', 123, 42, 21, 11, 2, 0, 47],
  [8.312047, -73.630537, 'BARAHOJA', 453, 125, 77, 18, 23, 9, 201],
  [8.012765, -73.720630, 'BARRANCA LEBRIJA', 140, 48, 9, 3, 1, 0, 79],
  [8.321028, -73.606488, 'BELLA VISTA', 44, 3, 7, 1, 1, 0, 32],
  [8.312095, -73.611115, 'BRISAS BAJAS', 39, 18, 3, 3, 1, 0, 14],
  [8.295195, -73.619668, 'BRISAS DE BUTURAMA', 64, 20, 9, 1, 0, 1, 33],
  [8.320945, -73.594980, 'BUENOS AIRES', 14, 5, 1, 1, 0, 0, 7],
  [8.231136, -73.694144, 'BUTURAMA', 5, 4, 0, 0, 0, 0, 1],
  [8.307784, -73.632510, 'CAMILA SANCHEZ', 105, 29, 14, 4, 6, 1, 51],
  [7.946845, -73.676765, 'CAMPO AMALIA', 27, 6, 1, 0, 0, 0, 20],
  [8.306713, -73.6265, 'CAMPO SERRANO', 247, 74, 28, 8, 6, 4, 127],
  [8.301364, -73.621381, 'CAÑAVERAL', 108, 29, 20, 2, 4, 2, 51],
  [8.310720, -73.615372, 'CARRETERO', 157, 49, 16, 3, 4, 1, 84],
  [8.309787, -73.623156, 'CENTRO', 320, 87, 30, 10, 14, 7, 148],
  [8.335608, -73.595024, 'CERRO DE LOS CHIVOS', 3, 2, 1, 0, 0, 0, 0],
  [8.310212, -73.635063, 'CIUDADELA DE LA PAZ', 412, 113, 48, 17, 17, 4, 213],
  [8.239226, -73.595778, 'COLUMPIOS', 1, 0, 1, 0, 0, 0, 0],
  [8.304203, -73.609681, 'COMULTRASAN', 3, 2, 1, 0, 0, 0, 0],
  [8.319066, -73.607104, 'CORDILLERA', 300, 45, 45, 12, 25, 6, 167],
  [0, 0, 'CORRACES', 1, 1, 0, 0, 0, 0, 0],
  [8.341268, -73.638289, 'CORRALES', 4, 2, 0, 0, 0, 0, 2],
  [8.415276, -73.547788, 'CUESTA RICA MARINILLA', 15, 0, 1, 0, 0, 0, 14],
  [8.308651, -73.610535, 'DIVINO NIÑO', 88, 23, 16, 3, 1, 2, 43],
  [0, 0, 'DOMINGO SAN PABLO', 1, 1, 0, 0, 0, 0, 0],
  [8.312562, -73.621481, 'EL BOSQUE', 355, 85, 49, 8, 17, 5, 191],
  [0, 0, 'EL CARBON', 5, 2, 1, 0, 0, 0, 2],
  [8.300458, -73.618843, 'EL HIGUERON', 26, 6, 4, 0, 1, 0, 15],
  [0, 0, 'EL MIRADOR', 61, 13, 5, 1, 4, 1, 37],
  [8.303601, -73.620467, 'EL PROGRESO', 180, 53, 23, 7, 3, 2, 92],
  [8.317419, -73.602244, 'FLORIDABLANCA', 279, 64, 42, 8, 14, 3, 148],
  [8.305669, -73.60153, 'GALAN', 2, 0, 0, 0, 2, 0, 0],
  [0, 0, 'GIRON', 0, 0, 0, 0, 0, 0, 0],
  [8.298505, -73.62095, 'IDEMA', 2, 0, 0, 0, 0, 1, 1],
  [8.312289, -73.638492, 'ISAMAR', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'JARDIN', 0, 0, 0, 0, 0, 0, 0],
  [8.313993, -73.631425, 'JERUSALEN', 98, 19, 14, 12, 2, 2, 49],
  [8.309665, -73.59833, 'JHON F KENNEDY', 3, 0, 1, 1, 0, 0, 1],
  [0, 0, 'JOAQUIN ROYERO', 1, 0, 0, 0, 0, 0, 1],
  [8.29913, -73.616758, 'LA CEIBA', 116, 30, 12, 7, 3, 1, 63],
  [8.313312, -73.613198, 'LA ESPERANZA', 56, 10, 6, 3, 2, 2, 33],
  [8.307465, -73.616182, 'LA PAZ', 2, 0, 0, 0, 0, 0, 2],
  [8.312431, -73.613610, 'LA PRIMAVERA', 101, 22, 14, 4, 2, 0, 59],
  [8.308765, -73.608489, 'LA UNION', 460, 146, 58, 19, 12, 8, 217],
  [8.313906, -73.609486, 'LA VICTORIA', 327, 101, 42, 10, 9, 4, 161],
  [8.303677, -73.609009, 'LAS ACACIAS', 136, 36, 22, 5, 4, 1, 68],
  [8.308822, -73.611835, 'LAS AMERICAS', 207, 59, 22, 13, 2, 1, 110],
  [0, 0, 'LAS BATEAS', 2, 1, 0, 0, 0, 0, 1],
  [8.313759, -73.612383, 'LAS BRISAS', 222, 57, 35, 14, 4, 4, 108],
  [8.334923, -73.605578, 'LAS CAMPANAS', 31, 11, 9, 0, 0, 0, 11],
  [8.310937, -73.609998, 'LAS DELICIAS', 306, 91, 16, 21, 9, 6, 163],
  [8.309446, -73.628143, 'LAS FERIAS', 51, 14, 8, 3, 2, 1, 23],
  [0, 0, 'LAS VEGAS', 100, 14, 9, 4, 1, 2, 70],
  [8.311793, -73.616548, 'LAURELES', 7, 3, 1, 0, 0, 0, 3],
  [8.300305, -73.620287, 'LIBERTAD', 314, 85, 36, 10, 3, 6, 174],
  [8.306965, -73.629740, 'LIBERTADOR', 59, 24, 11, 1, 1, 1, 21],
  [8.133459, -73.769094, 'LOMA DE CORREDOR', 20, 5, 3, 1, 0, 0, 11],
  [8.306390, -73.630929, 'LOS ALCONES', 171, 52, 26, 7, 3, 3, 80],
  [8.302310, -73.629371, 'LOS COCOS', 653, 173, 48, 44, 22, 11, 355],
  [8.292771, -73.633710, 'LOS COQUITOS', 53, 10, 2, 1, 1, 1, 38],
  [8.296958, -73.625693, 'MARIA AUXILIADORA', 77, 26, 8, 4, 1, 0, 38],
  [8.312331, -73.599365, 'MARIA EUGENIA', 1251, 343, 157, 59, 25, 27, 640],
  [8.312356, -73.604559, 'MARIA EUGENIA BAJA', 18, 6, 6, 0, 0, 0, 6],
  [8.313156, -73.609585, 'MERCADO', 10, 2, 1, 1, 0, 0, 6],
  [8.288568, -73.622421, 'MONTEALEGRE', 35, 13, 13, 1, 1, 0, 7],
  [8.836593, -73.613545, 'NOREAN', 6, 0, 2, 0, 0, 0, 4],
  [8.320920, -73.595067, 'NUEVA COLOMBIA', 342, 74, 34, 22, 11, 8, 193],
  [8.289368, -73.629665, 'NUEVO AMANECER', 586, 159, 59, 30, 12, 20, 306],
  [8.305807, -73.593653, 'NUEVO HORIZONTE', 136, 38, 17, 7, 10, 7, 57],
  [0, 0, 'NUEVO ORIENTE', 40, 12, 6, 1, 3, 0, 18],
  [8.298232, -73.614668, 'OASIS', 151, 41, 24, 5, 4, 4, 73],
  [8.321461, -73.600926, 'OBREGON', 228, 46, 20, 12, 7, 4, 139],
  [8.305786, -73.619571, 'OLAYA HERRERA', 150, 48, 9, 5, 7, 3, 78],
  [8.301991, -73.622684, 'PALMIRA', 204, 45, 25, 10, 5, 3, 116],
  [8.305153, -73.616856, 'PARAISO', 245, 54, 24, 12, 5, 3, 147],
  [8.306830, -73.615112, 'PATIÑO EL BARSAL', 1, 1, 0, 0, 0, 0, 0],
  [8.311649, -73.643991, 'POR DEFINIR', 5015, 511, 556, 183, 400, 159, 3206],
  [8.306830, -73.615112, 'POTOSI', 154, 39, 25, 2, 1, 0, 87],
  [8.295299, -73.617680, 'PRADERA', 253, 66, 30, 8, 9, 6, 134],
  [0, 0, 'PRIMERO DE AGOSTO', 16, 5, 0, 1, 0, 0, 10],
  [8.082101, -73.693832, 'PUERTO PATIÑO', 34, 9, 6, 1, 0, 0, 18],
  [0, 0, 'PURUSALTOS', 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 'QUINTA DE LA SABANA', 4, 0, 1, 1, 0, 0, 2],
  [8.301567, -73.615289, 'REMANSO', 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 'ROMANZA', 38, 15, 12, 1, 1, 0, 9],
  [8.297612, -73.615119, 'ROMERO DIAZ', 578, 139, 87, 29, 22, 11, 290],
  [8.312306, -73.61723, 'SABANITA', 303, 82, 33, 6, 12, 3, 167],
  [0, 0, 'SALAS S LOPEZ', 0, 0, 0, 0, 0, 0, 0],
  [8.314316, -73.610316, 'SAN ANDRECITO', 95, 30, 5, 5, 4, 2, 49],
  [8.317397, -73.605989, 'SAN EDUARDO', 428, 112, 57, 26, 7, 2, 224],
  [8.313272, -73.614494, 'SAN FERNANDO', 81, 24, 14, 2, 1, 0, 40],
  [8.305995, -73.615135, 'SAN FRANCISCO', 1, 0, 0, 0, 0, 0, 1],
  [8.305463, -73.610855, 'SAN JOSE', 81, 24, 14, 2, 1, 0, 40],
  [8.296052, -73.620795, 'SAN MARCOS', 225, 55, 23, 7, 6, 1, 133],
  [8.304729, -73.599080, 'SAN MARTIN', 245, 54, 41, 14, 4, 0, 132],
  [8.313792, -73.602732, 'SAN MIGUEL', 6, 3, 0, 0, 0, 0, 3],
  [8.306709, -73.621951, 'SAN PEDRO', 180, 52, 19, 6, 3, 1, 99],
  [8.309846, -73.623640, 'SAN ROQUE', 173, 61, 15, 6, 1, 2, 88],
  [8.303966, -73.629462, 'SANTA ANA', 449, 125, 45, 15, 16, 7, 241],
  [8.199585, -73.666622, 'SANTA LUCIA', 32, 6, 1, 1, 0, 0, 24],
  [0, 0, 'SIMON BOLIVAR', 1, 1, 0, 0, 0, 0, 0],
  [8.304567, -73.629148, 'SOLANO PEREZ', 94, 23, 7, 3, 0, 2, 59],
  [0, 0, 'SOLEDAD', 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 'TESORO', 40, 4, 2, 0, 1, 1, 32],
  [8.319562, -73.588590, 'TIERRA LINDA', 600, 137, 58, 29, 21, 4, 351],
  [0, 0, 'URB. VILLA SAN CARLOS', 2, 1, 0, 0, 0, 0, 1],
  [0, 0, 'V. CARACOL', 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 'V.MARINILLA', 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 'VEREDA CASCABELA', 20, 6, 6, 0, 1, 0, 7],
  [0, 0, 'VEREDA EL FARO', 2, 1, 0, 0, 0, 0, 1],
  [0, 0, 'VEREDA MOSQUITO', 3, 1, 0, 0, 0, 0, 2],
  [0, 0, 'VEREDA SANTA INES', 2, 0, 0, 0, 0, 0, 2],
  [0, 0, 'VIAS CALICHE', 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 'VILLA CAMPESTRE', 5, 0, 1, 0, 0, 0, 4],
  [0, 0, 'VILLA COUNTRY', 150, 47, 21, 12, 3, 0, 67],
  [0, 0, 'VILLA DE DIOS', 50, 14, 11, 4, 0, 0, 21],
  [0, 0, 'VILLA DEL PRADO', 47, 10, 5, 4, 0, 0, 28],
  [0, 0, 'VILLA ESTADIO', 72, 16, 7, 0, 1, 1, 47],
  [0, 0, 'VILLA FATIMA', 6, 4, 1, 0, 0, 0, 1],
  [0, 0, 'VILLA IRINA', 123, 34, 10, 4, 0, 0, 75],
  [0, 0, 'VILLA MARE', 218, 52, 17, 2, 0, 1, 146],
  [0, 0, 'VILLA MARIA', 77, 15, 7, 2, 1, 0, 52],
  [8.320671, -73.591304, 'VILLA PARAGUAY', 194, 43, 33, 10, 5, 5, 98],
  [0, 0, 'VILLA SAN ANDRES', 46, 22, 6, 2, 0, 2, 14],
  [8.319338, -73.600846, 'VILLA SAN ROQUE', 19, 8, 2, 0, 0, 0, 9],
  [0, 0, 'VILLA SOL', 159, 51, 20, 12, 6, 1, 69],
  [8.305995, -73.615135, 'VILLA VICTORIA', 99, 29, 13, 4, 1, 2, 50],
  [0, 0, 'VILLA VISTA', 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 'VILLANUEVA', 4, 1, 1, 0, 0, 0, 2],
  [0, 0, 'VISTA HERMOSA', 26, 8, 3, 0, 1, 0, 14]



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
