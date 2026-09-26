import assert from 'assert';

try {
  // Prueba básica de aserción
  assert.strictEqual(2 + 3, 5);
  console.log("✅ Las pruebas automáticas pasaron exitosamente.");
  process.exit(0);
} catch (error) {
  console.error("❌ La prueba falló:", error.message);
  process.exit(1);
}