document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  const button = document.getElementById("die");
  const quote = document.getElementById("quote");
  button.addEventListener("click", async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const advice = await res.json();
      console.log(advice);
      quote.innerText = advice.slip.advice;
    } catch (error) {
      console.error(error);
    }
  });
});
