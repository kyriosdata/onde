## Exemplo de uso do script

Inclua o script usando uma das opções abaixo (a sugestão é identificar a versão mais
recente e não necessariamente aquela identificada abaixo):

- Via **jsdelivr**
  - `<script src="https://cdn.jsdelivr.net/gh/kyriosdata/onde@v1.0.1/js/onde.js"></script>`
- Via **github**
  - `<script src="https://github.com/kyriosdata/onde/releases/download/v1.0.1/onde.js"></script>`

O arquivo [index.html](index.html) ilustra esta inclusão e o uso das duas funções
definidas: **posicaoGeografica** e **onde**. De fato, o trecho de uso resume-se aquele abaixo:

```javascript
posicaoGeografica()
  .then((p) => onde(p.latitude, p.longitude))
  .then(exibeResultados);
```

onde é obtida a posição geográfica, que é repassada para a função **onde** que, por sua vez,
retorna objeto contendo detalhes da posição fornecida. Neste caso, a função **exibeResultado**
apenas atualiza elementos HTML tornando o resultado visível na página carregada.

## Como executar o exemplo?

- `npm install`
- `npm run start`
- Se o navegador não abrir, então siga o link http://127.0.0.1:8080.
