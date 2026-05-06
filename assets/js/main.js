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

  // ── Active nav link (clean URLs) ──
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a[href]').forEach(a => {
    const h = a.getAttribute('href').split('#')[0];
    if (!h || h === '/') return;
    if (path === h || path.startsWith(h + '/')) a.classList.add('active');
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
    const catLabels = { event: 'Events', video: 'Video', shorts: 'Shorts', podcast: 'Podcast' };

    const cats = [];
    tiles.forEach(t => {
      if (!cats.includes(t.dataset.cat)) cats.push(t.dataset.cat);
    });

    const makeBtn = (label, filter) => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.textContent = label;
      btn.dataset.filter = filter;
      return btn;
    };

    // Insert dynamic buttons before any static buttons (e.g. Foto's)
    const staticBtn = filterBar.querySelector('[data-scroll]');
    const allBtn = makeBtn('Alles', 'all');
    allBtn.classList.add('active');
    filterBar.insertBefore(allBtn, filterBar.firstChild);
    cats.forEach(cat => {
      const btn = makeBtn(catLabels[cat] || cat, cat);
      if (staticBtn) filterBar.insertBefore(btn, staticBtn);
      else filterBar.appendChild(btn);
    });

    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      // Scroll buttons navigate to anchor instead of filtering
      if (btn.dataset.scroll) {
        const target = document.getElementById(btn.dataset.scroll);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      filterBar.querySelectorAll('.filter-btn:not([data-scroll])').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      tiles.forEach(t => {
        t.classList.toggle('is-hidden', f !== 'all' && t.dataset.cat !== f);
      });
    });
  }

  // ── Video modal (in-beeld.html) ──
  const videoModal = document.getElementById('video-modal');
  const iframe     = document.getElementById('video-modal-iframe');

  // ── Foto lightbox (in-beeld.html) ──
  const fotoModal = document.getElementById('foto-modal');
  const fotoImg   = document.getElementById('foto-modal-img');

  if (videoModal && iframe) {
    const overlay  = videoModal.querySelector('.video-modal-overlay');
    const closeBtn = videoModal.querySelector('.video-modal-close');

    document.querySelectorAll('[data-video-id]').forEach(tile => {
      tile.addEventListener('click', e => {
        e.preventDefault();
        const id = tile.dataset.videoId;
        iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
        videoModal.classList.add('open');
        videoModal.classList.toggle('is-shorts', tile.dataset.cat === 'shorts');
      });
    });

    const closeVideo = () => {
      videoModal.classList.remove('open', 'is-shorts');
      iframe.src = '';
    };
    overlay.addEventListener('click', closeVideo);
    closeBtn.addEventListener('click', closeVideo);
  }

  if (fotoModal && fotoImg) {
    const fotoOverlay  = fotoModal.querySelector('.foto-modal-overlay');
    const fotoCloseBtn = fotoModal.querySelector('.foto-modal-close');

    document.querySelectorAll('.foto-item').forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault();
        fotoImg.src = item.href;
        fotoModal.classList.add('open');
      });
    });

    const closeFoto = () => {
      fotoModal.classList.remove('open');
      fotoImg.src = '';
    };
    fotoOverlay.addEventListener('click', closeFoto);
    fotoCloseBtn.addEventListener('click', closeFoto);
  }

  // ── Podcast modal (in-beeld.html) ──
  const podcastModal  = document.getElementById('podcast-modal');
  const podcastIframe = document.getElementById('podcast-modal-iframe');
  if (podcastModal && podcastIframe) {
    document.querySelectorAll('[data-podcast-src]').forEach(tile => {
      tile.addEventListener('click', e => {
        e.preventDefault();
        podcastIframe.src = tile.dataset.podcastSrc;
        podcastModal.classList.add('open');
      });
    });
    const closePodcast = () => {
      podcastModal.classList.remove('open');
      podcastIframe.src = '';
    };
    podcastModal.querySelector('.video-modal-overlay').addEventListener('click', closePodcast);
    podcastModal.querySelector('.video-modal-close').addEventListener('click', closePodcast);
  }

  // ── Escape sluit alle modals ──
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (videoModal && videoModal.classList.contains('open')) {
      videoModal.classList.remove('open', 'is-shorts');
      if (iframe) iframe.src = '';
    }
    if (fotoModal && fotoModal.classList.contains('open')) {
      fotoModal.classList.remove('open');
      if (fotoImg) fotoImg.src = '';
    }
    if (podcastModal && podcastModal.classList.contains('open')) {
      podcastModal.classList.remove('open');
      if (podcastIframe) podcastIframe.src = '';
    }
  });

});
