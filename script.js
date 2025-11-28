// smooth fade-in scroll animation
const sections = document.querySelectorAll('.fade');

function revealOnScroll(){
    sections.forEach(sec=>{
        let top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            sec.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

