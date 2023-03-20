    <section class="detail-wrap">
        <div class="detail-container">
        </div>
    </section>

    <button class="goPrevPage">
        <i class='bx bx-left-arrow-circle'>
        </i>
    </button>
    <script>
        document.querySelector('.goPrevPage').addEventListener('click', ()=>{
    history.back();
    // 자세히 보기 페이지는 어느 페이지에서 사용될 지 모름 
    // location으로 이동하면 원래 사용하던 페이지로 돌아가는 것이 아니므로 
    // 이전 페이지로 돌아갈 수 있도록 해주어야 함 
})
    </script>
    <script src="/src/info.js?<?=time()?>"></script>
