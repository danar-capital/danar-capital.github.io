(() => {
  const qs = (s,r=document)=>r.querySelector(s);
  const qsa = (s,r=document)=>[...r.querySelectorAll(s)];
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
  const lerp=(a,b,t)=>a+(b-a)*t;
  const ease=t=>1-Math.pow(1-clamp(t),3);

  const header=qs('#siteHeader');
  const progress=qs('#scrollProgress');
  const hero=qs('.hero-scroll');
  const heroCopy=qs('#heroCopy');
  const heroTitle=qs('#heroTitle');
  const notes=qsa('.floating-note');
  const sideCopy=qs('#heroSideCopy');
  const exp=qs('.experience-scroll');
  const chapters=qsa('.chapter-copy');
  const orbits=qsa('.service-orbit');
  const reveals=qsa('.reveal');
  const cursorGlow=qs('#cursorGlow');
  const beautyMouseItems=qsa('.hero-beauty-stage .mouse-item');
  const cardMaterials=qsa('.mouse-card .material');

  let tmx=0,tmy=0,mx=0,my=0;
  const pointer={x:innerWidth/2,y:innerHeight/2};
  addEventListener('pointermove',e=>{
    pointer.x=e.clientX; pointer.y=e.clientY;
    tmx=(e.clientX/innerWidth-.5)*2;
    tmy=(e.clientY/innerHeight-.5)*2;
  },{passive:true});

  function pageProgress(){
    const max=document.documentElement.scrollHeight-innerHeight;
    return max>0?scrollY/max:0;
  }
  function sectionProgress(el){
    const r=el.getBoundingClientRect();
    const total=el.offsetHeight-innerHeight;
    return total>0?clamp(-r.top/total):0;
  }

  function setHero(){
    const p=sectionProgress(hero);
    const intro=clamp(p/.28);
    const morph=clamp((p-.18)/.55);
    const outro=clamp((p-.72)/.28);
    const scale=lerp(1,1.17,ease(morph));
    const x=mx*16;
    const y=lerp(0,-44,ease(morph)) + my*10;
    heroCopy.style.transform=`translate3d(${x}px,${y}px,0) scale(${scale})`;
    heroCopy.style.opacity=`${1-outro*.93}`;
    heroCopy.style.filter=`blur(${outro*9}px)`;
    heroTitle.style.letterSpacing=`${lerp(.015,.085,morph)}em`;

    const positions=[
      {x:lerp(0,-120,morph)+mx*18,y:lerp(0,-80,morph)+my*14,o:1-outro},
      {x:lerp(0,130,morph)+mx*24,y:lerp(0,-30,morph)+my*10,o:1-outro},
      {x:lerp(0,90,morph)+mx*18,y:lerp(0,90,morph)+my*14,o:1-outro}
    ];
    notes.forEach((n,i)=>{
      const d=positions[i];
      n.style.transform=`translate3d(${d.x}px,${d.y}px,0) scale(${lerp(1,.94,morph)})`;
      n.style.opacity=`${d.o*(.6+.4*intro)}`;
    });
    sideCopy.style.opacity=`${1-outro}`;
    sideCopy.style.transform=`translate3d(${mx*14}px,${my*10}px,0)`;

    beautyMouseItems.forEach((el,idx)=>{
      const depth=Number(el.dataset.depth||10);
      const sx=mx*depth;
      const sy=my*depth*.7;
      el.style.transform=`translate3d(${sx}px,${sy}px,0)`;
      el.style.opacity = idx < 2 ? `${0.92 - outro*0.4}` : el.style.opacity;
    });
  }

  function setExperience(){
    const p=sectionProgress(exp);
    const count=chapters.length;
    const scaled=p*count;
    chapters.forEach((ch,i)=>{
      const local=scaled-i;
      const ent=ease(clamp(local/.46));
      const out=ease(clamp((local-.62)/.38));
      const opacity=clamp(ent*(1-out));
      const isCenter=ch.classList.contains('chapter-copy-3');
      const dir=ch.classList.contains('chapter-copy-2')?-1:1;
      const x=isCenter?mx*14:lerp(dir*70,0,ent)+dir*out*55 + mx*12;
      const y=(isCenter?lerp(34,0,ent)-out*28:lerp(28,0,ent)-out*22) + my*8;
      const base=isCenter?'translate(-50%,-50%) ':'translateY(-50%) ';
      ch.style.opacity=opacity;
      ch.style.filter=`blur(${(1-ent)*10+out*8}px)`;
      ch.style.transform=`${base}translate3d(${x}px,${y}px,0) scale(${lerp(.94,1,ent)-out*.05})`;
    });
    orbits.forEach((o,i)=>{
      const center=(i+.48)/count;
      const dist=Math.abs(p-center);
      const vis=clamp(1-dist/.17);
      const phase=(p-center)*Math.PI*4;
      o.style.opacity=vis*.95;
      o.style.transform=`translate3d(${Math.sin(phase)*36 + mx*10}px,${Math.cos(phase)*24 + my*10}px,0) rotate(${Math.sin(phase)*3}deg) scale(${.9+vis*.1})`;
    });
  }

  function setCardsParallax(){
    cardMaterials.forEach((mat,i)=>{
      const depth=6 + i*1.5;
      mat.style.transform=`translate3d(${mx*depth}px,${my*depth}px,0)`;
    });
  }

  function setGlobal(){
    const pp=pageProgress(); progress.style.width=`${pp*100}%`;
    header.classList.toggle('scrolled',scrollY>24);
    setHero();
    setExperience();
    setCardsParallax();
  }

  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});
  reveals.forEach(el=>io.observe(el));

  const pc=qs('#particleCanvas'),ctx=pc.getContext('2d');
  let pts=[];
  function sizeParticles(){
    const dpr=Math.min(devicePixelRatio||1,2);
    pc.width=innerWidth*dpr;pc.height=innerHeight*dpr;pc.style.width=innerWidth+'px';pc.style.height=innerHeight+'px';ctx.setTransform(dpr,0,0,dpr,0,0);
    pts=Array.from({length:Math.min(90,Math.max(45,Math.round(innerWidth/19)))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:.45+Math.random()*1.4,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,a:.08+Math.random()*.34}));
  }
  function drawParticles(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    pts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=innerWidth;if(p.x>innerWidth)p.x=0;if(p.y<0)p.y=innerHeight;if(p.y>innerHeight)p.y=0;
      const d=Math.hypot(p.x-pointer.x,p.y-pointer.y);const boost=d<160?(1-d/160)*.28:0;
      ctx.beginPath();ctx.fillStyle=`rgba(108,225,218,${p.a+boost})`;ctx.arc(p.x,p.y,p.r+boost*2,0,Math.PI*2);ctx.fill();
    });requestAnimationFrame(drawParticles);
  }
  sizeParticles();drawParticles();addEventListener('resize',sizeParticles);

  const state={location:'Dabouq',service:'Hair',date:'16',time:'10:30 AM',name:'',phone:''};
  const shell=qs('#bookingShell'),content=qs('#bookingContent'),steps=qsa('.step',shell);
  const flow=['location','service','time','details']; let stepIndex=0;
  function option(label,sub,key,val){return `<button class="option ${state[key]===val?'selected':''}" data-option-key="${key}" data-option-val="${val}"><strong>${label}</strong><small>${sub}</small></button>`}
  function renderBooking(){
    steps.forEach((s,i)=>s.classList.toggle('active',i===stepIndex));
    const step=flow[stepIndex];
    if(step==='location') content.innerHTML=`<h3 class="booking-title">Choose your TEAL</h3><p class="booking-help">Select the location you’d like to visit.</p><div class="option-grid">${option('Dabouq','Amman · premium salon experience','location','Dabouq')}${option('Khalda','Amman · convenient city location','location','Khalda')}</div><div class="booking-next"><button data-next>Continue</button></div>`;
    if(step==='service') content.innerHTML=`<h3 class="booking-title">Choose an experience</h3><p class="booking-help">Demo service names — final menu can match TEAL’s exact service catalog.</p><div class="option-grid">${option('Hair','Cut · color · styling','service','Hair')}${option('Nails','Manicure · polish · art','service','Nails')}${option('Makeup','Soft glam · occasion','service','Makeup')}${option('Bridal','Consultation · hair · makeup','service','Bridal')}</div><div class="booking-next"><button data-next>Continue</button></div>`;
    if(step==='time'){
      const nums=['11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
      content.innerHTML=`<h3 class="booking-title">Select date & time</h3><p class="booking-help">Available times would be live once connected to TEAL’s real schedule.</p><div class="calendar"><div class="dow">Su</div><div class="dow">Mo</div><div class="dow">Tu</div><div class="dow">We</div><div class="dow">Th</div><div class="dow">Fr</div><div class="dow">Sa</div>${nums.map(n=>`<button class="${state.date===n?'selected':''}" data-date="${n}">${n}</button>`).join('')}</div><div class="times">${['10:30 AM','1:00 PM','4:30 PM','6:00 PM'].map(t=>`<button class="${state.time===t?'selected':''}" data-time="${t}">${t}</button>`).join('')}</div><div class="booking-next"><button data-next>Continue</button></div>`;
    }
    if(step==='details') content.innerHTML=`<h3 class="booking-title">Your details</h3><p class="booking-help">Complete the demo reservation.</p><div class="form-grid"><input id="bkName" placeholder="Full name" value="${state.name}"><input id="bkPhone" placeholder="Mobile number" value="${state.phone}"></div><div class="summary-box"><strong>${state.service}</strong> · ${state.location}<br>May ${state.date} · ${state.time}</div><div class="booking-next"><button data-confirm-main>Confirm demo booking</button></div>`;
    bindBooking();
  }
  function bindBooking(){
    qsa('[data-option-key]',content).forEach(b=>b.onclick=()=>{state[b.dataset.optionKey]=b.dataset.optionVal;renderBooking()});
    qsa('[data-date]',content).forEach(b=>b.onclick=()=>{state.date=b.dataset.date;renderBooking()});
    qsa('[data-time]',content).forEach(b=>b.onclick=()=>{state.time=b.dataset.time;renderBooking()});
    qs('[data-next]',content)?.addEventListener('click',()=>{stepIndex=Math.min(3,stepIndex+1);renderBooking()});
    qs('[data-confirm-main]',content)?.addEventListener('click',()=>{state.name=qs('#bkName')?.value||'';state.phone=qs('#bkPhone')?.value||'';content.innerHTML=`<div class="modal-success"><strong>Your TEAL moment is reserved.</strong><br>${state.service} · ${state.location}<br>May ${state.date} · ${state.time}<br><br><small>Demo confirmation only — no real booking has been created.</small></div>`});
  }
  steps.forEach((s,i)=>s.onclick=()=>{stepIndex=i;renderBooking()}); renderBooking();

  const modal=qs('#bookingModal'),modalBooking=qs('#modalBooking'); let modalStage=0;
  function renderModal(){
    if(modalStage===0) modalBooking.innerHTML=`<div class="modal-options">${['Dabouq','Khalda'].map(x=>`<button class="modal-option ${state.location===x?'selected':''}" data-mloc="${x}"><strong>${x}</strong><br><small>Amman</small></button>`).join('')}</div><button class="modal-confirm" data-mnext>Continue</button>`;
    if(modalStage===1) modalBooking.innerHTML=`<div class="modal-options">${['Hair','Nails','Makeup','Bridal'].map(x=>`<button class="modal-option ${state.service===x?'selected':''}" data-msvc="${x}"><strong>${x}</strong><br><small>TEAL experience</small></button>`).join('')}</div><button class="modal-confirm" data-mnext>Continue</button>`;
    if(modalStage===2) modalBooking.innerHTML=`<div class="modal-options">${['10:30 AM','1:00 PM','4:30 PM','6:00 PM'].map(x=>`<button class="modal-option ${state.time===x?'selected':''}" data-mtime="${x}"><strong>${x}</strong><br><small>May 16</small></button>`).join('')}</div><button class="modal-confirm" data-mnext>Confirm demo appointment</button>`;
    if(modalStage===3) modalBooking.innerHTML=`<div class="modal-success"><strong>Reserved.</strong><br>${state.service} · ${state.location}<br>May 16 · ${state.time}<br><br><small>This is an interactive concept — no real appointment was submitted.</small></div>`;
    qsa('[data-mloc]',modalBooking).forEach(b=>b.onclick=()=>{state.location=b.dataset.mloc;renderModal()});
    qsa('[data-msvc]',modalBooking).forEach(b=>b.onclick=()=>{state.service=b.dataset.msvc;renderModal()});
    qsa('[data-mtime]',modalBooking).forEach(b=>b.onclick=()=>{state.time=b.dataset.mtime;renderModal()});
    qs('[data-mnext]',modalBooking)?.addEventListener('click',()=>{modalStage=Math.min(3,modalStage+1);renderModal()});
  }
  qsa('[data-open-booking]').forEach(b=>b.addEventListener('click',()=>{modalStage=0;renderModal();modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));
  qsa('[data-close-booking]').forEach(b=>b.addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}));
  addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open')){modal.classList.remove('open');document.body.style.overflow=''}});

  function animate(){
    mx=lerp(mx,tmx,.08);
    my=lerp(my,tmy,.08);
    if(cursorGlow) cursorGlow.style.transform=`translate3d(${pointer.x}px,${pointer.y}px,0)`;
    setGlobal();
    requestAnimationFrame(animate);
  }

  addEventListener('scroll',setGlobal,{passive:true});
  addEventListener('resize',setGlobal);
  setGlobal();
  animate();
})();
