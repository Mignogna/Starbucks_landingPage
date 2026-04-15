

const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.querySelector('#nav-links');
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('show');

  if (isOpen) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.style.boxShadow = window.scrollY > 0 ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none';
});

/*window.addEventListener('scroll', () => {
  const header = document.getElementById('header');

  if (window.scrollY > 0) {
    header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
}
);*/