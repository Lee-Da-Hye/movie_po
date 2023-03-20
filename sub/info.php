
    
    <section class="detail-wrap">
        <div class="detail-container">
        </div>
    </section>

    <button class="goPrevPage"><i class='bx bx-left-arrow-circle'></i></button>
    <script>
        async function loadMovieDetail(){
        const movie = await JSON.parse(localStorage.getItem('info'));
        console.log(movie);
        document.querySelector('.detail-container').innerHTML = createDom(movie);
    }
    loadMovieDetail();
    </script>
    <script src="/src/info.js?<?=time()?>"></script>
    <script src="/src/main.js?<?=time()?>"></script>
