document.querySelectorAll('.filter-links a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Remove a classe 'active' de todos os links
        document.querySelectorAll('.filter-links a').forEach(function(link) {
            link.classList.remove('active');
        });

        // Adiciona a classe 'active' ao link clicado
        this.classList.add('active');

        var selectedCategory = this.getAttribute('data-category');
        var items = document.querySelectorAll('.product-item');

        items.forEach(function(item) {
            if (selectedCategory === '' || item.getAttribute('data-category') === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});