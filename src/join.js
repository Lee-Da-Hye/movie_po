// 가입부분 체크

function signUpCheck(){
  let email = document.getElementById("email").value
  let birth = document.getElementById("birth").value
  let name = document.getElementById("name").value
  let phone = document.getElementById("phone").value
  let password = document.getElementById("password").value
  let passwordCheck = document.getElementById("passwordCheck").value
  let check = true;

  // 이메일확인
  if(email.includes('@')){
    let emailId = email.split('@')[0]
    let emailServer = email.split('@')[1]
    if(emailId === "" || emailServer === ""){
      document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
      check = false
    }
    else{
      document.getElementById("emailError").innerHTML=""
    }
  }else{
    document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
    check = false
  }


  // 생일확인
  if(birth === ""){
    document.getElementById("birthError").innerHTML="생년월일이 올바르지 않습니다."
    check = false
  }else{
    document.getElementById("birthError").innerHTML=""
  }

  //이름 확인
  if(name === ""){
    document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
    check = false
  }else{
    document.getElementById("nameError").innerHTML=""
  }

  if(phone=== ""){
    document.getElementById("phoneError").innerHTML="휴대폰 번호가 올바르지 않습니다."
    check = false
  }else{
    document.getElementById("phoneError").innerHTML=""
  }


  // 비밀번호 확인
  if(password !== passwordCheck){
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
    check = false
  }else{
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
  }

  if(password===""){
    document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
    check = false
  }else{
    //document.getElementById("passwordError").innerHTML=""
  }
  if(passwordCheck ===""){
    document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
    check = false
  }else{
    //document.getElementById("passwordCheckError").innerHTML=""
  }

  
  
  if(check){
    document.getElementById("emailError").innerHTML=""
    document.getElementById("birthError").innerHTML=""
    document.getElementById("phoneError").innerHTML=""
    document.getElementById("nameError").innerHTML=""
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    //입력
    //비동기 처리이벤트
    setTimeout(function() {
      alert("가입이 완료되었습니다.")
      document.join_form.submit(); //유효성 검사의 포인트
  },0);
  }
  
}


//아코디언

const acTitles = document.querySelectorAll('.checkbox > span');
// const contents = document.querySelectorAll('.content');
// const bxs = document.querySelectorAll('.bx');

acTitles.forEach(function(title, index){
    title.addEventListener('click', function(){
        const content = title.parentNode.nextElementSibling; 
         //console.log(content);
        content.classList.toggle('active');

        const lastI = title.firstChild;
        console.log(lastI);

        if( lastI.classList.contains('bx-chevron-down')){
            lastI.classList.remove('bx-chevron-down');
            lastI.classList.add('bx-chevron-up');
        }else{
            lastI.classList.add('bx-chevron-down');
            lastI.classList.remove('bx-chevron-up');
        }  
    })
})

//체크동의(전체 체크박스의 개수와 선택된 체크박스의 개수를 비교)
function checkSelectAll(){
  
  //전체 체크박스
  const checkboxes = document.querySelectorAll('input[name="check"]');
  
  //선택된 체크박스
  const checked = document.querySelectorAll('input[name="check"]:checked');
  
  //chkall 체크박스
  const chkall = document.querySelector('input[name="chkall"]');

  if(checkboxes.length === checked.length){
    chkall.checked = true;
  }else{
    chkall.checked = false;
  }
}

function chkAll(chkAll){
  const checkboxes = document.getElementsByName('check');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = chkAll.checked
  })
}