const container = document.getElementById("tensor-container");

const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, container.clientWidth/container.clientHeight, 0.1, 1000);
camera.position.set(0,0,45);

const skills = [
  "Python","C++","CV","DL","Unity","Unreal","Blender",
  "ML","3D Vision","Cloud","Git","Linux","Simulation"
];

const nodes3D = [];
const group = new THREE.Group();

skills.forEach((s,i)=>{
  let angle = (i/skills.length)*Math.PI*2;
  let node = new THREE.Mesh(
    new THREE.SphereGeometry(1.2,16,16),
    new THREE.MeshBasicMaterial({color:0x00f6ff})
  );
  node.position.set(Math.cos(angle)*15, Math.sin(angle)*15, (Math.random()-0.5)*10);
  node.skill = s;
  group.add(node);
  nodes3D.push(node);
});

scene.add(group);

const edgesMaterial = new THREE.LineBasicMaterial({color:0xff29ff, transparent:true, opacity:0.22});
nodes3D.forEach(a=>{
  nodes3D.forEach(b=>{
    if(a!==b){
      const geo = new THREE.BufferGeometry().setFromPoints([a.position,b.position]);
      const line = new THREE.Line(geo, edgesMaterial);
      group.add(line);
    }
  });
});

let mouseX=0, mouseY=0;
container.onmousemove = (e)=>{
  mouseX = (e.clientX/container.clientWidth - 0.5)*0.5;
  mouseY = (e.clientY/container.clientHeight - 0.5)*0.5;
};

function animate(){
  group.rotation.y += 0.003 + mouseX*0.01;
  group.rotation.x += mouseY*0.01;
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize",()=>{
  renderer.setSize(container.clientWidth, container.clientHeight);
  camera.aspect = container.clientWidth/container.clientHeight;
  camera.updateProjectionMatrix();
});
