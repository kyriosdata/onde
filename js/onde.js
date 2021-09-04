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
