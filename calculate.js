// .....addEventListener FileSystem. ... and function system  ...... 

document.getElementById('triangle-btn').addEventListener('click', function(){
    const baseInput = document.getElementById('base-input');
    const inputBaseString = baseInput.value;
    const inputBase = parseFloat(inputBaseString);
    baseInput.value = '';
    

    const heightInput = document.getElementById('height-input');
    const inputHeightString = heightInput.value;
    const inputHeight = parseFloat(inputHeightString);
    heightInput.value = '';

    const area = 0.5 * inputBase * inputHeight;
    
    const triangleAreaResult = document.getElementById('triangle-result');
    triangleAreaResult.innerText = area;
})


function rectangleCalculate(){
    const weightInput = document.getElementById('weight-input');
    const inputWeightString = weightInput.value;
    const inputWeight = parseFloat(inputWeightString);
    weightInput.value = '';

    const lengthInput =document.getElementById('length-input');
    const inputLengthString = lengthInput.value;
    const inputLength = parseFloat(inputLengthString);
    lengthInput.value = '';

    const area = inputWeight * inputLength;

    const rectangleAreaResult = document.getElementById('rectangle-result');
    rectangleAreaResult.innerText = area;
}