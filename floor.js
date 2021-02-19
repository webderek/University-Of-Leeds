const btnTop = document.querySelector('.menu--up');
const btnDown = document.querySelector('.menu--down');
const marginAndHeigthItem = 85;
const visibleItems = 4;
const countItems = document.querySelectorAll('.menu__floor-item').length
const containerFloor = document.querySelector('.floor');

(function floorScroll() { 

let count = 0;

btnTop.addEventListener('click', function (evt) {
    if(count < (countItems-visibleItems)*marginAndHeigthItem){
        count+=marginAndHeigthItem;
        containerFloor.style.transform = `translateY(${count}px)`;
    }
    else{}
});

btnDown.addEventListener('click', function (evt) {
    if(count > 0){
        count-=marginAndHeigthItem;
    containerFloor.style.transform = `translateY(${+count}px)`;
    }
    else{}
})

})();

