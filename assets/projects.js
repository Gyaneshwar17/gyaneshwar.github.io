const projects=[
  {
    title:"Self-Collision Aware Cloth Simulation",
    desc:"Graph neural network extension for realistic cloth dynamics w/ collision avoidance."
  },
  {
    title:"Scene Formation for Game Asset Building",
    desc:"2D→3D game asset pipeline using Zero123 & Trellis."
  },
  {
    title:"3D Underwater Experience",
    desc:"Interactive 3D scenes & marine simulation in Unity/Unreal."
  },
  {
    title:"Low-Light Image Enhancement",
    desc:"Retinex-based enhancement + custom perceptual VGG-loss for illumination correction."
  }
];

document.querySelector(".proj-grid").innerHTML =
  projects.map(p=>`
    <div class="proj">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join("");
