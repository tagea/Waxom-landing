const searchLabel = document.querySelector('.search__label');
const searchInput = document.querySelector('.search__input');
const searchForm = document.querySelector('.search__form');

searchLabel.addEventListener("click", toggleSearchInput);
//searchInput.addEventListener('blur', hideInputForm);

function toggleSearchInput(){
    const isInput = searchInput.classList.contains('search__input_animate-up');
    if (isInput){
        searchInput.classList.remove('search__input_animate-up');
        searchInput.classList.add('search__input_animate-down');
        //
    }
    else{
       searchInput.focus();
       searchInput.classList.add('search__input_animate-up');
        searchInput.classList.remove('search__input_animate-down');
       
    }
}
function hideInputForm(){
    console.log(searchLabel.onclick);
    if(!searchLabel.onclick){
    searchInput.classList.remove('search__input_animate-up');
        }
    console.log('click');
    
}