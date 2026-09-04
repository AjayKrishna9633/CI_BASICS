const assert = require('assert');
const { sanitizeUsername, calculateDiscount } = require('../src/index.js');

console.log("🚀 Starting Automated Test Suite...\n");

let passed = 0;
let total = 0;

function runTest(testName, testFn) {
  total++;
  try {
    testFn();
    console.log(`  ✅ PASS: ${testName}`);
    passed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${testName}`);
    console.error(`     Error: ${err.message}`);
  }
}

// Test 1: sanitizeUsername
runTest("sanitizeUsername trims spaces and converts to lowercase", () => {
  const result = sanitizeUsername("  AdminUser_01  ");
  assert.strictEqual(result, "adminuser_01");
});

// Test 2: calculateDiscount
runTest("calculateDiscount calculates 20% off 100 correctly", () => {
  const result = calculateDiscount(100, 20);
  assert.strictEqual(result, 80);
});

// Test 3: calculateDiscount boundary error
runTest("calculateDiscount throws error when discount > 100", () => {
  assert.throws(() => calculateDiscount(100, 150), /Discount percent must be between 0 and 100/);
});

console.log(`\n========================================`);
console.log(`📊 Test Summary: ${passed}/${total} tests passed.`);
console.log(`========================================\n`);

if (passed !== total) {
  console.error("💥 CI Build Failed: One or more tests failed!");
  process.exit(1); // Exit with failure code
} else {
  console.log("🎉 All tests passed! Ready to build.");
  process.exit(0); // Exit with success code
}
