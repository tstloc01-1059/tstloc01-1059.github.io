        document.addEventListener('DOMContentLoaded', () => {
            const xpLines = [...document.querySelectorAll('#xp_table .xp_line')];
            const categoryButtons = document.querySelectorAll('.category');
            let activeCategory = null;

            const updateVisibility = filter => {
                xpLines.forEach(line => {
                    const category = line.querySelector('.category')?.classList[1] || '';
                    const visible = !filter || category === filter;
                    line.style.display = visible ? '' : 'none';
                    const hr = line.nextElementSibling;
                    if (hr?.tagName === 'HR') hr.style.display = visible ? '' : 'none';
                });
            };

            categoryButtons.forEach(button => {
                button.style.cursor = 'pointer';
                button.addEventListener('click', event => {
                    event.preventDefault();
                    event.stopPropagation();
                    const filter = button.classList[1];
                    if (!filter) return;
                    activeCategory = activeCategory === filter ? null : filter;
                    updateVisibility(activeCategory);
                });
            });
        });