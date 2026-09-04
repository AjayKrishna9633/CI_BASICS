// A simple utility function (e.g. for user authentication / input validation)
function sanitizeUsername(username) {
  if (!username || typeof username !== 'string') {
    throw new Error("Invalid username");
  }
  return username.trim().toLowerCase();
}

function calculateDiscount(price, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Discount percent must be between 0 and 100");
  }
  // 💥 INTENTIONAL BUG: Adding discount instead of subtracting!
  return price + (price * (discountPercent / 100));
}

module.exports = { sanitizeUsername, calculateDiscount };
