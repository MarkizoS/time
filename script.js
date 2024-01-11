let GlobalTime = 0 
let timerId 
let CircleArr = [];
let CircleTime = 0
let CircleNum = 0 

function StartTimer(){
    let sec = '00', min = '00', hour = '00'; 
    
    let TimeStamp = 0 

    function tick(){
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
        CircleTime += 1 
    }

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

