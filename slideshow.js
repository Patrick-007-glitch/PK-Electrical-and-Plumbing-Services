function createSlideshow(slideshowId, descID, description) {
    let slideIndex = 0
    const slides = document.querySelectorAll(`#${slideshowID} .slide`) ; 
    const desctext = document.getElementById(descID);

    function showslides () {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none'; 
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'flex';//flex for multiple images
        if (desctext && descriptions && descriptions.length >= slideIndex) {
            desctext.textContent = descriptions[slideIndex - 1];
        }

        setTimeout (showslides, 4000);//change slides every 4 seconds
    }

    slides[slideIndexlideIndex].style.display = 'flex'; //show the first slide
    if (desctext && descriptions && descriptions.length > 0) {
        desctext.textContent = descriptions[0];
    }
    showSlides();
}

// Electrical description
const Electricaldescription = [
    "Electric wiring and installation for new construction or construction sites",
    "Retail lighting, retrofitting, retrofit fixtures, and energy-saving ideas",
    "Circuit breaker panel repair, replace, and install",
    "Diagnosing and fixing electrical problems",
    "Electrical appliance and outlet installation and repair",    
] ;

//Plumbing description
const Plumbingdescription = [
    "Detection and repair of leaks to avoid water damage",
    "Installation, repairs, or replacement of pipes, fixtures, and fittings",
    "To clear blockages for continued flow and for clearing out drain lines",
    "Water heater installation, servicing, and repair",
    "In general, makeovers and updates for bathroom and kitchen plumbing",
] ;

//Launch slideshows
createSlideshow("electrical-slideshow","electrical-desc-text", Electricaldescription)
createSlideshow("plumbing-slideshow","plumbing-desc-text", Plumbingdescription)