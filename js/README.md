## Localização geográfica

O arquivo [onde.js](onde.js) possui cerca de 30 linhas de código e duas funções:

### posicaoGeografica()

Retorna uma _Promise_ cujo resultado é um objeto contendo duas propriedades, `latitude` e `longitude`.

```javascript
posicaoGeografica().then(console.log);
```

### onde(latitude, longitude)

Esta função recebe dois valores numéricos, latitude e longitude.
Retorna uma _Promise_ com detalhes da posição, a saber, um objeto com
as seguintes propriedades:

- `latitude`
- `longitude`
- `cidade`
- `estado`
- `pais`

Exemplo de uso possível, combinado:

```javascript
posicaoGeografica()
  .then((p) => onde(p.latitude, p.longitude))
  .then(console.log);
```

## Testar

- `npm run start` (disponibiliza arquivo 'index.html' em http://127.0.0.1:8080/)
- `npm run test` (requisita a página index.html com pelo menos duas posições geográficas definidas para verificação)
