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

    buttonStart.addEventListener('click',StartTimer );
    button.addEventListener('click',StopTimer );
    buttonCircle.addEventListener('click',Circle );
    buttonRefresh.addEventListener('click',Refresh )

    button.style.display = "none";
    buttonRefresh.style.display = "none";

    let sec = GlobalTime
    let min = '00' 
    let hour = '00'
    
    function StartTimer(){

        buttonRefresh.style.display = "none";
        buttonStart.style.display = "none";
        buttonCircle.style.display = "";
        button.style.display = "";
        
        if (hasStart) {
            return;
          }

        hasStart = true;
        
        function tick(){

            let sec = GlobalTime

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
            
            document.getElementById("NumString").innerHTML = `${Math.ceil(hour)}:${Math.ceil(min)},${sec}`;
            
            GlobalTime += 1;
            CircleTime += 1;

        }
        
        timerId = setInterval(tick ,1000);
    }

    function StopTimer(){
        button.style.display = "none";
        buttonCircle.style.display = "none";
        buttonStart.style.display = "";
        buttonRefresh.style.display = "";
        clearInterval(timerId);
        hasStart = false
    }

    function Circle(){
    
        let sum = 0;
        for (let i = 0; i < CircleArr.length; i++){
            sum += +CircleArr[i].Time;
            
        }
     
        let box = {
            Time: CircleTime - sum,
            Num: CircleNum
        };
        
        CircleArr.push(box);
        
        let newRow = Table.insertRow(0)
        let newCellCircleName = newRow.insertCell(0)
        let newCellClear = newRow.insertCell(0)
        let newCellCircleTime = newRow.insertCell(0)
        let newTextCircleName = document.createTextNode(`${box.Time} Секунд`)
        let newTextClear = document.createTextNode(``)
        let newTextCircleTime = document.createTextNode(`Круг ${CircleNum}`)

        newCellCircleName.appendChild(newTextCircleName)
        newCellCircleTime.appendChild(newTextCircleTime)
        newCellClear.appendChild(newTextClear)

        document.getElementById("Circle").innerHTML
        hasStart = true
        CircleNum += 1; 
    }

    function Refresh(){
        clearInterval(timerId)
        document.getElementById("NumString").innerHTML = `0:0,00`
        CircleArr.splice(0, CircleArr.length);
        GlobalTime = 0;
        CircleTime = 0;
        CircleNum = 0;
        hasStart = false 
        document.getElementById("NumTable").innerHTML = `` 
    }
    
});

// function Test (){
//     let obj = {
//         hello:"q",
//         0:"q2"
//     }
//     let arr4 = [
//         "q3", 
//         "q4"
//     ]
//     let arr3 = [
//         "q2", 
//         "q3", 
//         arr4 
//     ]
//     let arr = [
//         "q", 
//         arr3,
//         obj,
//         Test2
//     ]
//     arr[3]()
//     let arr2 = ["q1", "q2", "q3"]
//     console.log(obj["hello"],obj.hello,obj[0])
//  } 
//  function Test2 (){
//     console.log("Test2")
//     }