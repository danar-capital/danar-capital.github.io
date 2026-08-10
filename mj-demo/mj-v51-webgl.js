(()=>{
 const c=document.getElementById('gl'),coarse=matchMedia('(hover:none) and (pointer:coarse)').matches,reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced)return;const g=c.getContext('webgl',{alpha:true,antialias:!coarse,powerPreference:coarse?'low-power':'high-performance'});if(!g)return;
 const vs=`attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
 const fs=`precision highp float;uniform vec2 r,m;uniform float t,s;
 float seg(vec2 p,vec2 a,vec2 b){vec2 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);return length(pa-ba*h);}
 float ring(vec2 p,vec2 c,float rr,float w){return smoothstep(w,0.,abs(length(p-c)-rr));}
 void main(){
  vec2 uv=(gl_FragCoord.xy-.5*r.xy)/r.y;vec2 mm=(m-.5)*2.;float T=t*.16;
  vec3 bg=vec3(.018,.025,.038),nav=vec3(.045,.13,.25),red=vec3(.86,.10,.16),iv=vec3(.93,.9,.86);vec3 col=bg;
  float vig=smoothstep(1.35,.18,length(uv*vec2(1.,.84)));col+=nav*.045*vig;
  // strong moving depth orbs
  for(int i=0;i<5;i++){float f=float(i);vec2 cc=vec2(sin(T*1.1+f*1.8)*.64,cos(T*.85+f*1.37)*.38)+mm*vec2(.10,.07);float d=length(uv-cc);float glow=exp(-d*d*(4.2+f*.7));vec3 tone=mix(nav,red,mod(f,2.));col+=tone*glow*(.14+.025*f);}
  // orbiting metallic rings
  vec2 oc=vec2(.32*sin(T+s*2.5)+mm.x*.10,.18*cos(T*.9+s*1.8)+mm.y*.08);for(int j=0;j<4;j++){float f=float(j);float rr=.18+f*.075+.025*sin(T*2.+f);float rg=ring(uv,oc,rr,.012);col+=mix(nav,red,mod(f,2.))*rg*(.28+.06*f);}
  // flowing ribbons
  for(int i=0;i<10;i++){float f=float(i),ph=f*.64+s*4.;vec2 a=vec2(-1.25,sin(T*1.25+ph)*.44+f*.022-.18+mm.y*.07);vec2 b=vec2(1.25,sin(T*1.44+ph+1.3)*.35-f*.018+mm.y*.04);float d=seg(uv,a,b),w=.012+.0018*f;float rb=smoothstep(w*2.8,w,d);float sh=smoothstep(w*1.7,0.,d);vec3 tone=mix(f<5.?nav:red,iv,sh*.32);col=mix(col,tone,rb*(.18+.025*f));}
  // cursor lens
  vec2 mp=vec2(mm.x*r.x/r.y*.5,mm.y*.5);float md=length(uv-mp);col+=iv*exp(-md*md*18.)*.05+red*exp(-md*md*7.)*.04;
  // depth sweep linked to scroll
  float sw=smoothstep(.08,0.,abs(uv.y-sin(s*7.+uv.x*2.3+T)*.15));col+=iv*sw*.045;
  col*=vig;col=pow(max(col,0.),vec3(.9));gl_FragColor=vec4(col,.94);
 }`;
 function sh(type,src){const x=g.createShader(type);g.shaderSource(x,src);g.compileShader(x);return x}const pr=g.createProgram();g.attachShader(pr,sh(g.VERTEX_SHADER,vs));g.attachShader(pr,sh(g.FRAGMENT_SHADER,fs));g.linkProgram(pr);g.useProgram(pr);const b=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,b);g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),g.STATIC_DRAW);const loc=g.getAttribLocation(pr,'p');g.enableVertexAttribArray(loc);g.vertexAttribPointer(loc,2,g.FLOAT,false,0,0);const ur=g.getUniformLocation(pr,'r'),um=g.getUniformLocation(pr,'m'),ut=g.getUniformLocation(pr,'t'),us=g.getUniformLocation(pr,'s');let mx=.5,my=.5,tmx=.5,tmy=.5;addEventListener('pointermove',e=>{tmx=e.clientX/innerWidth;tmy=1-e.clientY/innerHeight},{passive:true});function resize(){const d=Math.min(devicePixelRatio||1,coarse?1:2);c.width=innerWidth*d;c.height=innerHeight*d;c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';g.viewport(0,0,c.width,c.height)}resize();addEventListener('resize',resize,{passive:true});let last=0;function draw(now){if(coarse&&now-last<32)return requestAnimationFrame(draw);last=now;if(document.hidden)return requestAnimationFrame(draw);mx+=(tmx-mx)*.045;my+=(tmy-my)*.045;const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);g.uniform2f(ur,c.width,c.height);g.uniform2f(um,mx,my);g.uniform1f(ut,now*.001);g.uniform1f(us,scrollY/max);g.drawArrays(g.TRIANGLES,0,6);requestAnimationFrame(draw)}requestAnimationFrame(draw);
})();
