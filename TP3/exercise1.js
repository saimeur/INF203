function loadDoc() {
    fetch('text.txt')
    .then(response => response.text())
    .then(data => {
      const textarea = document.getElementById('texta');
      textarea.value = data;
    })
    .catch(error => console.error('Error:', error));
}


//Question 1b
function loadDoc2() {
    fetch('text.txt')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('<br/>');
        const container = document.getElementById('texta2');
        container.innerHTML = ''; // Clear the container
        lines.forEach((line, index) => {
        const p = document.createElement('p');
        p.textContent = line;
        p.style.color = "#"+Math.floor(Math.random()*16777215).toString(16);
        container.appendChild(p);
        });
    })
    .catch(error => console.error('Error:', error));
}

