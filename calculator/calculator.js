
let numberChecked = false; //입력내용이 연산자일 때로 초기화
                           //add(X)함수의 지역변수로 둘 경우 add(x)함수 실행때 마다 입력내용이 연산자 일때로 초기화
                           //전역변수로 사용
function calculator() {
  let cal = document.getElementById('cal');
  let result = eval(cal.value); //eval()함수는 문자열을 코드로 인식
  document.getElementById('result').value = result;  
}

function add(x) {

  let cal = document.getElementById('cal');
  
  if (numberChecked == false) { //연산자로 우선 입력한 경우
    if (isNaN(x) == true) { //다시 연산자로 입력한 경우
      alert("숫자를 입력해주세요.");
    }
    else {
      cal.value += x; //연산자 다음 숫자를 입력한 경우
      console.log(cal.value);
    }
  } 
  else {
    cal.value += x; //숫자를 우선 입력한 경우 연산자나 숫자를 입력할 수 있음
    console.log(cal.value+"  "+"숫자를 우선 입력한 경우");
  }
  
  if (isNaN(x) == true) { //입력내용이 연산자일 때 
    numberChecked = false; //연산자임을 구분
  } 
  else {
    numberChecked = true; //입력내용이 숫자일 때 숫자로 구분
  }
  

}

function reset() {
  document.getElementById('cal').value = "";
  document.getElementById('result').value = "";
}





