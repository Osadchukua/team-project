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
    moreText.style.display = 'flex';
  }
}

(() => {
  const refs = {
    openMoreBtn: document.querySelector('[list-open]'),
    // closeModalBtn: document.querySelector('[data-modal-close]'),
    more: document.querySelector('[more-text]'),
  };

  refs.openMoreBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // document.body.classList.toggle('modal-open');
    refs.more.classList.toggle('text-shown');
  }
})();

// function myFunction() {
//   var dots = document.getElementById('dots');
//   var moreText = document.getElementById('more');
//   var btnText = document.getElementById('myBtn');

//   if (dots.style.display === 'none') {
//     dots.style.display = 'inline';
//     btnText.innerHTML = 'Read more';
//     moreText.style.display = 'none';
//   } else {
//     dots.style.display = 'none';
//     btnText.innerHTML = 'Read less';
//     moreText.style.display = 'flex';
//   }
// }
