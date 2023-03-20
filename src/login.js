
window.addEventListener("load", function() {
var elUserid = document.getElementById("username");
console.log(elUserid);
var elUserpwd = document.getElementById("userpwd");

//elUserid에 focus
elUserid.focus();

elUserid.addEventListener("keyup", function(e) {
  //keycode를 확인해야함.
  var keycode = e.which || e.keyCode;
  //'enter'입력 시
  if(keycode == 13) {
    //값 저장
    var userid = e.currentTarget.value;
    if(userid) {
      //값이 있으면 true이므로 elUserpwd에 focus
      elUserpwd.focus();
    } else {
      e.currentTarget.style.backgroundColor = "#ff0";
      //입력을 다시 시작하면 이벤트 발생
      e.currentTarget.addEventListener("keydown", function(e) {
        e.currentTarget.style.backgroundColor = "transparent";
      }, {
        //한 번만 처리.
        once: true
      });
    }
    
  }
});

elUserpwd.addEventListener("keyup", function(e) {
  var keycode = e.which || e.keyCode;
  if(keycode == 13) {
    var userpwd = e.currentTarget.value;
    if(userpwd) {
      alert("로그인 했습니다.");
    } else {
      e.currentTarget.style.backgroundColor = "#ff0";
      e.currentTarget.addEventListener("keydown", function(e) {
        e.currentTarget.style.backgroundColor = "transparent";
      }, {
        once: true
      });
    }	

  }
});
});