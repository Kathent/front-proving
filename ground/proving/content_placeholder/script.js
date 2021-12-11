let header = document.getElementById("card-header");
let icon = document.getElementById("icon");
let spans = document.querySelectorAll("span");
header && spans;
setTimeout(() => {
  header.classList.remove("animated-bg");
  header.style.backgroundImage = `url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')`;

  icon.classList.remove("animated-bg");
  icon.style.backgroundImage = `url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')`;

  for (let x in spans) {
    spans[x].classList?.remove("animated-bg");
    spans[x].classList?.remove("animated-text");
    spans[x].textContent = "abcdefdgsdgsdgsdgsdgsdgsdgdsg";
  }
}, 2000);
