let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card");
  let maxSlides = slides.length - 2; // Jumlah kartu maksimal yang bisa ditampilkan

  // Mengatur jumlah maksimal slide tergantung pada lebar layar
  if (window.innerWidth < 800) {
    maxSlides = slides.length - 0;
  }

  if (n > maxSlides) {
    slideIndex = maxSlides;
  }
  if (n < 1) {
    slideIndex = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Menampilkan slide sesuai dengan indeks slideIndex
  if (window.innerWidth < 800) {
    slides[slideIndex - 1].style.display = "block";
  } else {
    for (i = slideIndex - 1; i < slideIndex + 2; i++) {
      slides[i].style.display = "block";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen hamburger
  const hamburger = document.querySelector(".hamburger");

  // Ambil elemen menu yang ingin ditoggle
  const menu = document.querySelector(".menu");

  // Tambahkan event listener pada hamburger
  hamburger.addEventListener("click", function () {
    // Toggle class 'active' pada menu
    menu.classList.toggle("active");
  });
});
