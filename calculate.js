document.getElementById('triangle-btn').addEventListener('click', function(){
    const baseInput = document.getElementById('base-input');
    const inputBaseString = baseInput.value;
    const inputBase = parseFloat(inputBaseString);
    

    const heightInput = document.getElementById('height-input');
    const inputHeightString = heightInput.value;
    const inputHeight = parseFloat(inputHeightString);

    const area = 0.5 * inputBase * inputHeight;
    
    const triangleAreaResult = document.getElementById('triangle-result');
    triangleAreaResult.innerText = area;
})