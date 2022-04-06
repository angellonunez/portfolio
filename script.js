const checkbox = document.getElementById('checkbox');
const hero = document.getElementById('hero');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
  hero.classList.toggle('dark');
  
})