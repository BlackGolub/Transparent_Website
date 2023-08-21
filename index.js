const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    const allDark = document.querySelectorAll('[id="dark"]')
    
    allDark.forEach(element => {
        element.classList.toggle('dark');
      });
})
