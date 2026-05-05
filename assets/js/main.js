/* Junior AI League — Gedeelde scripts */

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll reveal ──
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.r').forEach(el => observer.observe(el));

  // ── FAQ accordion ──
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Active nav link ──
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  // ── Hamburger menu ──
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ── Media filter (in-beeld.html) ──
  const filterBar = document.getElementById('filter-bar');
  const mediaGrid = document.getElementById('media-grid');
  if (filterBar && mediaGrid) {
    const tiles = Array.from(mediaGrid.querySelectorAll('[data-cat]'));
    const catLabels = { event: 'Events', video: 'Video', shorts: 'Shorts' };

    // Collect unique categories in order of appearance
    const cats = [];
    tiles.forEach(t => {
      if (!cats.includes(t.dataset.cat)) cats.push(t.dataset.cat);
    });

    // Build filter buttons
    const makeBtn = (label, filter) => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.textContent = label;
      btn.dataset.filter = filter;
      return btn;
    };

    const allBtn = makeBtn('Alles', 'all');
    allBtn.classList.add('active');
    filterBar.appendChild(allBtn);
    cats.forEach(cat => filterBar.appendChild(makeBtn(catLabels[cat] || cat, cat)));

    // Filter click handler
    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      tiles.forEach(t => {
        t.classList.toggle('is-hidden', f !== 'all' && t.dataset.cat !== f);
      });
    });
  }

  // ── Video modal (in-beeld.html) ──
  const modal   = document.getElementById('video-modal');
  const iframe  = document.getElementById('video-modal-iframe');
  if (modal && iframe) {
    const overlay  = modal.querySelector('.video-modal-overlay');
    const closeBtn = modal.querySelector('.video-modal-close');

    document.querySelectorAll('[data-video-id]').forEach(tile => {
      tile.addEventListener('click', e => {
        e.preventDefault();
        const id = tile.dataset.videoId;
        iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
        modal.classList.add('open');
        modal.classList.toggle('is-shorts', tile.dataset.cat === 'shorts');
      });
    });

    const closeModal = () => {
      modal.classList.remove('open', 'is-shorts');
      iframe.src = '';
    };

    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  }

});
