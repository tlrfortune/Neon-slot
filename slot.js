
const symbols = ['🍒', '🍋', '🍇', '🔔', '7️⃣', '💎'];

document.getElementById("spin-btn").addEventListener("click", () => {
  const reels = [
    document.getElementById("reel1"),
    document.getElementById("reel2"),
    document.getElementById("reel3")
  ];
  const result = [];

  reels.forEach((reel, index) => {
    const rand = Math.floor(Math.random() * symbols.length);
    reel.textContent = symbols[rand];
    result.push(symbols[rand]);
  });

  const unique = new Set(result);
  const resultText = unique.size === 1
    ? "🎉 JACKPOT! You win!"
    : "Try again!";
  document.getElementById("result").textContent = resultText;
});
