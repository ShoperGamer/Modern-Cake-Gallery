   //Theme Switcher
  const images = [
            "/picture/cake1.jpg",
            "/picture/cake2.jpg",
            "/picture/cake3.jpg", 
            "/picture/cake4.jpg",
            "/picture/cake5.jpg",
            "/picture/cake6.jpg",
            "/picture/cake7.jpg",
            "/picture/cake8.jpg",
            "/picture/cake9.jpg",
            "/picture/cake10.jpg",
            "/picture/cake11.jpg",
            "/picture/cake12.jpg"
        ];

        // Random Image Function
        function changeSrc() {
            const randomIndex = Math.floor(Math.random() * images.length);
            const cakeImage = document.getElementById('cake');
            
            // Fade Animation
            cakeImage.style.opacity = 0;
            setTimeout(() => {
                cakeImage.src = images[randomIndex];
                cakeImage.style.opacity = 1;
            }, 500);
        }

        // Theme Toggle
        function toggleTheme() {
            const body = document.body;
            const themeBtn = document.querySelector('.theme-switcher');
            
            if(body.getAttribute('data-bs-theme') === 'light') {
                body.setAttribute('data-bs-theme', 'dark');
                themeBtn.innerHTML = '<i class="bi bi-sun"></i>';
                themeBtn.classList.replace('btn-dark', 'btn-light');
            } else {
                body.setAttribute('data-bs-theme', 'light');
                themeBtn.innerHTML = '<i class="bi bi-moon-stars"></i>';
                themeBtn.classList.replace('btn-light', 'btn-dark');
            }
        }