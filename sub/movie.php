    <section class="section2 marginAuto">
        
        <input type="radio" id="movie-tab1" name="movie-tab" class="movie-tab">
        <input type="radio" id="movie-tab2" name="movie-tab" class="movie-tab">
        <ul>
            <li>
                <label for="movie-tab1">영화 목록</label>
            </li>
            <li>
                <label for="movie-tab2">추천 영화 목록</label>
            </li>
            <li class="input-container">
                <div class="input-box">
                    <input type="text" id="userInput" placeholder="영화명을 입력해주세요">
                    <i class='bx bx-search-alt'></i>
                </div>
            </li>
        </ul>
        
        <div class="movie-container">
            <!-- <h2>영화 목록</h2> -->
            <div class="movies-contents"></div>
        </div>
        <div class="slide-container">
            <!-- <h2>추천 영화 목록</h2> -->
            <div class="slide-contents"></div>
        </div>
    </section>
    <script src="/src/movie.js?<?=time()?>"></script>