let index = 0;
  let slides = document.querySelectorAll('.slide');
  let intervalId = null;

  function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }

  document.getElementById('startBtn').addEventListener('click', () => {
    if (!intervalId) {
      intervalId = setInterval(showSlide, 3000); 
    }
  });

document.getElementById("nailForm").addEventListener("submit", function (e) {
  e.preventDefault();

 
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const style = document.getElementById("style").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const booking = { name, phone, style, date, time };

  
  let bookings = JSON.parse(localStorage.getItem("nailBookings")) || [];
  bookings.push(booking);
  localStorage.setItem("nailBookings", JSON.stringify(bookings));

  
  document.getElementById("message").innerText =
    `Thank you, ${name}! Your ${style} nails are booked for ${date} at ${time}.`;

  
  const ownerNumber = "265885519089"; 
  const whatsAppMsg = `New Nail Booking: ${name} booked ${style} nails on ${date} at ${time}.`;
  const whatsappLink = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
  
  
  window.open(whatsappLink, '_blank');

  
  document.getElementById("nailForm").reset();

   
  let index = 0;
  let slides = document.querySelectorAll('.slide');
  let intervalId = null;

  function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }

  document.getElementById('startBtn').addEventListener('click', () => {
    if (!intervalId) {
      intervalId = setInterval(showSlide, 3000); // Start sliding every 3 seconds
    }
  });
});

