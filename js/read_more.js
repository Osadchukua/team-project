function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}

(() => {
  const refs = {
    opentextBtn: document.querySelector('[open-list]'),
    // closeModalBtn: document.querySelector('[close]'),
    text: document.querySelector('[text-list]'),
  };

  refs.opentextBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // document.body.classList.toggle('modal-open');
    refs.text.classList.toggle('hidden');
  }
})();

// const btn = document.querySelector('.about__btn');
// const text = document.querySelector('.text-list');
// const textHolder = document.querySelector('.about__content--additional');

// textholder.addEventListener('click', e => {
//   const current = e.target;
//   const isReadMorebtn = current.className.includes('about__btn');
//   if (!isReadMorebtn) return;
//   const currentText = e.target.parentNode.querySelector('.text-list');
//   currentText.classList.toggle('text-list--open');
//   current.textContent = current.textContent.includes('Read more')
//     ? 'Read less'
//     : 'Read more';
// });
