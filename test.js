import assert from 'assert';

try {
  // Cambiamos 5 por 10 para forzar el fallo
  assert.strictEqual(2 + 3, 10);
  console.log("✅ Las pruebas automáticas pasaron exitosamente.");
  process.exit(0);
} catch (error) {
  console.error("❌ La prueba falló:", error.message);
  process.exit(1);
}