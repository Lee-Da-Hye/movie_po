
    <section class="mypg-container">
        <!-- ul, button, a, span -->
        <ul class="mypg-btns">
            <li class="mypg-btn">회원 로그인</li>
            <li class="mypg-btn">비회원 예매 및 확인</li>
        </ul>
        <div class="mypg-tab-contents">
            <div class="mypg mypg1">
                <div class="userId">
                    <p>아이디</p>
                    <input type="text" name="userId" id="userId" class="userId">
                    <div id="userIdError" class="error"></div>
                </div>
                <div class="userPw">
                    <p>비밀번호</p>
                    <input type="password" name="userPw" id="userPw" class="userPw">
                    <div id="userPwError" class="error"></div>
                </div>
                <label class="mypg-IdSv">
                    <input type="checkbox" name="IdSv" id="IdSv" class="IdSv">
                    <span>아이디 저장</span>
                </label>
                <div class="mypg-login">
                    <button>로그인</button>
                </div>
                <div class="mypg-find">
                    <span><a href="#">아이디/비밀번호찾기 |</a></span>
                    <span><a href="/join">회원가입</a></span>
                </div>
            </div>
            <div class="mypg mypg2">
                <input type="radio" id="mypgResv-tab1" name="mypgResv-tab" class="mypgResv-tab" checked>
                <input type="radio" id="mypgResv-tab2" name="mypgResv-tab" class="mypgResv-tab">
                <ul>
                    <li>
                        <label for="mypgResv-tab1" class="mypgResv">예매</label>
                    </li>
                    <li>
                        <label for="mypgResv-tab2" class="mypgResv">예매확인
                        </label>
                    </li>
                </ul>
                    <div class="personal-info">
                        <form name="reserve_form">
                        <div class="name">
                            <p>이름</p>
                            <input type="text" id="name" placeholder="이름 입력">
                            <div id="nameError" class="error"></div>
                        </div>
                        <div class="birth">
                            <p>생년월일</p>
                            <input type="text" id="birth" maxlength="8" placeholder="생년월일 8자리(19960709)">
                            <div id="birthError" class="error"></div>
                        </div>
                        <div class="phone telbtn">
                            <p>휴대폰번호</p>
                            <input id="phone" type="text" maxlength="11" placeholder="-없이 휴대폰번호 입력">
                            <button>인증요청</button>
                            <div id="phoneError" class="error"></div>
                        </div>
                        <div class="password">
                            <p>비밀번호</p>
                            <input type="password" id="password" placeholder="비밀번호 입력">
                            <div id="passwordError" class="error"></div>
                        </div>
                        <div class="passwordCheck">
                            <p>비밀번호 확인</p>
                            <input type="password" id="passwordCheck" placeholder="비밀번호입력 확인">
                            <div id="passwordCheckError" class="error"></div>
                        </div>
                            <div class="terms">
                                <div class="t1">
                                    [개인정보 수집 및 이용동의]
                                </div>
                                <div class="t2">
                                    수집 목적: 영화 예매서비스 제공<br>
                                    수집 항목: 이름, 생년월일, 휴대폰번호<br>
                                    비밀번호 보유 및 이용기간: 예매 후 6개월<br>
                                </div>
                            </div>
                            <div class="consent">
                                <label>
                                    <input type="radio" name="check" id="check1" checked>
                                    <span>동의 </span>
                        
                                </label>
                                <label>
                                    <input type="radio" name="check" id="check2">
                                    <span>동의안함 </span>
                                </label>
                            </div>
                            <div class="resev">
                                <button type="button" onclick="reserveCheck()">비회원 예매</button>
                            </div>
                        </form>
                    </div>
                
                <div class="resev-info">
                    <form name="reserve_form">
                        <div class="name">
                            <p>이름</p>
                            <input type="text" id="name" placeholder="이름 입력">
                            <div id="nameError" class="error"></div>
                        </div>
                        <div class="birth">
                            <p>생년월일</p>
                            <input type="text" id="birth" maxlength="8" placeholder="생년월일 8자리(19960709)">
                            <div id="birthError" class="error"></div>
                        </div>
                        <div class="phone">
                            <p>휴대폰번호</p>
                            <input id="phone" type="text" maxlength="11" placeholder="-없이 휴대폰번호 입력">
                            <div id="phoneError" class="error"></div>
                        </div>
                        <div class="password">
                            <p>비밀번호</p>
                            <input type="password" id="password" placeholder="비밀번호 입력">
                            <div id="passwordError" class="error"></div>
                        </div>
                        <div class="resev">
                            <button type="button">비회원 예매확인</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <script src="/src/myPage.js?<?=time()?>"></script>