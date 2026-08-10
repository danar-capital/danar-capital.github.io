(()=>{
 const root=document.documentElement;
 const fetchJoin=async files=>(await Promise.all(files.map(async p=>{const r=await fetch(p,{cache:'force-cache'});if(!r.ok)throw new Error(p+' '+r.status);return r.text()}))).join('');
 const team=['./mj-v51-team-00.txt?v=56','./mj-v51-team-01.txt?v=56','./mj-v51-team-02a.txt?v=56','./mj-v51-team-02b.txt?v=56','./mj-v51-team-03.txt?v=56'];
 let started=false;
 async function loadTeam(){
  if(started)return; started=true;
  try{
   const s=await fetchJoin(team);
   root.style.setProperty('--team-atlas',`url("data:image/webp;base64,${s}")`);
   dispatchEvent(new Event('mj-team-ready'));
  }catch(e){console.error('[MJ team atlas]',e)}
 }
 const el=document.getElementById('team');
 if(!el||!('IntersectionObserver'in window)){loadTeam();return}
 const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){loadTeam();io.disconnect()}},{rootMargin:'900px 0px'});
 io.observe(el);
})();