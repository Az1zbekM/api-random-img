const button = document.getElementById('btn');
const img = document.querySelector('.img');
 function changeImg() {
     fetch('https://random.imagecdn.app/500/500')
    .then(response => response.blob())
    .then(data => {
        const objectURL = URL.createObjectURL(data);
        img.src = objectURL;})}