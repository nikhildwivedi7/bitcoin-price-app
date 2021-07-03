const bp = document.querySelector("span");

const bitcoin = async () => {
  const fetchData = await fetch(
    "https://api.cryptonator.com/api/ticker/btc-usd"
  );
  const data = await fetchData.json();
  const price = data.ticker.price;
  bp.innerText = price;
};

setInterval(() => {
  bitcoin();
}, 30000);
