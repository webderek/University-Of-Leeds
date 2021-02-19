const floor = Array.prototype.slice.call(document.querySelectorAll('.menu__floor--link')).reverse();
const floorContainer =  document.querySelector('.floor');
const svg = Array.prototype.slice.call(document.querySelectorAll('.svg'));

//add order for svg and button
svg.forEach((item,index) => {
    floor[index].style.order = index+1; 
    svg[index].style.order = svg.length - index;  
    svg[index].id += "floor-"+ (svg.length - index);   
});


//hidden unclick items
// floorContainer.addEventListener('click', function(evt) {
//     svg.forEach(item => {
//         console.log(evt.target.style.order == item.style.order)
//         if(evt.target.style.order == item.style.order){

//             item.classList.remove('hidden');
        
//         }
//         else{
//             item.classList.add('hidden')
//         }
    
//         // document.location.reload();
//     });

// })