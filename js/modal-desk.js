(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mod-open]'),
    closeModalBtn: document.querySelector('[data-mod-close]'),
    modal: document.querySelector('[data-mod]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
