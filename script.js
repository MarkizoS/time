function time(){
    let sec = '58', min = '59', hour = '00'; 
    
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
    }
    
    let timerId = setInterval(tick ,1000);

    function stop(){
        clearInterval(timerId);
    }
    
}


