// simple tabs + year
const tabs = document.querySelectorAll('.tab');
const panels = ['part1','part2','part3','notes'];

function show(id){
  tabs.forEach(t=>t.setAttribute('aria-selected', t.dataset.tab===id ? 'true' : 'false'));
  panels.forEach(p=>{
    const el = document.getElementById(p);
    el.hidden = (p !== id);
  });
}

tabs.forEach(btn=>{
  btn.addEventListener('click', ()=> {
    show(btn.dataset.tab);
    location.hash = btn.dataset.tab;
  });
});

window.addEventListener('load', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  const h = (location.hash||'#part1').replace('#','');
  show(panels.includes(h) ? h : 'part1');
});
