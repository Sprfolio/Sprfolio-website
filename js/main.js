/* SPRFOLIO central brand configuration — edit this section for launch details. */
const SPRFOLIO={
  brand:'SPRFOLIO',
  type:'Creative House',
  tagline:'One Creative House. Many Creative Worlds.',
  email:'hello@sprfolio.com',
  socials:{instagram:'',behance:'',linkedin:'',youtube:''},
  year:new Date().getFullYear(),
  colors:{ink:'#10110f',paper:'#f5f1e8',white:'#fffdf8',beige:'#ded5c3',sage:'#9eaa8f'}
};

document.documentElement.style.setProperty('--ink',SPRFOLIO.colors.ink);
document.documentElement.style.setProperty('--paper',SPRFOLIO.colors.paper);
document.documentElement.style.setProperty('--white',SPRFOLIO.colors.white);
document.documentElement.style.setProperty('--beige',SPRFOLIO.colors.beige);
document.documentElement.style.setProperty('--sage',SPRFOLIO.colors.sage);
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=SPRFOLIO.year);
document.querySelectorAll('[data-email]').forEach(el=>{
  el.textContent=SPRFOLIO.email;
  if(el.tagName==='A') el.href=`mailto:${SPRFOLIO.email}`;
});

Object.entries(SPRFOLIO.socials).forEach(([key,url])=>{
  document.querySelectorAll(`[data-social="${key}"]`).forEach(el=>{
    if(!url)return;
    if(el.tagName!=='A'){
      const link=document.createElement('a');
      link.className=el.className;
      link.dataset.social=key;
      link.innerHTML=el.innerHTML;
      el.replaceWith(link);
      el=link;
    }
    el.href=url;
    el.target='_blank';
    el.rel='noopener noreferrer';
    el.removeAttribute('aria-disabled');
    el.removeAttribute('tabindex');
    el.classList.remove('social-pending');
  });
});

const header=document.querySelector('.site-header');
let lastScrollY=window.scrollY;
let ticking=false;
const updateHeader=()=>{
  if(!header){ticking=false;return;}
  const y=window.scrollY;
  const scrollingDown=y>lastScrollY+4;
  const scrollingUp=y<lastScrollY-4;
  header.classList.toggle('is-scrolled',y>18);
  if(y<=18) header.classList.remove('is-hidden');
  else if(scrollingDown&&y>90) header.classList.add('is-hidden');
  else if(scrollingUp) header.classList.remove('is-hidden');
  lastScrollY=y;
  ticking=false;
};
window.addEventListener('scroll',()=>{
  if(!ticking){window.requestAnimationFrame(updateHeader);ticking=true;}
},{passive:true});
updateHeader();

const menuToggle=document.querySelector('.menu-toggle');
const overlay=document.querySelector('.menu-overlay');
if(menuToggle&&overlay){
  const close=({restoreFocus=true}={})=>{
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    menuToggle.setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-label','Open navigation');
    document.body.style.overflow='';
    if(restoreFocus) menuToggle.focus();
  };
  const open=()=>{
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    menuToggle.setAttribute('aria-expanded','true');
    menuToggle.setAttribute('aria-label','Close navigation');
    document.body.style.overflow='hidden';
    const firstLink=overlay.querySelector('a');
    if(firstLink) firstLink.focus();
  };
  menuToggle.addEventListener('click',()=>overlay.classList.contains('open')?close():open());
  overlay.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>close({restoreFocus:false})));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&overlay.classList.contains('open')) close();
  });
}

const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}
  }),{threshold:.12});
  revealItems.forEach(el=>observer.observe(el));
}else revealItems.forEach(el=>el.classList.add('is-visible'));
