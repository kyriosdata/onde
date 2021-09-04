const local = require("../onde");

test("deve falhar", (done) => {
  local.posicaoGeografica((err, posicao) => {
    expect(err).toBeDefined();
    done();
  });
});
