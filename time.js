AFRAME.registerComponent("game",{
    schema:{
        gamestate:{type:"string",default:"play"}
    },
    init: function(){
        var duration = 300
        var timerE1 = document.querySelector("#timer")
        this.startTimer(duration,timerE1)
    },
    startTimer :function(duration,timerE1){
        var minutes,seconds
        setInterval(() => {
            if(duration>=0){
                this.data.gamestate="play"
                minutes=parseInt(duration/60)
                seconds=parseInt(duration%60)
                if(minutes<10){
                    minutes="0"+minutes
                }
                if(seconds<10){
                    seconds="0"+seconds
                }
                timerE1.setAttribute("text",{value:minutes+":"+seconds})
                duration-=1
            }
            else{
                this.data.gamestate="over"
                var over = document.querySelector("#over")
                over.setAttribute("visible",true)
               
                
            }
        }, 1000);
      
    }



})