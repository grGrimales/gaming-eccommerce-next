// services/apiMock.js

// Simula una llamada a la API con un retraso
export function fetchPlatformData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: 'Plataforma de Juegos',
          description: 'Descripción de la plataforma de juegos.',
          // Otros datos que quieras simular
        });
      }, 2000); // Retraso de 2 segundos
    });
  }
  