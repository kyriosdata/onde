/**
 * Recupera a posição geográfica a partir da qual a função é executada.
 * @param {function(erro,dados)} callback Recebe erro que, se definido, indica operação realizada de forma insatisfatória. Caso contrário, consulte os dados, um objeto contendo as propriedades latitude e longitude.
 */
function posicaoGeografica(callback) {
  if (typeof navigator == "undefined") {
    callback("erro ao obter posição, provavelmente não executado em browser");
    return;
  }

  navigator.geolocation.getCurrentPosition((posicao) => {
    const { latitude, longitude } = posicao.coords;
    callback(null, { latitude, longitude });
  });
}

/**
 * Recupera detalhes da posição geográfica fornecida, especificamente,
 * um objeto contendo 'cidade', 'estado' e 'pais'.
 *
 * @param {number} latitude Latitude
 * @param {number} longitude Longitude
 * @returns Promise
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

if (typeof module !== "undefined") {
  module.exports = {
    posicaoGeografica,
    onde,
  };
}
