## Localização geográfica

O arquivo [onde.js](onde.js) possui menos de 40 linhas de código e duas funções:

### posicaoGeografica()

```javascript
posicaoGeografica().then(console.log);
```

O resultado é um objeto contendo duas propriedades, `latitude` e `longitude`.

```js
posicaoGeografica()
  .then((p) => onde(p.latitude, p.longitude))
  .then(console.log);
```

O resultado é um objeto contendo cinco propriedades:

- `latitude`
- `longitude`
- `cidade`
- `estado`
- `pais`
