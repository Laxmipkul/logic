
// let btns = document.querySelectorAll('.btns');

// btns.forEach(function(btn) {
//   btn.addEventListener('click', function() {
//     console.log(btn.textContent);
//   });
// });

// let add = document.querySelector('.add');
// let sub = document.querySelector('.sub');
// let  mul= document.querySelector('.multi');
// let div = document.querySelector('.div');

// let result = document.querySelector('.result');
// let num1 = document.querySelector('.input1');
// let num2 = document.querySelector('.input2');
// let h1 = document.querySelector('h1');

// num1.addEventListener('input', function() {
//   h1.textContent = `Result: ${num1.value}`;
// });

function cal(inpu){
  if( inpu < 1){
    throw new Error( "Input must be greater than or equal to 1");
  }
  const str = inpu.toString();
  const arr = str.split('');

  arr.forEach(function(num) {
    console.log
   
  } )

}

cal(1234); // This will log each digit of the number 1234



