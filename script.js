document.addEventListener('DOMContentLoaded', function(){ 
    let ost = 0                                                                                                                       
    let GlobalTime = 7200
    let timerId = 0
    let CircleArr = [];
    let CircleTime = 0
    let CircleNum = 0 

    let buttonRefresh = document.getElementById("Refresh");
    let buttonCircle = document.getElementById("Circle");
    let buttonStart = document.getElementById("Start");
    let button = document.getElementById("Stop");
    let NumString = document.getElementById("NumString")
    let table = document.getElementById("NumTable")
    console.log(button)
    // button.style.display = "none";
    // buttonCircle.style.display ="none"

    buttonStart.addEventListener('click',StartTimer );
    button.addEventListener('click',StopTimer );
    buttonCircle.addEventListener('click',Circle );
    buttonRefresh.addEventListener('click',Refresh )


    function StartTimer(){
        let sec = '00', min = '00', hour = '00';
        
        function tick(){
            if(GlobalTime >= 60){
                sec = GlobalTime % 60
                ost = ((GlobalTime % 60)/60)  
                min = (GlobalTime / 60) - ost;
            }
            if(min >= 60){
                // min = GlobalTime % 60
                ost = ((GlobalTime % 3600)/3600)  
                hour = (GlobalTime / 3600) - ost;
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
            console.log(`sec: ${sec}, min: ${min}, hour: ${hour}`);
            
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
    }

    function Circle(){
        CircleNum += 1; 
        let box = {
            Time: CircleTime,
            Num: CircleNum
        };
        CircleArr.push(box);
        CircleTime = 0
    }

    function GetCircleArr(){
        console.log(CircleArr)
    }

    function Refresh(){
        clearInterval(timerId)
        GlobalTime = 0;
        CircleTime = 0;
        CircleNum = 0;
        CircleArr = [] 
    }

});

