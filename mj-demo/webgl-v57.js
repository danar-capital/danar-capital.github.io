(()=>{
'use strict';
const canvas=document.getElementById('hero3d');
if(!canvas||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
const gl=canvas.getContext('webgl',{alpha:true,antialias:false,depth:false,stencil:false,preserveDrawingBuffer:false,powerPreference:'high-performance'});
if(!gl)return;
const coarse=matchMedia('(hover:none) and (pointer:coarse)').matches;
const vs=`attribute vec3 aPos;attribute vec3 aCol;uniform float uTime;uniform float uScroll;uniform float uAspect;uniform float uPoint;varying vec3 vCol;void main(){vec3 p=aPos;float t=uTime*.16;float c=cos(t),s=sin(t);p.xz=mat2(c,-s,s,c)*p.xz;p.y+=sin(uTime*.35+p.x*2.7+p.z*1.9)*.055;p.z+=uScroll*.28;float depth=2.65-p.z;vec2 q=vec2(p.x/(depth*uAspect),p.y/depth);gl_Position=vec4(q*1.9,0.0,1.0);gl_PointSize=uPoint*(1.25/depth);vCol=aCol;}`;
const fs=`precision mediump float;varying vec3 vCol;void main(){vec2 p=gl_PointCoord-.5;float d=dot(p,p);float a=smoothstep(.25,.02,d);gl_FragColor=vec4(vCol,a*.72);}`;
const fsLine=`precision mediump float;varying vec3 vCol;void main(){gl_FragColor=vec4(vCol,.32);}`;
function shader(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);return s}
function program(frag){const p=gl.createProgram();gl.attachShader(p,shader(gl.VERTEX_SHADER,vs));gl.attachShader(p,shader(gl.FRAGMENT_SHADER,frag));gl.linkProgram(p);return p}
const pointProg=program(fs),lineProg=program(fsLine);
function locs(p){return{pos:gl.getAttribLocation(p,'aPos'),col:gl.getAttribLocation(p,'aCol'),time:gl.getUniformLocation(p,'uTime'),scroll:gl.getUniformLocation(p,'uScroll'),aspect:gl.getUniformLocation(p,'uAspect'),point:gl.getUniformLocation(p,'uPoint')}}
const LP=locs(pointProg),LL=locs(lineProg);
function makeBuffer(data){const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(data),gl.STATIC_DRAW);return b}
const pointData=[];let seed=911;const rnd=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646};const count=coarse?42:84;
for(let i=0;i<count;i++){const x=(rnd()-.5)*3.6,y=(rnd()-.5)*2.25,z=(rnd()-.5)*1.8,red=rnd()>.72;pointData.push(x,y,z,red?1:.72,red?.23:.78,red?.28:.86)}
const lineData=[],rings=coarse?2:3,segments=coarse?32:46;
for(let r=0;r<rings;r++){const rad=.72+r*.33,tilt=(r-.8)*.34;for(let i=0;i<segments;i++){const a=i/segments*Math.PI*2,b=(i+1)/segments*Math.PI*2;for(const ang of[a,b]){const x=Math.cos(ang)*rad,y=Math.sin(ang)*rad*.55,z=Math.sin(ang+tilt)*.38+(r-1)*.08,red=r===1;lineData.push(x,y,z,red?1:.72,red?.22:.76,red?.3:.84)}}}
const pointBuffer=makeBuffer(pointData),lineBuffer=makeBuffer(lineData);
function bind(p,l,b){gl.useProgram(p);gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.enableVertexAttribArray(l.pos);gl.vertexAttribPointer(l.pos,3,gl.FLOAT,false,24,0);gl.enableVertexAttribArray(l.col);gl.vertexAttribPointer(l.col,3,gl.FLOAT,false,24,12);gl.uniform1f(l.time,performance.now()/1000);gl.uniform1f(l.scroll,window.MJ_SCROLL_STATE?.hero||0);gl.uniform1f(l.aspect,canvas.width/canvas.height);gl.uniform1f(l.point,coarse?8:9.5)}
let visible=true,running=false;
function resize(){const d=Math.min(devicePixelRatio||1,coarse?1.3:1.75),w=Math.max(1,Math.round(canvas.clientWidth*d)),h=Math.max(1,Math.round(canvas.clientHeight*d));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h)}}
function frame(){if(!running)return;if(document.hidden||!visible){running=false;return}resize();gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);bind(lineProg,LL,lineBuffer);gl.drawArrays(gl.LINES,0,lineData.length/6);bind(pointProg,LP,pointBuffer);gl.drawArrays(gl.POINTS,0,pointData.length/6);requestAnimationFrame(frame)}
function start(){if(!running&&!document.hidden&&visible){running=true;requestAnimationFrame(frame)}}
const io=new IntersectionObserver(es=>{visible=es.some(e=>e.isIntersecting);if(visible)start();else running=false},{rootMargin:'80px'});io.observe(canvas);document.addEventListener('visibilitychange',()=>{if(!document.hidden&&visible)start()});addEventListener('resize',resize,{passive:true});resize();start();
})();