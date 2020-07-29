function parallax(event) {
    this.querySelectorAll('.img').forEach(img => {
        let speed = img.getAttribute('dataspeed');

        img.style.transform = `translate(${event.clientX*speed/5000}px,${event.clientY*speed/5000}px)`;
    });
}
document.addEventListener('mousemove', parallax);

function parallaxSkills(event) {
    this.querySelectorAll('.skills').forEach(skills => {
        let speed = skills.getAttribute('dataspeed');
        skills.style.transform = `translate(${event.clientX*speed/5000}px,${event.clientY*speed/5000}px)`;
    });
}

document.addEventListener('mousemove', parallaxSkills);
function parallaxBg(event) {
    this.querySelectorAll('.layerbg').forEach(layerbg => {
        let speed = layerbg.getAttribute('dataspeed');

        layerbg.style.transform = `translate(${event.clientX * speed / 5000}px,${event.clientY * speed / 5000}px)`;

    });
}
document.addEventListener('mousemove', parallaxBg);

// function parallaxCat(event) {
//     this.querySelectorAll('.catP').forEach(cat => {
//         let speed = cat.getAttribute('dataspeed');
//         cat.style.transform = `translate(${event.clientX*speed/5000}px,${event.clientY*speed/5000}px)`;
//     });
// }
// document.addEventListener('mousemove', parallaxCat);


function parallaxVine(event) {
    this.querySelectorAll('.vine').forEach(vine => {
        let speed = vine.getAttribute('dataspeed');
        vine.style.transform = `translate(${event.clientX*speed/5000}px,${event.clientY*speed/5000}px)`;
    });
}
document.addEventListener('mousemove', parallaxVine);