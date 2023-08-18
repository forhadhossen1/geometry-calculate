function fistCalculateArea(inputId){
    const inputText = document.getElementById(inputId);
    const inputTextString = inputText.value;
    const inputTextNumber = parseFloat(inputTextString);
    inputText.value = '';
    return inputTextNumber;
}

///////// duita function  ake a jonno j kono akta function k duita input a call kora jabe tatei kaj korbe amra duita darao call korse akta darrao call korse..

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

//........rectangle........

function rectangleCalculate(){
    const weight = fistCalculateArea('weight-input');
    const length = secondCalculateArea('length-input');

    const area = weight * length;
    areaResult('rectangle-result', area)
}

// ....... parallelogram ...... 

function parallelogramCalculate(){
    const base = fistCalculateArea('pbase-input');
    const height = fistCalculateArea('pheight-input');

    const area = base * height;
    areaResult('parallelogram-result', area);
}

// ...... rhombus..... 

function rhombusCalculate() {
    const side1 = fistCalculateArea('1side-input');
    const side2 = fistCalculateArea('2side-input');

    const area = 0.5 * side1 * side2;
    areaResult('rhombus-result', area);
}

// ........ pentagon........ 

function pentagonCalculate() {
    const pside = fistCalculateArea('p-input');
    const bside = fistCalculateArea('b-input');

    const area = 0.5 * pside * bside;
    areaResult('pentagon-result', area);
}