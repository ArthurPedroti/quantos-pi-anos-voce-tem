const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('form');

btnLogin.addEventListener('click', event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")];

  fields.forEach(field => {
    if (field.value === "") form.classList.add('validate-error');
  });

  const formError = document.querySelector('.validate-error');
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    var strData2 = document.querySelector('.date-value').value;
    var d = new Date(strData2);
    d.setDate(d.getDate() + 1);

    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - d.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    var resultado = diffDays / (Math.PI*365);
    alert('Você tem: ' + resultado.toLocaleString() + ' π (Pi) anos.' );
  }
});

/* squares */

const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {
  const li = document.createElement("li");

  const random = (min, max) => Math.random() * (max - min) + min;
  
  const size = Math.floor(random(100, 320));
  const position = random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.fontSize = `${size}px`;

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`;
  
  li.innerHTML = "π";
  ulSquares.appendChild(li);
}