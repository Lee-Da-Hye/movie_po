
/*이전 페이지*/
document.querySelector('.goPrevPage').addEventListener('click', ()=>{
    history.back();
    // 자세히 보기 페이지는 어느 페이지에서 사용될 지 모름 
    // location으로 이동하면 원래 사용하던 페이지로 돌아가는 것이 아니므로 
    // 이전 페이지로 돌아갈 수 있도록 해주어야 함 
})

function createDom( movie, newDom){
    let str = `
        <div class="movie-box">
            <div class="inner">
                <div class="info-box marginAuto">
                    <div class="movie-img">
                        <img src="${movie.large_cover_image}" alt="${movie.title}">
                    </div>
                    <div class="info-top">
                        <div class="detail-top">
                            <h2 class="title">${movie.title}</h2>
                            <p class="year">${movie.year}</p>
                            <p class="genres">${movie.genres}</p>
                            <p class="rating">
                                <i class='bx bxs-star'></i>
                                ${movie.rating}
                            </p>
                            <p class="like-count">
                                <i class='bx bxs-heart' ></i>
                                ${movie.like_count}
                            </p>
                            <p class="runtime">${movie.runtime}분</p>
                        </div>
                    </div>
                    <div class="reservation-wrap">
                        <div class="reservation">
                            <a href="#">예매하기</a>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        <div class="info-bottom marginAuto">
                <div class="desc">
                    <h3 class="description">줄거리</h3>
                    <p class="description-full">${movie.description_full}</p>
                </div>
        </div>
        `
    return str;
        
}

/*info에 뿌리기*/
async function loadMovieDetail(){
        const movie = await JSON.parse(localStorage.getItem('info'));
        console.log(movie);
        document.querySelector('.detail-container').innerHTML = createDom(movie);
    }
loadMovieDetail();