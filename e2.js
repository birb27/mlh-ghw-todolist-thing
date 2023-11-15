userInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      const button = document.createElement('button');
      const aaa = document.getElementById('list')
      const content =  document.getElementById('userInput').value;
      button.textContent = content
  
      aaa.insertAdjacentHTML('beforeend', '<br>');
      aaa.appendChild(button);
      userInput.value = '';

      button.addEventListener('click', function() {
        button.style.textDecoration = button.style.textDecoration === 'line-through' ? '' : 'line-through';
        button.style.color = '#b76e799f';
      });
    }
  });

