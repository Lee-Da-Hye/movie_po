// movie (openAPI)
const slideContents = document.querySelector('.slide-contents');
const moviesContents = document.querySelector('.movies-contents');
const userInput = document.querySelector('#userInput');
const bx = document.querySelector('.bx');
const inputBox = document.querySelector('.input-box');
inputBox.addEventListener('mouseenter', () => {
    inputBox.classList.add('active');
})
let allMovies = [];
let currentMovies = [];

const URL = 'https://yts.mx/api/v2/list_movies.json?page=1';
const url = 'https://yts.mx/api/v2/list_movies.json? page=15';


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

//검색창
userInput.addEventListener('keyup', (event) => {
    console.log(event.target.value);
    let searchText = event.target.value.toUpperCase();

    if (searchText) {
        const h3s = document.querySelectorAll('h3');
        for (h3 of h3s) {
            let h3Text = h3.innerHTML.toUpperCase();
            if (!h3Text.includes(searchText)) {
                h3.parentElement.parentElement.style.display = 'none';
            } else {
                h3.parentElement.parentElement.style.display = '';
            }
        }
        bx.classList.remove('bx-search-alt');
        bx.classList.add('bx-x-circle');
    } else {
        movieList(currentMovies,slideContents);
        movieList(allMovies,moviesContents );
    }

})

userInput.addEventListener('focus', (event) => {
    inputBox.classList.add('active');
})

// 수정 : 한번에 처리하도록 제어 
userInput.addEventListener('blur', () => {
    userInput.value = '';
    bx.classList.add('bx-search-alt');
    bx.classList.remove('bx-x-circle');

    /*if( !window.innerWidth<=780 ){
        bx.removeEventListener();
        // 이벤트를 필요 없을 때 지움
   }*/
     inputBox.classList.remove('active');
     //newDom.innerHTML = str;
     movieList(currentMovies,slideContents);
     movieList(allMovies,moviesContents );
})

 
bx.addEventListener('click', () => {
    bx.classList.add('bx-search-alt');
    bx.classList.remove('bx-x-circle'); 
    userInput.value = '';
    
    /*if( !window.innerWidth<=780 ){
         bx.removeEventListener();
    }*/
    //newDom.innerHTML = str;
    movieList(currentMovies,slideContents);
    movieList(allMovies,moviesContents );
})
function movieList(movies,newDom){
    let str = '';
    //console.log(movies);


for(movie of movies){
    createDom(movie,newDom);
    str += createDom(movie,newDom);

}
newDom.innerHTML = str;

/*moviesContents.innerHTML = str;
slideContents.innerHTML = str;*/
const btns = document.querySelectorAll('.detail-btn');
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

        location.href = '/?sub=info' ;
        // 디테일 페이지 열기 
    }catch(err){
        console.log(err);
    }
}

/*createDom*/
function createDom( movie, newDom){
    let str = `
        <div class="movie-box">
            <div class="movie-img"><img src="${movie.medium_cover_image}" alt="${movie.title}" title = "${movie.summary}"></div>
            <div class="movie-details">
                <h3 class="title">${movie.title}</h3>
            </div>       
            <div class="flex">
                <button id="${movie.id}" class='detail-btn'>영화정보</button>
                <span class="reservation"><a href="#">예매하기</a></span>
            </div>
        </div>

        `
    return str;
        
}


//밑줄
let labels = document.querySelectorAll('label');
console.log(labels);

labels.forEach((label, index)=>{
    label.addEventListener('click', ()=>{
        for(label of labels){
            label.classList.remove('active');
        }
        labels[index].classList.add('active');
    })
})
labels[0].click();