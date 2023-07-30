// Function to show only the card for the entered place and hide the rest
function showOnlyEnteredPlace(location) {
  const popularGridItems = document.querySelectorAll('.popular__card:not(.booking__container)');
  let found = false;

  for (const item of popularGridItems) {
    const cardHeader = item.querySelector('.popular__card__header h4');
    const cardContent = item.querySelector('.popular__content p');
    
    if (cardHeader.textContent.toLowerCase() === location.toLowerCase()) {
      item.style.display = 'flex';
      found = true;
      cardContent.style.display = 'block';
    } else {
      item.style.display = 'none';
      cardContent.style.display = 'none';
    }
  }

  return found;
}

// Function to show the message below the booking__container
function showMessage(message, isError = false) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');

  if (isError) {
    messageContainer.classList.add('error-message');
  }

  messageContainer.textContent = message;

  // Insert the message container below the booking__container
  const bookingContainer = document.querySelector('.booking__container');
  bookingContainer.insertAdjacentElement('afterend', messageContainer);
}

// Event listener for form submission
const form = document.querySelector('.booking__container form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = form.querySelector('input');
  const location = input.value.trim();

  if (location === '') {
    showMessage('Please enter a location in the input field.', true);
  } else {
    const found = showOnlyEnteredPlace(location);
    if (!found) {
      showMessage('Sorry, this location is not available in the popular destinations.', true);
    } else {
      showMessage('');
    }
  }
});

// Event listener for search button
const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  const input = form.querySelector('input');
  const location = input.value.trim();

  if (location === '') {
    showMessage('Please enter a location in the input field.', true);
  } else {
    const found = showOnlyEnteredPlace(location);
    if (!found) {
      showMessage('Sorry, this location is not available in the popular destinations.', true);
    } else {
      showMessage('');
    }
  }
});

// Function to handle card click
function handleCardClick(cardPrice) {
  // Auto-fill the price in the booking form
  const bookingPriceInput = document.getElementById("booking-price");
  bookingPriceInput.value = cardPrice;

  // Open bookform.html in a new tab
  window.open("bookform.html", "_blank");
}