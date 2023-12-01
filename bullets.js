AFRAME.registerComponent("bullets", {
    init: function () {
      this.shootBullet();
    },
    shootBullet: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var bullet = document.createElement("a-entity");
  
          bullet.setAttribute("geometry", {
            primitive: "sphere",
            radius: 1,
          });
  
          bullet.setAttribute("velocity", direction.multiplyScalar(-20));
          var scene = document.querySelector("#scene");
          bullet.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "0",
          });
          bullet.setAttribute("visible", false);
          scene.appendChild(bullet);
        }
      });
    },
  });
  
  
