// movie (openAPI)
const slideContents = document.querySelector('.slide-contents');
const moviesContents = document.querySelector('.movies-contents');

let allMovies = [];
let currentMovies = [];

const URL = 'https://yts.mx/api/v2/list_movies.json?page=1';
const url = 'https://yts.mx/api/v2/list_movies.json? page=35';


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
/*moviesContents.innerHTML = str;
slideContents.innerHTML = str;*/
const btns = document.querySelectorAll('.detail-btn');
btns.innerHTML = '상세정보';
    btns.forEach((btn)=>{
        btn.addEventListener('click', (event)=>{
            let id = event.target.id; 
            // https://yts.mx/api/v2/movie_details.json?movie_id=47548
            // dom의 버튼을 클릭하면 위 url을 만들어 주어야 함 
            let detail_URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
            console.log(detail_URL);
            searchMovies(detail_URL);  
            // 저장 늦게 하고 이동을 먼저하는 것 같음  
        })
    })
}


async function searchMovies(detail_URL){
    try{
        const movieRowData = await fetch(detail_URL).then( res=>res.json());
        const movie = await movieRowData.data.movie;
        console.log(movie);
        localStorage.setItem('info', JSON.stringify(movie));

        location.href = '/info' ;
        // 디테일 페이지 열기 
    }catch(err){
        console.log(err);
    }
}
