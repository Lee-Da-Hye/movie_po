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
