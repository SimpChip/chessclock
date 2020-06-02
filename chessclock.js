
      var time = 500;
      var min = 0;
      var sec = 0;
      var time1 = 0;
      var time2 = 0;
      var clocken = 0;
      var clockto = 0;
      
      document.querySelector(".clock1").addEventListener("click", start);
      document.querySelector(".clock2").addEventListener("click", start);
        

      function start() {
      document.querySelector(".clock1").removeEventListener("click", start);
      document.querySelector(".clock2").removeEventListener("click", start);
         document.querySelector(".clock2").addEventListener("click", clock1);
         time1 = time;
         time2 = time;
         updateTime1();
         updateTime2();
         clock1();
      }
      
      function keypress() {
         
      }


      function clock1() {
        document.querySelector(".clock2").removeEventListener("click", clock1);
        document.querySelector(".clock1").addEventListener("click", clock2);
        clearInterval(clockto);

        clocken = setInterval(function(){
            time1 = time1-1;
            time = time1;
            updateTime1();
        }, 1000);
      }
      function clock2() {
        document.querySelector(".clock1").removeEventListener("click", clock2);
        document.querySelector(".clock2").addEventListener("click", clock1);
        clearInterval(clocken);

        clockto = setInterval(function(){
            time2 = time2-1;
            time = time2;
            updateTime2();
        }, 1000);
      }


      function updateTime1() {

        var min = Math.floor(time/60);
        console.log(min);
        var sec = (time - min*60)
        console.log(sec);

        if (min < 10) {
          if (sec < 10) {
             document.querySelector("#clock1").innerHTML = "0"+min+":"+"0"+sec;
          } else {
              document.querySelector("#clock1").innerHTML = "0"+min+":"+sec;
          }
        } else {
          if (sec < 10) {
             document.querySelector("#clock1").innerHTML = min+":"+"0"+sec;
          } else {
              document.querySelector("#clock1").innerHTML = min+":"+sec;
          }
        }
    }

    function updateTime2() {

      var min = Math.floor(time/60);
      console.log(min);
      var sec = (time - min*60)
      console.log(sec);

      if (min < 10) {
        if (sec < 10) {
           document.querySelector("#clock2").innerHTML = "0"+min+":"+"0"+sec;
        } else {
            document.querySelector("#clock2").innerHTML = "0"+min+":"+sec;
        }
      } else {
        if (sec < 10) {
           document.querySelector("#clock2").innerHTML = min+":"+"0"+sec;
        } else {
            document.querySelector("#clock2").innerHTML = min+":"+sec;
        }
      }
  }
