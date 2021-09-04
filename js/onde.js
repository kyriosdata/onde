/**
 * Recupera a posição geográfica do navegador no qual a função é executada.
 */
function posicaoGeografica(callback) {
  return new Promise((resolve, reject) => {
    const filtra = (p) =>
      resolve({
        latitude: p.coords.latitude,
        longitude: p.coords.longitude,
      });

    navigator.geolocation.getCurrentPosition(filtra, reject);
  });
}

/**
 * Recupera cidade, estado e país da posição geográfica fornecida
 */
function onde(latitude, longitude) {
  const posicao = `latitude=${latitude}&longitude=${longitude}`;
  const hostPath = "api.bigdatacloud.net/data/reverse-geocode-client";
  const URL = `https://${hostPath}?${posicao}&localityLanguage=pt-br`;
  return fetch(URL)
    .then((response) => response.json())
    .then((json) => ({
      latitude: json.latitude,
      longitude: json.longitude,
      cidade: json.city,
      estado: json.principalSubdivision,
      pais: json.countryName,
    }));
}
