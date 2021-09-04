# Onde estou?

Obtém localização geográfica a partir da qual o navegador é executado.
Exige permissão do usuário.

Um exemplo completo encontra-se no diretório [js](js):

- [index.html](js/index.html) página que ilustra a funcionalidade desejada,
  exibe a posição geográfica juntamente com a cidade, estado e país.
- [onde.js](js/onde.js) código JS que requisita a posição geográfica e detalhes da posição geográfica.

## Testar

- `npm run start` (disponibiliza arquivo 'index.html' em http://127.0.0.1:8080/)
- `npm run test` (requisita a página index.html com pelo menos duas posições geográficas definidas para verificação)

# Agradecimentos

Esta funcionalidade é possível conforme implementada pelo serviço gratuito
oferecido pela [BigDataCloud](https://www.bigdatacloud.com/geocoding-apis/free-reverse-geocode-to-city-api?gclid=Cj0KCQjwssyJBhDXARIsAK98ITSzSGoOSohduShoT-Va85zOcKIsAvjK34lR2LPBHZf7T9ar2sZGc8YaAua4EALw_wcB).
