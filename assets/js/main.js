var data;
function setCountdown() {
  setInterval(() => {
    let timeLeft = countdown(new Date(2020, 2, 7));
    data = timeLeft.toHTML();
    for (let i = 0; i < 5; i++) {
      var data = data.toLocaleString().replace(",", " ");
      var data = data.replace("and", " ");
    }
    document.querySelector("#countdown-container").innerHTML = data;
    console.log(
      (document.querySelector("#countdown-container").innerHTML = data)
    );
  }, 1000);
}
setCountdown();

$(document).ready(function() {
  $(".collapsible").collapsible();
});
