 
const moviesContents = document.querySelector('.movies-contents');
const userInput = document.querySelector('#userInput');
const bx = document.querySelector('.bx');
const genreContainer = document.querySelector('.genre-container');

let allMovies = [];
const URL = 'https://yts.mx/api/v2/list_movies.json';
fetch(URL).then(data => data.json())
.then(data => {  
    allMovies = data.data.movies.map(movie => movie);
    movieList(allMovies , moviesContents);
    // 영화목록
})

const slideContainer = document.querySelector('.slide-container');
const currentURL = 'https://yts.mx/api/v2/movie_suggestions.json?movie_id=10';
let  currentMovies = [];
fetch(URL).then(data => data.json())
.then(data => {  
    console.log(data.data.movies);
    currentMovies = data.data.movies.map(movie => movie);
    movieList(currentMovies, slideContainer);
    // 신착영화 : 값을 가져오는지 확인만 함 
})

    // 검색어 입력창 
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
        moviesContents.innerHTML = '';
        movieList(allMovies);
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

    if( !window.innerWidth<=780 ){
        bx.removeEventListener();
        // 이벤트를 필요 없을 때 지움
   }
     inputBox.classList.remove('active');
    
    moviesContents.innerHTML = '';
    movieList(allMovies);
})

 
bx.addEventListener('click', () => {
    bx.classList.add('bx-search-alt');
    bx.classList.remove('bx-x-circle'); 
    userInput.value = '';
    
    if( !window.innerWidth<=780 ){
         bx.removeEventListener();
    }
    
    moviesContents.innerHTML = '';
    movieList(allMovies);
})


function movieList(movies, newDom) {
    console.log(movies);

    for (movie of movies) {
        createDom(movie, newDom);
    }
}

function validate(value){
    return !!value;
    // undefined, NaN, Null, 0 : false
}

function createDom(movie , newDom ) {
    const movieBox = document.createElement('div');
    movieBox.classList.add('movie-box');

    const movieImg = document.createElement('div');
    movieImg.classList.add('movie-img');

    const img = document.createElement('img');
    
    // 데이터가 비정상적일때 처리 
    if(validate(movie.large_cover_image)){
        img.setAttribute('src', movie.large_cover_image);
    }else{
        console.log( '이미지 준비중입니다.');
    }
    
    img.setAttribute('title', movie.summary);

    movieImg.append(img);
    movieBox.append(movieImg);

    const movieDetails = document.createElement('div');
    movieDetails.classList.add('movie-details');

    const h3 = document.createElement('h3');
    //h3.innerHTML =  movie.title.length >= 20 ? `${movie.title.slice(0, 20)}...` : movie.title;
    h3.innerHTML = movie.title; // css로 제어하기 
    movieDetails.append(h3);  
    movieBox.append(movieDetails);

    const genreBox = document.createElement('div');
    genreBox.classList.add('genres');

    const genres = movie.genres;
    // let genreText = genres.reduce( (prev, next )=> prev.concat(next) );
    let genreText = genres.join(', ');
    //console.log( genreText );
    genreBox.innerHTML = genreText;
    movieBox.append(genreBox);

    const rating = document.createElement('div');
    rating.classList.add('rating');
    rating.innerHTML = movie.rating;
    movieBox.append(rating);

    const detailBtn=document.createElement('a');
    detailBtn.classList.add('detail-btn');
    detailBtn.setAttribute('href', movie.url); 
    //const href = `https://yts.mx/api/v2/movie_details.json?movie_id=${movie.id}`; 
    //console.log(href);
    // json 가져와서 새로운 페이지를 만들고 그새로운 페이지를 링크 걸어야 함
    // detailBtn.setAttribute('href', href ); 
    detailBtn.innerHTML = '자세히보기';
               
    movieBox.append(detailBtn);
    // moviesContents.append(movieBox);
    newDom.append(movieBox);
    // sliderContainer, movieContainer
}
 
const inputBox = document.querySelector('.input-box');
inputBox.addEventListener('mouseenter', () => {
    inputBox.classList.add('active');
})

// ham 맨위에 있고  navigation이 아래 있어서 클릭이벤트를 받지 못함 
const ham = document.querySelector('.ham-btn');
ham.addEventListener('click', showNavi)

function showNavi() {
    document.querySelector('.navigation').classList.toggle('active');
}
 
// 장르 검색 버튼
genreContainer.addEventListener('click', (event)=>{
    // 이벤트 위임 : 버튼 그룹으로 검색어를 찾을 것임
    //console.log(event.target.innerHTML);

    let searchText = event.target.innerHTML;
    const searchMovies = searchGenre( searchText);

    // search 한 영화를 별도로 담아서 뿌려주기 
    moviesContents.innerHTML = '';
    if( searchText === "모두보기"){
        allMovies.forEach((movie)=>{
            createDom( movie );
        })
    }else{
        searchMovies.forEach((movie)=>{
            createDom( movie );
        })
    }
})

// 데이터를 읽어 오는 시간
function searchGenre(searchText){
    const searchMovies = [];
    // 배열을 지우는 효과
    allMovies.map( movie => {
        if(movie.genres.includes(searchText)){
            searchMovies.push(movie);
        }
        
    })   
    console.log( searchMovies[0] );
    
    return searchMovies; 
}
 
// select-btn 검색 
const  selected = document.querySelector('.selected');
const  selectContainer = document.querySelector('.select-container');

const  options = document.querySelectorAll('.option');

selected.addEventListener('click', ()=>{
    selectContainer.classList.toggle('active');
})

options.forEach((option)=>{
    option.addEventListener('click', (event)=>{
        selectContainer.classList.remove('active');
        // 옵션 선택시 카테고리 닫기
        
       console.log( option.querySelector('label').innerHTML);
       let optionText = option.querySelector('label').innerHTML; 
       selected.innerHTML = optionText;
       // option 문자열을 제목에 표시 

       // 함수로 뺄수 있음 
       const searchMovies = searchGenre( optionText);
       moviesContents.innerHTML = '';
        if( optionText === "모두보기"){
            allMovies.forEach((movie)=>{
                createDom( movie );
            })
        }else{
            searchMovies.forEach((movie)=>{
                createDom( movie );
            })
        }
    })
})
 
// 반응형 script
window.addEventListener('resize', ()=>{
    console.log(this.innerWidth);

    if( this.innerWidth <= 780){
        inputBox.classList.add('active');
    }else{
        inputBox.classList.remove('active');
    }
})

document.addEventListener('DOMContentLoaded',()=>{
    if( window.innerWidth <= 780 ){
        inputBox.classList.add('active');
    }
})
 