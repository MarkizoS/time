document.addEventListener('DOMContentLoaded', function(){ 
    let ost = 0                                                                                                                       
    let GlobalTime = 0
    let timerId = null
    let CircleArr = [];
    let CircleTime = 0
    let CircleNum = 1
    let osth = 0 
    let hasStart = false
    let buttonRefresh = document.getElementById("Refresh");
    let buttonCircle = document.getElementById("Circle");
    let buttonStart = document.getElementById("Start");
    let button = document.getElementById("Stop");
    let NumString = document.getElementById("NumString")
    let Table = document.getElementById("NumTable")
    
    StringDiv.style.display = "none"
    buttonStart.addEventListener('click',StartTimer,);
    button.addEventListener('click',StopTimer );
    buttonCircle.addEventListener('click',Circle );
    buttonRefresh.addEventListener('click',Refresh )
    
    button.style.display = "none";
    buttonRefresh.style.display = "none";

    let millisec = '00' 
    let sec = GlobalTime
    let min = '00' 
    let hour = '00'
    
    let switchButton1 = document.getElementById("switchButton1");
    let switchButton2 = document.getElementById("switchButton2");

    switchButton1.addEventListener("click", function() {
        TimeString.style.display = "none"
        StringDiv.style.display = "block"
    });

    switchButton2.addEventListener("click", function() {
        TimeString.style.display = "block"
        StringDiv.style.display = "none"
    });

    function StartTimer(){
    
        GlobalTime = sec + min * 60 + hour * 3600;
        
            function rotateHand() {
            let milliseconds = millisec
            let minute = min + (sec / 30);
            let seconds = sec * 1000 + milliseconds;
            let degrees = ((seconds / 60000) * 360);
            let minuteDegrees = ((minute / 60) * 360);
            biggestStrelka.style.transform = `rotate(${degrees}deg)`;
            littlestStrelka.style.transform = `rotate(${minuteDegrees}deg)`;
            }
          setInterval(rotateHand, 1);

            if(GlobalTime >= 60){
                sec = GlobalTime % 60
                ost = (GlobalTime % 60)/60 
                min = (GlobalTime / 60) - ost;
            }
            if(min >= 60){
                osth = (GlobalTime % 3600)/3600  
                hour = (GlobalTime / 3600) - osth
                min = +min - 60
            }
            if( sec < 10 ){
                sec = '0' + sec; 
            }
            
            buttonRefresh.style.display = "none";
            buttonStart.style.display = "none";
            buttonCircle.style.display = "";
            button.style.display = "";
            
            if (hasStart) {
                return;
            }
            
            hasStart = true;

            function tick(){

                millisec = +millisec + 10;

                if (millisec >= 1000) {
                    millisec = 0;
                    sec = +sec + 1;
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
                document.getElementById("NumString").innerHTML = `${Math.ceil(hour)}:${Math.ceil(min)},${Math.ceil(sec)},${Math.ceil(millisec)}`;
                document.getElementById("NumString1").innerHTML = `${Math.ceil(hour)}:${Math.ceil(min)},${Math.ceil(sec)},${Math.ceil(millisec)}`;
            
            }
           
            timerId = setInterval(tick ,10);
    }
    
    function StopTimer(){
        button.style.display = "none";
        buttonCircle.style.display = "none";
        buttonStart.style.display = "";
        buttonRefresh.style.display = "";
        clearInterval(timerId);
        hasStart = false
        littlestStrelka.style.animationPlayState = 'paused';
        biggestStrelka.style.animationPlayState = 'paused';
    }

    function Circle(){
        
        let sum = 0;
    
        CircleTime = sec + min * 60 + hour * 3600;

        for (let i = 0; i < CircleArr.length; i++){
            sum += +CircleArr[i].Time;
        }
        
        let box = {
            Time: CircleTime - sum,
            Num: CircleNum,
        };
        
        CircleArr.push(box);
        
        let newRow = Table.insertRow(0)
        let newCellCircleName = newRow.insertCell(0)
        let newCellClear = newRow.insertCell(0)
        let newCellCircleTime = newRow.insertCell(0)
        let newTextCircleName = document.createTextNode(`${box.Time}, ${(millisec - sum)} секунд`);
        let newTextCircleTime = document.createTextNode(`Круг ${CircleNum}`);
        let newTextClear = document.createTextNode(``)

        newCellCircleName.appendChild(newTextCircleName)
        newCellCircleTime.appendChild(newTextCircleTime)
        newCellClear.appendChild(newTextClear)

        document.getElementById("Circle").innerHTML
        hasStart = true
        CircleNum += 1; 
    }
    
    function Refresh(){
        clearInterval(timerId)
        sec = 0;
        min = 0;
        hour = 0;
        millisec = '00';
        document.getElementById("NumString").innerHTML = `0:0,00,000`
        document.getElementById("NumString1").innerHTML = `0:0,00,000`
        CircleArr.splice(0, CircleArr.length);
        GlobalTime = 0;
        CircleTime = 0;
        CircleNum = 0;
        hasStart = false 
        document.getElementById("NumTable").innerHTML = `` 
        biggestStrelka.style.animation = "";
        littlestStrelka.style.animation = "";
    }

})
