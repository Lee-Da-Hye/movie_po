const mypgBtn = document.querySelectorAll('.mypg-btn')
const myPg = document.querySelectorAll('.mypg')
        
        mypgBtn.forEach((btn, idx)=> {
        btn.addEventListener('click', function(){
                myPg.forEach((page)=> {
                    page.classList.remove('active')
                })
        
                mypgBtn.forEach((item)=> {
                    item.classList.remove('active')
                })
        
                mypgBtn[idx].classList.add('active')
                myPg[idx].classList.add('active')
            })
        })
        mypgBtn[0].click();
        myPg[0].click();
        
        
        //예매
        function reserveCheck(){
            let birth = document.getElementById("birth").value
            let name = document.getElementById("name").value
            let phone = document.getElementById("phone").value
            let password = document.getElementById("password").value
            let passwordCheck = document.getElementById("passwordCheck").value
            let check = true;

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
              document.getElementById("birthError").innerHTML=""
              document.getElementById("phoneError").innerHTML=""
              document.getElementById("nameError").innerHTML=""
              document.getElementById("passwordError").innerHTML=""
              document.getElementById("passwordCheckError").innerHTML=""
              //입력
              //비동기 처리이벤트
              setTimeout(function() {
                document.reserve_form.submit(); //유효성 검사의 포인트
            },0);
            }
            
          }

          //밑줄
          let labels = document.querySelectorAll('.mypgResv');
          console.log(labels);

          labels.forEach((label, index)=>{
              label.addEventListener('click', ()=>{
                  for(label of labels){
                      label.classList.remove('active');
                  }
                  labels[index].classList.add('active');
              })
          })
          labels[0].click();