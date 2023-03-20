
    <section class="section1">
            <div class="slide slide_wrap">
                    <div class="slide_item item1">
                        <img src="/images/movie1.png" alt="페르시아어 수업">
                    </div>
                    <div class="slide_item item2">
                        <img src="/images/movie2.png" alt="아바타 물의 길">
                    </div>
                    <div class="slide_item item3">
                        <img src="/images/movie3.png" alt="크리스마스 캐럴">
                    </div>
                <div class= "slide_prev_button slide_button" href="#"><i class='bx bxs-chevrons-left'></i></div>
                <div class="slide_next_button slide_button" href="#"><i class='bx bxs-chevrons-right' ></i></div>
                <ul class="slide_pagination"></ul>
            </div>    
    </section>
    <section class="section2 marginAuto">
        <div class="movie-container">
            <div class="plus">
                <h2>영화 목록</h2>
                <div>
                    <a href="/movie"><i class='bx bx-plus'></i></a>
                </div>
            </div>
            
            <div class="movies-contents">
            
            </div>
            
        </div>
    </section>
    <section class="section3 marginAuto">
        <div class="slide-container">
            <div class="plus">
                <h2>추천 목록</h2>
                <div>
                    <a href="/movie"><i class='bx bx-plus'></i></a>
                </div>
            </div>
            <div class="slide-contents">

            </div>
        </div>
    </section>
    
    
    <script src="/script/index.js"></script>
    <script src="/script/common.js"></script>
    <script src="/script/createDom.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // document.cookie : 문자열 
            if (document.cookie.includes('ok')) {
                alert('로그인');
                // 도큐먼트에 '아이디' 찍어서 표시해야함 
            }
            console.log(document.cookie.includes('ok'))
            
        })
        /*document.cookie = 'login=ok; expires=0';*/

        // 로그아웃 : 쿠키 삭제  expires=0
        // document.cookie = 'login=ok;expires=0';
    </script>

</body>
</html>