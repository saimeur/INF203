//Question 2
function sendChat(){
    const chat = document.getElementById('textedit').value;
    const textField = document.getElementById('textedit');

    // Check if the sentence is not empty
    if (chat !== '') {
      // Send the sentence to chat.php (assuming it's the endpoint to handle the message)
      fetch(`chat.php?phrase=${encodeURIComponent(chat)}`)
      .then(response => {
        if (response.ok) {
          // Clear the text field after successfully sending the sentence
          textField.value = '';
        } else {
          console.error('Failed to send data to chat.php');
        }
      })
    }
}

function printChat() {
    fetch('chatlog.txt')
    .then(response => response.text())
    .then(data => {
        const lines = data.split("\n");
        const container = document.getElementById('texta');
        container.innerHTML = ''; // Clear the container 
        var i = lines.length-1;
        var nb = 0;
        while(i >= 0 && nb < 10){
            if(lines[i] !== ''){
                const p = document.createElement('p');
                p.textContent = lines[i];
                container.append(p);
                nb++;
            }
            i--;
        }
        setTimeout(printChat, 1000);
    })
    .catch(error => console.error('Error:', error));
}

printChat();
