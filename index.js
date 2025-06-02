const texts = [
  "Nie czekaj na jutro. Zacznij w <span>Next Gym</span> już dziś",
  "Twój rozwój zaczyna się tutaj!",
  "Nowoczesny sprzęt i profesjonalni trenerzy czekają na Ciebie",
  "Dołącz do <span>Next Gym</span> i trenuj na własnych zasadach",
];

let current = 0;
let charIndex = 0;
let isDeleting = false;
const h3 = document.getElementById("changing-text");

function typeWriter() {
  const currentText = texts[current];
  let displayed = currentText.slice(0, charIndex);


  const lastOpen = displayed.lastIndexOf("<");
  const lastClose = displayed.lastIndexOf(">");
  if (lastOpen > lastClose) {
    displayed = currentText.slice(0, currentText.indexOf(">", lastOpen) + 1);
    charIndex = displayed.length;
  }

  h3.innerHTML = displayed + '<span class="cursor">|</span>';

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeWriter, 40);
  } else if (isDeleting && charIndex > 0) {

    if (currentText[charIndex - 1] === ">") {

      let tagStart = currentText.lastIndexOf("<", charIndex - 1);
      charIndex = tagStart;
      setTimeout(typeWriter, 0);
    } else {
      charIndex--;
      setTimeout(typeWriter, 20);
    }
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeWriter, 1800); 
    } else {
      isDeleting = false;
      current = (current + 1) % texts.length;
      setTimeout(typeWriter, 400); 
    }
  }
}




typeWriter();
