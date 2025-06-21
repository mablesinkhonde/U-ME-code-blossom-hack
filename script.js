document.getElementById("nailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const style = document.getElementById("style").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const booking = { name, phone, style, date, time };

  // Save booking to local storage
  let bookings = JSON.parse(localStorage.getItem("nailBookings")) || [];
  bookings.push(booking);
  localStorage.setItem("nailBookings", JSON.stringify(bookings));

  // Display confirmation message to the user
  document.getElementById("message").innerText =
    `Thank you, ${name}! Your ${style} nails are booked for ${date} at ${time}.`;
  
  // Optionally, you could send an email notification here with EmailJS

  // Now, add the WhatsApp notification code
  const ownerNumber = "265991625900"; // Replace with your actual WhatsApp number (with country code)
  const whatsAppMsg = `New Nail Booking: ${name} booked ${style} nails on ${date} at ${time}.`;
  const whatsappLink = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
  
  // Open WhatsApp in a new tab so the owner can see the message.
  window.open(whatsappLink, '_blank');

  // Reset the form if needed
  document.getElementById("nailForm").reset();
});
