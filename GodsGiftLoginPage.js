document.addEventListener('DOMContentLoaded', function () {
    const changeColorButton = document.getElementById('changeColor');
    const contentSection = document.getElementById('content');
  
    changeColorButton.addEventListener('click', function () {
      const randomColor = getRandomColor();
      contentSection.style.backgroundColor = randomColor;
    });
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  