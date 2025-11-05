const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
  .then(response => response.json())
  .then(posts => {
    const destinationGrid = document.querySelector('.destination__grid');
    if (destinationGrid) {
      posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'destination__card border shadow-sm';
        card.innerHTML = `
          <img src="https://picsum.photos/300/200?random=${post.id}" alt="Destination Image" class="img-fluid mb-3 rounded">
          <div class="destination__card__details">
            <h4 class="fw-bold">${post.title}</h4>
            <p class="text-secondary">${post.body}</p>
          </div>
        `;
        destinationGrid.appendChild(card);
      });
    }
  });

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  let valid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  [name, email, message].forEach(field => field.classList.remove('is-invalid'));

  if (name.value.trim() === '') {
    name.classList.add('is-invalid');
    valid = false;
  }
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value.trim())) {
    email.classList.add('is-invalid');
    valid = false;
  }
  if (message.value.trim() === '') {
    message.classList.add('is-invalid');
    valid = false;
  }
  if (!valid) {
    event.preventDefault();
    event.stopPropagation();
  }
}, false);
