(()=>{
 const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
 const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
 const coarse=matchMedia('(hover:none) and (pointer:coarse)').matches;
 const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
 const assets={
  'photo-01':'./assets/v57/hero-desktop.webp?v=57','photo-02':'./assets/images/photo-02.avif?v=57','photo-03':null,
  'photo-04':'./assets/images/photo-04.avif?v=57','photo-05':'./assets/images/photo-05.avif?v=57','photo-06':'./assets/images/photo-06.avif?v=57','photo-07':'./assets/images/photo-07.avif?v=57','photo-08':'./assets/images/photo-08.avif?v=57'
 }; const heroMobile='./assets/v57/hero-mobile.webp?v=57',heroDesktop='./assets/v57/hero-desktop.webp?v=57';
 function hydrate(){
  const teamPos={'photo-09':['0%','0%'],'photo-10':['50%','0%'],'photo-11':['100%','0%'],'photo-12':['0%','100%'],'photo-13':['50%','100%'],'photo-14':['100%','100%']};
  qa('[data-img]').forEach(el=>{const k=el.dataset.img;
    if(k==='photo-03'&&window.MJ?.LOGO){if(el.tagName==='IMG')el.src=window.MJ.LOGO;else el.style.backgroundImage=`url("${window.MJ.LOGO}")`;return}
    if(teamPos[k]){el.src='data:image/gif;base64,R0lGODlhAQABAAAAACw=';el.style.backgroundImage='url("./assets/v57/team-clean.webp?v=57")';el.style.backgroundSize='300% 200%';el.style.backgroundPosition=`${teamPos[k][0]} ${teamPos[k][1]}`;el.style.backgroundRepeat='no-repeat';return}
    const src=assets[k];if(!src)return;if(el.tagName==='IMG')el.src=src;else{el.style.backgroundImage=`url("${src}")`;el.style.backgroundSize='cover';el.style.backgroundPosition='center'};
  });
 } hydrate();
 const header=q('#header'),progress=q('#progress'),heroScroll=q('.hero-scroll'),expScroll=q('.experience-scroll'),bg1=q('.hero-bg'),bg2=q('.hero-bg2'),heroCopy=q('#heroCopy'),heroSide=q('#heroSide'),scenes=qa('.scene'),orbits=qa('.orbit'),ribbons=qa('.ribbons span'),cursor=q('#cursor');
 const mobile=matchMedia('(max-width:700px)').matches;
 bg1.style.backgroundImage=`url("${mobile?heroMobile:heroDesktop}")`;
 bg1.style.backgroundSize='cover';bg1.style.backgroundPosition=mobile?'center 36%':'center';
 if(!mobile){bg2.style.backgroundImage=`linear-gradient(90deg,rgba(4,7,11,.34),rgba(4,7,11,.72)),url("${assets['photo-02']}")`;}
 let px=innerWidth/2,py=innerHeight/2,mx=0,my=0,tx=0,ty=0;
 if(!coarse){addEventListener('pointermove',e=>{px=e.clientX;py=e.clientY;tx=(px/innerWidth-.5)*2;ty=(py/innerHeight-.5)*2;if(cursor)cursor.style.transform=`translate3d(${px}px,${py}px,0)`},{passive:true})}
 const sectionProgress=el=>{const r=el.getBoundingClientRect(),travel=Math.max(1,el.offsetHeight-innerHeight);return clamp(-r.top/travel)};
 const stage=(p,c,w=.26)=>clamp(1-Math.abs(p-c)/w);
 let ticking=false;
 function render(){
  ticking=false;mx+=(tx-mx)*.16;my+=(ty-my)*.16;
  const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);progress.style.width=(scrollY/max*100)+'%';header.classList.toggle('scrolled',scrollY>18);
  const hp=sectionProgress(heroScroll),exit=clamp((hp-.67)/.23),mix=clamp((hp-.16)/.54);
  if(mobile){bg1.style.transform=`translate3d(0,${-hp*18}px,0) scale(${1.015+hp*.018})`;heroCopy.style.transform=`translate3d(0,${-hp*34}px,0)`;heroSide.style.transform=`translate3d(${hp*7}px,${-hp*12}px,0) rotateY(${hp*5}deg)`;}
  else{bg1.style.transform=`translate3d(0,${-hp*24}px,0) scale(${1+hp*.05})`;bg1.style.opacity=1-mix*.68;bg2.style.opacity=mix*.82;bg2.style.transform=`translate3d(0,${-mix*14}px,0) scale(${1.055-mix*.02})`;heroCopy.style.transform=`translate3d(${mx*11}px,${-mix*42+my*7}px,0)`;heroSide.style.transform=`translate3d(${mx*18}px,${mix*24+my*9}px,0) rotateY(${mx*2.5}deg)`;}
  heroCopy.style.opacity=1-exit*.94;heroSide.style.opacity=mobile?1-exit*.75:1-exit*.7;
  ribbons.forEach((r,i)=>{const dir=i%2?1:-1;const base=[-14,16,8,-8][i]||0;r.style.transform=`translate3d(${dir*hp*(18+i*4)}px,${(i-1.5)*hp*7}px,0) rotate(${base+dir*hp*5}deg)`});
  const ep=sectionProgress(expScroll),centers=[.17,.50,.83];
  scenes.forEach((el,i)=>{const v=stage(ep,centers[i],.25),side=i===1?1:-1;const y=(1-v)*30+(ep-centers[i])*22;const x=mobile?side*(1-v)*18:side*(1-v)*55+mx*8;el.style.opacity=v;el.style.transform=`translate3d(${x}px,${y}px,0) scale(${.94+v*.06})`;});
  orbits.forEach((o,i)=>{const v=stage(ep,centers[i],.29),ang=(ep-centers[i])*28;const mobileX=[-6,7,0][i]*v;const mobileY=(1-v)*-22;const x=mobile?mobileX:(i===0?-25:i===1?25:mx*10);o.style.opacity=.10+v*.9;o.style.transform=`translate3d(${x}px,${mobileY}px,${mobile?v*18:0}px) rotateY(${mobile?ang:ang*.35}deg) rotateX(${mobile?-4+v*4:my*2}deg) scale(${.88+v*.12})`;});
 }
 function request(){if(!ticking){ticking=true;requestAnimationFrame(render)}}
 addEventListener('scroll',request,{passive:true});addEventListener('resize',request,{passive:true});request();
 if(!coarse&&!reduced){setInterval(()=>{mx+=(tx-mx)*.12;my+=(ty-my)*.12;request()},80)}
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -5% 0px'});qa('.reveal').forEach(el=>io.observe(el));
 qa('.tilt,.member').forEach(card=>{if(coarse)return;card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1000px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateY(-3px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
 const state={service:'Hair Care',time:'7:30 PM',name:'',phone:''},book=q('#booking'),steps=qa('.step');let step=0;
 const opt=(label,sub,val)=>`<button class="option ${state.service===val?'selected':''}" data-service="${val}"><strong>${label}</strong><small>${sub}</small></button>`;
 function renderBooking(){steps.forEach((b,i)=>b.classList.toggle('active',i===step));if(step===0)book.innerHTML=`<h3>اختر الخدمة</h3><p>حدد الخدمة التي تريد حجزها.</p><div class="options">${opt('العناية بالشعر','Cut · Styling · Treatment','Hair Care')}${opt('العناية بالبشرة','Grooming facial','Skin Care')}${opt('العناية بالأظافر','Detail care','Nail Care')}${opt('البكجات','Full grooming package','Package')}</div><div class="next"><button class="primary" data-next>متابعة</button></div>`;if(step===1)book.innerHTML=`<h3>اختر الوقت</h3><p>الأوقات هنا للعرض؛ النسخة النهائية ترتبط بالتوافر الحقيقي.</p><div class="times">${['1:00 PM','4:00 PM','7:30 PM','9:00 PM'].map(t=>`<button class="time ${state.time===t?'selected':''}" data-time="${t}">${t}</button>`).join('')}</div><div class="next"><button class="primary" data-next>متابعة</button></div>`;if(step===2)book.innerHTML=`<h3>بياناتك</h3><p>أكمل بيانات الحجز.</p><div class="inputs"><input id="name" autocomplete="name" value="${state.name}" placeholder="الاسم الكامل"><input id="phone" inputmode="tel" autocomplete="tel" value="${state.phone}" placeholder="رقم الهاتف"></div><div class="summary"><b>${state.service}</b><br>${state.time} · MJ Hair Salon</div><div class="next"><button class="primary" data-confirm>تأكيد الحجز التجريبي</button></div>`;qa('[data-service]',book).forEach(b=>b.onclick=()=>{state.service=b.dataset.service;renderBooking()});qa('[data-time]',book).forEach(b=>b.onclick=()=>{state.time=b.dataset.time;renderBooking()});q('[data-next]',book)?.addEventListener('click',()=>{step=Math.min(2,step+1);renderBooking()});q('[data-confirm]',book)?.addEventListener('click',()=>{const name=q('#name',book),phone=q('#phone',book);state.name=name?.value.trim()||'';state.phone=phone?.value.trim()||'';if(!state.name||state.phone.replace(/\D/g,'').length<7){(!state.name?name:phone)?.focus();return}book.innerHTML=`<div class="summary"><b>تم حجز الموعد التجريبي.</b><br>${state.service} · ${state.time}<br>${state.name} · ${state.phone}<br><small>Demo only — لم يتم إنشاء حجز فعلي.</small></div>`})}
 steps.forEach((b,i)=>b.onclick=()=>{step=i;renderBooking()});renderBooking();
 const modal=q('#modal'),mc=q('#modalContent');function close(){modal.classList.remove('open');document.body.style.overflow=''}function open(){mc.innerHTML=`<p style="color:var(--muted);line-height:1.8">اختر الخدمة كبداية، وبعد الموافقة يمكن ربط هذا التدفق بنظام MJ الفعلي.</p><div class="options">${['Hair Care','Skin Care','Nail Care','Package'].map(s=>`<button class="option" data-ms="${s}"><strong>${s}</strong><small>MJ service</small></button>`).join('')}</div>`;modal.classList.add('open');document.body.style.overflow='hidden';qa('[data-ms]',mc).forEach(b=>b.onclick=()=>{state.service=b.dataset.ms;close();document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})})}qa('[data-book]').forEach(b=>b.onclick=open);qa('[data-close]').forEach(b=>b.onclick=close);addEventListener('keydown',e=>e.key==='Escape'&&close());
})();
