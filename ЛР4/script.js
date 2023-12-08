window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("goToTopBtn").style.display = "block";
    } else {
      document.getElementById("goToTopBtn").style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

const searchInput = document.getElementById('searchInput');
const movies = document.querySelectorAll('.movie');
  
searchInput.addEventListener('keyup', function(event) {
    const searchText = event.target.value.toLowerCase(); // Отримуємо введений текст і перетворюємо його на нижній регістр
    movies.forEach(movie => {
        const title = movie.querySelector('h2').textContent.toLowerCase(); // Отримуємо назву фільму та перетворюємо на нижній регістр
        if (title.includes(searchText)) {
            movie.style.display = 'block'; // Показати фільм, якщо його назва містить введений текст
        } else {
            movie.style.display = 'none'; // Сховати фільм, якщо його назва не містить введений текст
        }
    });
});