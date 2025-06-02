const countdownElement = document.getElementById('countdown');
if (countdownElement) {
  const endDate = new Date('2025-07-31T23:59:59').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    let diff = endDate - now;

    if (diff < 0) {
      countdownElement.textContent = "Promocja wygasła";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    let text = '';
    if (days > 0) {
      text += days + 'd ';
    }
    text +=
      String(hours).padStart(2, '0') + ':' +
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0');

    countdownElement.textContent = text;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
