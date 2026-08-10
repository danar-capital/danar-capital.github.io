(()=>{
 const root=document.documentElement;
 const fetchJoin=async files=>(await Promise.all(files.map(async p=>{const r=await fetch(p,{cache:'force-cache'});if(!r.ok)throw new Error(p+' '+r.status);return r.text()}))).join('');
 const salon=Array.from({length:29},(_,i)=>`./mj-v51-salon-${String(i).padStart(2,'0')}.txt?v=51`);
 const team=Array.from({length:4},(_,i)=>`./mj-v51-team-${String(i).padStart(2,'0')}.txt?v=51`);
 let salonStarted=false,teamStarted=false;
 async function loadSalon(){if(salonStarted)return;salonStarted=true;try{const s=await fetchJoin(salon);root.style.setProperty('--salon-atlas',`url("data:image/webp;base64,${s}")`);dispatchEvent(new Event('mj-salon-ready'))}catch(e){console.error('[MJ salon atlas]',e)}}
 async function loadTeam(){if(teamStarted)return;teamStarted=true;try{const s=await fetchJoin(team);root.style.setProperty('--team-atlas',`url("data:image/webp;base64,${s}")`);dispatchEvent(new Event('mj-team-ready'))}catch(e){console.error('[MJ team atlas]',e)}}
 const observe=(id,fn)=>{const el=document.getElementById(id);if(!el){fn();return}if(!('IntersectionObserver'in window)){fn();return}const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){fn();io.disconnect()}},{rootMargin:'1000px 0px'});io.observe(el)};
 observe('services',loadSalon);observe('team',loadTeam);
})();