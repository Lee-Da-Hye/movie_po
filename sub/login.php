
  
  <section class="movie-login">
      <div class="login-container maginAuto">
        <div class="login-box">
          <h1>Login</h1>
          <div>
            <label for="username"></label>
            <input type="text" id="username" name="username" placeholder="아이디" autocomplete="off">
          </div>
          <div>
            <label for="userpwd"></label>
            <input type="password" id="userpwd" name="userpwd" placeholder="비밀번호">
          </div>
          <div class="ck">
            <input type="checkbox" id="checkbox" checked>
            <label for="checkbox">로그인 상태 유지</label>
          </div>
          <div>
            <button class="loginbtn">로그인</button>
          </div>
          <div class="registerbtn">
            <span><a href="/?sub=join" class="no-line">회원가입 </a></span>
            <span><a href="#">ID 찾기</a></span>
            <span><a href="#">비밀번호 찾기</a></span>
          </div>
          <div class="line"></div>
          <div class="platform-loginbtn">
            <button class="facebook">Facebook 로그인</button>
            <button class="google">Google 로그인</button>
            <button class="naver">Naver 로그인</button>
            <button class="apple">Apple 로그인</button>
          </div>
      </div>
      </div>
    
  </section>

  <script src="/src/login.js?<?=time()?>"></script>