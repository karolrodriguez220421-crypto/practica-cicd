const assert = require('assert');
const { sumar } = require('./index');

try {
  assert.strictEqual(sumar(2, 3), 5);
  console.log("✅ Pruebas pasaron correctamente.");
  process.exit(0);
} catch (error) {
  console.error("❌ La prueba falló.");
  process.exit(1);
}