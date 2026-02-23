(function(){
  // Mobile menu toggle
  const mobileBtn = document.querySelector('[data-mobile-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if(mobileBtn && mobileMenu){
    mobileBtn.addEventListener('click', ()=>{
      const open = mobileMenu.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(link => {
    const href = link.getAttribute('href');
    if(href === currentPage || (currentPage === '' && href === 'index.html')){
      link.classList.add('active');
    }
  });

  // Year in footer
  const yearEl = document.getElementById('y');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
})();
