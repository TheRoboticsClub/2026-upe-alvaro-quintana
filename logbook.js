document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('logbook-timeline');
    const navSlider = document.getElementById('nav-slider');
    const weeks = timeline.querySelectorAll('.week-node');

    weeks.forEach(week => {
        const id = week.getAttribute('id');
        const markerText = week.querySelector('.marker').innerText;
        
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.innerText = `Semana ${markerText}`;
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            week.setAttribute('open', '');
            week.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            navSlider.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        });

        navSlider.appendChild(link);
    });

    weeks.forEach(week => {
        week.addEventListener('mouseenter', () => {
            if(!week.hasAttribute('open')) {
                week.style.borderColor = 'rgba(255, 193, 7, 0.5)';
            }
        });
        week.addEventListener('mouseleave', () => {
            if(!week.hasAttribute('open')) {
                week.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }
        });
    });
});