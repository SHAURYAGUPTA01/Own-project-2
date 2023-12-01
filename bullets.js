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
  
          bullet.setAttribute("material", "color", "black");
          bullet.setAttribute("position", {
            x: pos.x,
            y: pos.y+1.6,
            z: pos.z-0.08,
          });
  
          bullet.setAttribute("velocity", direction.multiplyScalar(-20));
          var scene = document.querySelector("#scene");
          bullet.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "0",
          });
          bullet.setAttribute("visible", false);
          bullet.addEventListener("collide", this.removeBullet);
          scene.appendChild(bullet);
        }
      });
    },
    removeBullet: function (e) {
      var scene = document.querySelector("#scene");
      var element = e.detail.target.el;
      var elementHit = e.detail.body.el;
  
      var pos = element.getAttribute("position")
      var rotate = elementHit.getAttribute("rotation")
  
      element.removeEventListener("collide", this.removeBullet);
   
      scene.removeChild(element);
    },
  });
  
  