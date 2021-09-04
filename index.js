function getPosicaoGeografica(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicao) => {
      const { latitude, longitude } = posicao.coords;
      callback(latitude, longitude);
    });
  }
}

function onde(latitude, longitude) {
  const posicao = `latitude=${latitude}&longitude=${longitude}`;
  const hostPath = "api.bigdatacloud.net/data/reverse-geocode-client";
  const URL = `https://${hostPath}?${posicao}&localityLanguage=pt-br`;
  return fetch(URL).then((response) => response.json());
}
