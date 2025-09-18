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
//boot slideshow
createSlideshow("electrical-slideshow")
createSlideshow("plumbing-slideshow")