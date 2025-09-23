function createSlideshow(slideshowId, descriptions) {
    const slides = document.querySelectorAll(`#${slideshowId} .slide`) ; 
    const descE1 = document.querySelector(`#${slideshowId} .slide-description`);
    let index = 0;

    function showSlides () {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'flex';
        index = (index + 1) % slides.length;
        setTimeout(showSlides, 3000);
    }

    showSlides();

    //store data for manuel navigation and descriptions
    window[slideshowId] = { slides, index: 0, descriptions, descE1 };
}
function changeSlides(slideshowId, n) {
    const data = window[slideshowId];
    if (!data) return;

    data.slides[data.index].style.display = 'none';
    data.index = (data.index + n + data.slides.length) % data.slides.length;
    data.slides[data.index].style.display = 'flex';
}

function showDescription(slideshowId, slideIndex) {
    const data = window[slideshowId];
    if (data && data.descE1) {
        data.descE1.textContent = data.descriptions[slideIndex];
    }
}

// descriptions
const Electricaldescription = [
    "Electric wiring and installation for new construction or construction sites",
    "Retail lighting, retrofitting, retrofit fixtures, and energy-saving ideas",
    "Circuit breaker panel repair, replace, and install",
    "Diagnosing and fixing electrical problems",
    "Electrical appliance and outlet installation and repair",    
] ;
//Intialize
createSlideshow("electrical-slideshow", Electricaldescription)

const Plumbingdescription = [
    "Detection and repair of leaks to avoid water damage",
    "Installation, repairs, or replacement of pipes, fixtures, and fittings",
    "To clear blockages for continued flow and for clearing out drain lines",
    "Water heater installation, servicing, and repair",
    "In general, makeovers and updates for bathroom and kitchen plumbing",
] ;
//Intialize
createSlideshow("plumbing-slideshow", Plumbingdescription)

