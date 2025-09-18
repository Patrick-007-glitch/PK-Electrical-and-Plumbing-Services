function createSlideshow(SlideshowId) {
    let SlideIndex = 0
    const slides = document.querySelectorAll('#${slideshowID} .slides') ; 
    function showslides () {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        SlideIndex++;
        if (SlideIndex > slide.length) { SlideIndex = 1; }
        slides[SlideIndex - 1].style.display = "block";
        setTimeout (showslides, 3000);
    }
    showslides ()   
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
createSlideshow("plumbing-slidshow","plumbing-desc-text", Plumbingdescription)