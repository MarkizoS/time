document.addEventListener('DOMContentLoaded', function(){ 
    let ost = 0                                                                                                                       
    let GlobalTime = 0
    let timerId = null
    let CircleArr = [];
    let CircleTime = 0
    let CircleNum = 0
    let osth = 0 
    let hasStart = false
  

    let buttonRefresh = document.getElementById("Refresh");
    let buttonCircle = document.getElementById("Circle");
    let buttonStart = document.getElementById("Start");
    let button = document.getElementById("Stop");
    let NumString = document.getElementById("NumString")
    let table = document.getElementById("NumTable")
    console.log(button)

    buttonStart.addEventListener('click',StartTimer );
    button.addEventListener('click',StopTimer );
    buttonCircle.addEventListener('click',Circle );
    buttonRefresh.addEventListener('click',Refresh )

    
    function StartTimer(){
        
        let sec = GlobalTime
        min = '00'
        hour = '00';
        
        if (hasStart) {
            return;
          }

        hasStart = true;

        function tick(){
            if(GlobalTime >= 60){
                sec = GlobalTime % 60
                ost = ((GlobalTime % 60)/60)  
                min = (GlobalTime / 60) - ost;
                min = +min - 60
            }
            if(min >= 60){
                osth = (GlobalTime % 3600)/3600  
                hour = (GlobalTime / 3600) - osth
                min = +min - 60 
            }
            sec = +sec +1;
            if( sec < 10 ) {
                sec = '0' + sec; 
            }
            if( sec == 60 ) {
                sec = '00';
                min = +min + 1;
                if( min < 10 ) { 
                    min = '0' + min; 
                }
                if( min == 60 ) {
                    min = '00';
                    hour = +hour + 1;
                    if( hour < 10 ) {
                        hour = '0' + hour; 
                    }
                }
               
            }
            console.log(`sec: ${sec}, min: ${Math.ceil(min)}, hour: ${Math.ceil(hour)}`);
            
            document.getElementById("NumString").innerHTML = `${Math.ceil(hour)}:${Math.ceil(min)},${sec}`;

            GlobalTime += 1;
            CircleTime += 1;

            console.log(`GlobalTime:${GlobalTime}`)
            
        }
        console.log(sec)
        timerId = setInterval(tick ,1000);
        
        
    }

    function StopTimer(){
        console.log(GlobalTime);
        clearInterval(timerId);
        hasStart = false
    }

    function Circle(){
        console.log(CircleArr)
        document.getElementById("Circle").innerHTML
        hasStart = true
        CircleNum += 1; 
        let box = {
        Time: CircleTime,
        Num: CircleNum
        };
        CircleTime = GlobalTime
        CircleArr.push(box);
    }
    

    function Refresh(){
        clearInterval(timerId)
        document.getElementById("NumString").innerHTML = `0:0,00`
        GlobalTime = 0;
        CircleTime = 0;
        CircleNum = 0;
        CircleArr = []
        hasStart = false 
    }
    
});

