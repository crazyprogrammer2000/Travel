/*
document.addEventListener("DOMContentLoaded", function(){
  
    const image = document.getElementById("image");
    if(image)
    {   
     image.addEventListener("click", function(){
     window.location.href = "packages.html";
     });
    }
    else
    {
     return 0;
    }

    const text = document.getElementById("text");
    if(text)
    {
     text.addEventListener("click", function(){
     window.location.href = "packages.html"
     })
    }
    else
    {
     return 0;
    }
}); */

// home.html
document.addEventListener("DOMContentLoaded", function() {
  const clickableElements = document.querySelectorAll(".clickable");

  clickableElements.forEach((element) => {
    element.addEventListener("click", function() {
      const link = element.getAttribute("data-link");
      if(link) 
      {
        window.location.href = link;
      }
      else
      {
        return 0;
      }    
    })
  })
});

// hotel.html
document.addEventListener("DOMContentLoaded", function () {
  let today = new Date().toISOString().split("T")[0];
  document.getElementById("checkin").setAttribute("min", today);
});

document.getElementById("checkin").addEventListener("change", function () {
  let checkinDate = document.getElementById("checkin").value;
  let nextDay = new Date(checkinDate);
  nextDay.setDate(nextDay.getDate() + 1);
  document.getElementById("checkout").setAttribute("min", nextDay.toISOString().split("T")[0]);
});

document.getElementById("searchHotels").addEventListener("click", function () {
  let checkinDate = document.getElementById("checkin").value;
  let checkoutDate = document.getElementById("checkout").value;
  let errorMessage = document.getElementById("error-message");
  let hotelDropdown = document.querySelector(".hotel-dropdown");
  let hotelList = document.getElementById("hotelList");

  // Clear previous results & error
  hotelList.innerHTML = '<option value="">-- Select a Hotel --</option>';
  errorMessage.style.display = "none";
  hotelDropdown.style.display = "none";

  // Validation: Check if dates are selected
  if (!checkinDate || !checkoutDate) {
      errorMessage.innerText = "Please select both check-in and check-out dates.";
      errorMessage.style.display = "block";
      return;
  }

  // Validation: Check if checkout date is after check-in date
  if (new Date(checkoutDate) <= new Date(checkinDate)) {
      errorMessage.innerText = "Check-out date must be after the check-in date.";
      errorMessage.style.display = "block";
      return;
  }

  // Simulated list of available hotels
  let availableHotels =[
    {name: "Hotel Sai Darshan", price: "Rs. 5,000", location: "Saki Naka, Andheri(E), Mumbai"},
    {name: "Trident Hotel", price: "Rs. 15,000", location: "Nariman Point, Mumbai"},
    {name: "Taj Hotel", price: "Rs.16,000", location: "Colaba, Mumbai"},
    {name: "Hotel Sharda", price: "Rs. 3,500", location: "Shastri Nagar, Bhandup(W), Mumbai"},
    {name: "Bhagyashree Guest House", price: "Rs. 3,000", location: "J. B. Nagar, Ghatkopar(W), Mumbai"},
    {name: "Hotel Palm Shadow", price: "Rs. 8,500", location: "Juhu, Mumbai"},
    {name: "Hotel Vighnaharta", price: "Rs. 3500", location: "Desai Wadi, Dahisar(E), Mumbai"},
    {name: "Lemon Tree Hotel", price: "Rs. 15254", location: "Hiranandani Gardens, Powai, Mumbai"},
    {name: "Hotel Gayatri", price: "Rs. 5000", location: "Worli, Mumbai"},
    {name: "Hotel Kailas", price: "Rs. 4000", location: "Near Siddhivinayak Temple, Dadar, Mumbai"}
  ];

  // Show the dropdown and add hotels
  hotelDropdown.style.display = "block";
  availableHotels.forEach(hotel => {
      let option = document.createElement("option");
      option.value = hotel.value;
      option.textContent = hotel.name;
      hotelList.appendChild(option);
  });
});

document.getElementById("hotelList").addEventListener("change", function () {
  let selectedHotel = document.getElementById("hotelList").value;
  let displayText = document.getElementById("selectedHotel");
  
  if (selectedHotel) {
      displayText.innerText = "You selected: " + document.getElementById("hotelList").selectedOptions[0].text;
  } else {
      displayText.innerText = "";
  }
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("checkin").value = "";
  document.getElementById("checkout").value = "";
  document.getElementById("hotelList").innerHTML = '<option value="">-- Select a Hotel --</option>';
  document.getElementById("selectedHotel").innerText = "";
  document.querySelector(".hotel-dropdown").style.display = "none";
  document.getElementById("error-message").style.display = "none";
});
  
//payment.html
document.addEventListener("DOMContentLoaded", function () {
    let calculateFareBtn = document.getElementById("calculateFare");
    let payNowBtn = document.getElementById("payNow");

    calculateFareBtn.addEventListener("click", function () {
        let numPassengers = parseInt(document.getElementById("numPassengers").value); // Convert to number
        let fare = parseInt(document.getElementById("fare").value); // Convert to number

        if (isNaN(numPassengers) || numPassengers < 1) {
            alert("Please enter a valid number of passengers/rooms.");
            return;
        }

        let totalAmount = numPassengers * fare;
        document.getElementById("totalAmount").value = totalAmount; // Show total price
    });

    payNowBtn.addEventListener("click", function () {
        let bookingType = document.getElementById("bookingType").value;
        let numPassengers = document.getElementById("numPassengers").value;
        let totalAmount = document.getElementById("totalAmount").value;

        document.querySelector(".booking-form").classList.add("hidden"); // Hide form
        document.getElementById("confirmationMessage").classList.remove("hidden"); // Show success message

        document.getElementById("bookingDetails").innerHTML = `
            <strong>Booking Type:</strong> ${bookingType.toUpperCase()} <br>
            <strong>Passengers/Rooms:</strong> ${numPassengers} <br>
            <strong>Total Paid:</strong> ₹${totalAmount}
        `;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript is working!");

  let calculateFareBtn = document.getElementById("calculateFare");
  let payNowBtn = document.getElementById("payNow");

  console.log("Calculate Fare Button:", calculateFareBtn);
  console.log("Pay Now Button:", payNowBtn);
});