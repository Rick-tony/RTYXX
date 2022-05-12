const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
  idx++;
  
  if(idx > img.length - 1){
    idx = 0;
  }
  img.style.transform = 'translateX(${-idx * 500}px)';
}
setInterval(carrossel, 1800);

/*$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
*/