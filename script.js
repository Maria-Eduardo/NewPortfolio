//Animação escrita
var typed = new Typed(".text-animation",{
    strings:["Desenvolvedora Frontend","Desenvolvedora Backend", " estudante de mestrado em engenharia de tecnologias e sistemas web"],
    typeSpeed:120,
    backSpeed:120,
    backDelay:1000,
    loop:true
  });

 //Menu opener 
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add ('active');
        })
      }
    });
  }

   // menuIcon.onclick = () => {
   // menuIcon.classList.toggle('bx-menu');
   // navbar.classList.toggle('active');
 // }
  menuIcon.onclick = () => {
  navbar.classList.toggle('active');
};  

navLinks.forEach(link => {
    link.onclick = () => {
      navbar.classList.remove('active');
     // menuIcon.classList.remove('bx-menu'); // opcional, caso você queira redefinir o ícone
    };
});