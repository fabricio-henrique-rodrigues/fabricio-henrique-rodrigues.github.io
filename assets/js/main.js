document.addEventListener('DOMContentLoaded', () => {
  // Toggle BibTeX blocks
  document.querySelectorAll('[data-toggle-bib]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-toggle-bib');
      const block = document.getElementById(targetId);
      if (block) {
        block.classList.toggle('open');
        btn.textContent = block.classList.contains('open') ? 'Hide BibTeX' : 'BibTeX';
      }
    });
  });

  // Copy BibTeX to clipboard
  document.querySelectorAll('[data-copy-bib]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-bib');
      const block = document.getElementById(targetId);
      if (block) {
        navigator.clipboard.writeText(block.textContent.trim()).then(() => {
          const original = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = original; }, 1600);
        });
      }
    });
  });

  // Filter publications by type
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubItems = document.querySelectorAll('.pub-item');
  if (filterBtns.length && pubItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        pubItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-type') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
});
