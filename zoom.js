window.addEventListener("load", function(event) {

    let svgElement = document.querySelector('#floor-7');
    const getPanZoomInstance = element => svgPanZoom(element, {
        zoomEnabled: true,
        controlIconsEnabled: false,
        fit: true,
        center: true,
        minZoom: 0
    });


    


let panZoomTiger = getPanZoomInstance(svgElement);
const floorContainer =  document.querySelector('.floor');
const svg = Array.prototype.slice.call(document.querySelectorAll('.svg'));

    floorContainer.addEventListener('click', function(evt) {
        
        if(evt.target != floorContainer){
        panZoomTiger.destroy();
        
        svg.forEach((item,index) => {
            console.log(evt.target.complete)
            if(evt.target.style.order == item.style.order){

                
                item.classList.remove('hidden');
    
                if(!item.complete){
                    item.onload = function() {
                    console.log(1)
                        panZoomTiger = getPanZoomInstance(document.querySelector('#'+`${item.id}`))
                        }
                    
                }

            else{
                console.log(0)
                panZoomTiger = getPanZoomInstance(document.querySelector('#'+`${item.id}`))
                }
                
                
                
            }
            else{
                item.classList.add('hidden')
            }
        });
    }
});














    const btnZoomIn = document.querySelector('#zoom-in');
    const btnZoomOut = document.querySelector('#zoom-out');

    btnZoomIn.addEventListener('click', function (evt) {
    evt.preventDefault();
    panZoomTiger.zoomIn();
    });

    btnZoomOut.addEventListener('click', function (evt) {
    evt.preventDefault();
    panZoomTiger.zoomOut();
    });

});

