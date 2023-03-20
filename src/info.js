// movie (openAPI)
const slideContents = document.querySelector('.slide-contents');
const moviesContents = document.querySelector('.movies-contents');

let allMovies = [];
let currentMovies = [];

const URL = 'https://yts.mx/api/v2/list_movies.json?limit=5&page=1';
const url = 'https://yts.mx/api/v2/list_movies.json?limit=5&page=35';


fetch(URL).then(data => data.json())
.then(data =>{
    console.log(data);
    allMovies = data.data.movies.map(movie => movie);
    movieList(allMovies,moviesContents );
});

fetch(url).then(data => data.json())
.then(data =>{
    console.log(data);
    currentMovies = data.data.movies.map(movie => movie);
    movieList(currentMovies,slideContents);
})

function movieList(movies,newDom){
    let str = '';
    console.log(movies);


for(movie of movies){
    createDom(movie,newDom);
    str += createDom(movie,newDom);

}
newDom.innerHTML = str;
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

/*이전 페이지*/
async function loadMovieDetail(){
        const movie = await JSON.parse(localStorage.getItem('info'));
        console.log(movie);
        document.querySelector('.detail-container').innerHTML = createDom(movie);
    }
loadMovieDetail();

document.querySelector('.goPrevPage').addEventListener('click', ()=>{
    history.back();
    // 자세히 보기 페이지는 어느 페이지에서 사용될 지 모름 
    // location으로 이동하면 원래 사용하던 페이지로 돌아가는 것이 아니므로 
    // 이전 페이지로 돌아갈 수 있도록 해주어야 함 
})