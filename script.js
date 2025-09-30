// Simple tabs + year
const tabs = document.querySelectorAll('.tab-button');
const panels = document.querySelectorAll('.tab-panel');

function activate(tabId){
  tabs.forEach(btn=>{
    const active = btn.dataset.tab === tabId;
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  panels.forEach((p,i)=>{
    const shouldShow =
      (tabId==='part1' && p.id==='panel-1') ||
      (tabId==='part2' && p.id==='panel-2') ||
      (tabId==='part3' && p.id==='panel-3') ||
      (tabId==='notes' && p.id==='panel-4');
    p.hidden = !shouldShow;
  });
}

// Deep-link with hash: #part1, #part2, #part3, #notes
function fromHash(){
  const h = (location.hash || '#part1').replace('#','');
  const valid = ['part1','part2','part3','notes'];
  activate(valid.includes(h) ? h : 'part1');
}
tabs.forEach(b=>b.addEventListener('click',()=> {
  location.hash = b.dataset.tab;
}));
window.addEventListener('hashchange', fromHash);
fromHash();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
