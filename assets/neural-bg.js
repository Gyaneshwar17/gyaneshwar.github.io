const canvas = document.getElementById("neural-bg");
const ctx = canvas.getContext("2d");

const nodes = [];
const count = 55;
const edgesDist = 150;
let mouse = {x:0,y:0};

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

for (let i=0;i<count;i++){
  nodes.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    vx:(Math.random()-0.5)*0.3,
    vy:(Math.random()-0.5)*0.3
  });
}

window.onmousemove = e => { mouse.x=e.clientX; mouse.y=e.clientY; };

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  nodes.forEach(n=>{
    n.x+=n.vx; n.y+=n.vy;

    if(n.x<0||n.x>canvas.width) n.vx*=-1;
    if(n.y<0||n.y>canvas.height) n.vy*=-1;

    let dx = n.x - mouse.x;
    let dy = n.y - mouse.y;
    let d2 = dx*dx+dy*dy;
    if(d2 < 25000){
      n.x += dx*0.005;
      n.y += dy*0.005;
    }

    ctx.fillStyle="#0ffcff";
    ctx.fillRect(n.x,n.y,2.5,2.5);
  });

  nodes.forEach(a=>{
    nodes.forEach(b=>{
      let dx=a.x-b.x, dy=a.y-b.y;
      let d = dx*dx+dy*dy;
      if(d<edgesDist*edgesDist){
        ctx.strokeStyle="rgba(0,255,255,0.10)";
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
