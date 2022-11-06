export default function lazyLoad(imageLazyLoading) {
    const $images = document.querySelectorAll(imageLazyLoading);
    const $containersImages = document.querySelectorAll(imageLazyLoading);
    document.querySelectorAll('img').forEach(e => {
        e.addEventListener('contextmenu', e => e.preventDefault());
    });
    document.querySelectorAll('video').forEach(e => e.addEventListener('contextmenu', e => e.preventDefault()));
    // Saber de qué tamaño está el viewport para añadir al data-src si es tablet /t/ o desktop /d/, o sino es el valor que tiene en el HTML
    function imagesResponsiveDataset() {
        $images.forEach(e => {
            if (window.innerWidth > 600) {
                if (e.getAttribute('data-src').indexOf('/m/')) e.dataset.src = e.getAttribute('data-src').replace('/m/', '/t/');
                if (e.getAttribute('data-src').indexOf('/d/')) e.dataset.src = e.getAttribute('data-src').replace('/d/', '/t/');
            };
            if (window.innerWidth > 1000) {
                if (e.getAttribute('data-src').indexOf('/t/')) e.dataset.src = e.getAttribute('data-src').replace('/t/', '/d/');
            };
        });
    };
    imagesResponsiveDataset();
    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target); // Cuando aparezca la imagen ya no se volverá a ejecutar
            };
        });
    };
    const observer = new IntersectionObserver(callback, {root: null, rootMargin: '0px', threshold: 0});
    $containersImages.forEach(img => observer.observe(img));
};