const infoBox = document.getElementById('info-box');
const mapContainer = document.querySelector('.map-container');
const img = mapContainer.querySelector('.map-image');
const imgWidth = img.offsetWidth;

/* INITIALIZE */
containerDimension();
window.setInterval(function(){
    containerDimension();
}, 500);

/* CLICK EVENTS */
mapContainer.addEventListener('click', function(e) {
    e.preventDefault();
    let target = e.target;
    if (target.dataset.info) {
        showInfo (target.dataset.info, e);
    }
});

function showInfo (info, e) {
    e.stopPropagation();
    infoBox.innerHTML = info;
    infoBox.classList.add('visible');
    infoBox.style.left = e.pageX + 'px';
    infoBox.style.top = e.pageY + 'px';
};

/* SCALING FUNCTION */
function containerDimension() {
    let scale = mapContainer.offsetWidth / imgWidth;
    img.style.transform = 'scale('+scale+')';
};