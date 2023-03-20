const userInput = document.querySelector('#userInput');
const bx = document.querySelector('.bx');
const inputBox = document.querySelector('.input-box');
inputBox.addEventListener('mouseenter', () => {
    inputBox.classList.add('active');
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
}