
// calculation triangle area
function triangleCalculation(){
   const triangleValBas = triangleInput("triangle-base");
   const triangleValHei =  triangleInput("triangle-height");
   const base = parseFloat(triangleValBas);
   const height = parseFloat(triangleValHei);
   const area = 0.5 * base * height;

   document.getElementById("display-triangle-area").innerText = area;
   triangleValBas = "";
}

function triangleInput(input){
    const baseInput = document.getElementById(input);
    const baseValue = baseInput.value
    return baseValue;
}

// calculation rectangle area

function rectangleCalculation(){
    const triangleValBas = triangleInput("rectangle-width");
    const triangleValHei =  triangleInput("rectangle-length");
    const base = parseFloat(triangleValBas);
    const height = parseFloat(triangleValHei);
    const area = base * height;
 
    document.getElementById("display-rectangle-area").innerText = area;
    triangleValBas = "";
 }
 
 function rectangleInput(input){
     const baseInput = document.getElementById(input);
     const baseValue = baseInput.value
     return baseValue;
 }
