## Localização geográfica

O arquivo [onde.js](onde.js) possui cerca de 30 linhas de código e duas funções:

### posicaoGeografica()

```javascript
posicaoGeografica().then(console.log);
```

O resultado é um objeto contendo duas propriedades, `latitude` e `longitude`.

### onde(latitude, longitude)

Esta função recebe dois valores numéricos, latitude e longitude.
Retorna uma _Promise_ com detalhes da posição, a saber, um objeto com
as seguintes propriedades:

- `latitude`
- `longitude`
- `cidade`
- `estado`
- `pais`

### Possível uso

```js
posicaoGeografica()
  .then((p) => onde(p.latitude, p.longitude))
  .then(console.log);
```
