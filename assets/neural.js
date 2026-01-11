const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

const nodes = Array.from({length: 45},()=>({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  vx: (Math.random()-0.5)*0.3,
  vy: (Math.random()-0.5)*0.3
}));

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  nodes.forEach(n=>{
    n.x+=n.vx; n.y+=n.vy;
    if(n.x<0||n.x>canvas.width) n.vx*=-1;
    if(n.y<0||n.y>canvas.height) n.vy*=-1;
    ctx.fillStyle="#00eaff";
    ctx.fillRect(n.x,n.y,2,2);
  });
  nodes.forEach(a=>{
    nodes.forEach(b=>{
      const d=(a.x-b.x)**2+(a.y-b.y)**2;
      if(d<12000){
        ctx.strokeStyle="rgba(0,234,255,0.15)";
        ctx.beginPath();
        ctx.moveTo(a.x,a.y);
        ctx.lineTo(b.x,b.y);
        ctx.stroke();
      }
    });
  });
  requestAnimationFrame(draw);
}
draw();
