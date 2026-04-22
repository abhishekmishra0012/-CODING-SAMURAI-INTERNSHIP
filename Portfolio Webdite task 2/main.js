document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const words = ["Web Developer", "UI Designer", "Freelancer"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
    currentWord = words[i];
    if (isDeleting) {
        document.getElementById("text").textContent = currentWord.substring(0, j - 1);
        j--;
        if (j == 0) { isDeleting = false; i = (i + 1) % words.length; }
    } else {
        document.getElementById("text").textContent = currentWord.substring(0, j + 1);
        j++;
        if (j == currentWord.length) isDeleting = true;
    }
    setTimeout(type, isDeleting ? 100 : 200);
}
type();