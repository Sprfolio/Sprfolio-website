const path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
document.querySelectorAll('.nav-links a').forEach(link=>{
  const href=(link.getAttribute('href')||'').split('#')[0].toLowerCase();
  if(href===path) link.setAttribute('aria-current','page');
});
const brand=document.querySelector('.brand[href="index.html"]');
if(brand&&(path==='index.html'||location.pathname.endsWith('/'))) brand.setAttribute('aria-current','page');
