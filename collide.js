AFRAME.registerComponent("enemyTouch",{
    init:function(){
      ant = document.querySelector("#enemy1")
      ant.addEventListener("collide",function(e){
       console.log(e.detail.body.el.id)
        if(e.detail.body.el.id === "ant"){
          console.log("collided")
          console.log("helloo")
          ant.setAttribute("visible",false)
        }
      })
    }
  })