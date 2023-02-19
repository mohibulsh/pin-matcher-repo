

function mathRandomProduce (){
    const mathRandomResult = Math.round(Math.random()*10000);
    return mathRandomResult;
    // console.log(mathRandomResult);
}
  
function getPinRandom (){
    const getPin = mathRandomProduce();
    const isGetPinDigit = getPin/1000;
    if(isGetPinDigit > 1){
        return isGetPinDigit*1000;
        // console.log('4 digit')
    } else{
        // console.log('pin not 4 digit')
        return getPinRandom();
    }
}

document.getElementById('pin-btn').addEventListener('click',function(){
    
     const pinField = document.getElementById('pin-field');
     pinField.value = getPinRandom();  
})

// inpt-text-btn javascript

document.getElementById('inpt-text-btn').addEventListener('click',function(event){
    const calculateValue = event.target.innerText;
    const calculateField = document.getElementById('calculate-field');
    const calculatePreValue = calculateField.value ;
    if(isNaN(calculateValue)){
        if(calculateValue === 'C'){
           calculateField.value = ''; 
        }
        else{
            const digitArray = calculatePreValue.split('');
            digitArray.pop();
            const digitArrayJoin = digitArray.join('');
            calculateField.value = digitArrayJoin;
        }
    }
    else{ 
        
        const calculateNewValue = calculatePreValue + calculateValue;
        calculateField.value = calculateNewValue;
    }
})

// submit button

document.getElementById('pin-matched-submit').addEventListener('click',function(){
        const pinField = document.getElementById('pin-field');
        const getDisplayPin = pinField.value;

        const calculateField = document.getElementById('calculate-field');
        const calculateVale = calculateField.value;

        const matchedUnSuccess = document.getElementById('matched-unsuccess');
        const matchedSuccess = document.getElementById('matched-success');

         if(getDisplayPin === calculateVale ){
            matchedSuccess.style.display ='block';
            matchedUnSuccess.style.display ='none';
        } else{
            matchedUnSuccess.style.display ='block';
            matchedSuccess.style.display ='none';  
        }
})