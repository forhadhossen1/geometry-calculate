function fistCalculateArea(inputId){
    const inputText = document.getElementById(inputId);
    const inputTextString = inputText.value;
    const inputTextNumber = parseFloat(inputTextString);
    inputText.value = '';
    return inputTextNumber;
}

function secondCalculateArea(inputId){
    const inputText = document.getElementById(inputId);
    const inputTextString = inputText.value;
    const inputTextNumber = parseFloat(inputTextString);
    inputText.value = '';
    return inputTextNumber;
}

function areaResult(variable, value){
    const triangleAreaResult = document.getElementById(variable);
    triangleAreaResult.innerText = value;
}


// ..........triangle...... 

document.getElementById('triangle-btn').addEventListener('click', function(){
    const base = fistCalculateArea('base-input');
    const height = secondCalculateArea('height-input');

    const area = 0.5 * base * height;
    areaResult('triangle-result', area);
})