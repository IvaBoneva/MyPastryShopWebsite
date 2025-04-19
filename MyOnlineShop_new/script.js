document.addEventListener("DOMContentLoaded", () => {
  function placeAnOrder(event) {
    event.preventDefault(); // Предотвратяваме презареждането
    const name = document.getElementById("name").value; // Взимаме стойността на полето
    const address = document.getElementById("address").value;
    alert(`${name}, благодарим за поръчката!`);
    orderForm.reset();
  }

  function sendReview(event) {
    event.preventDefault(); // Предотвратяваме презареждането
    const reviewText = document.getElementById("comments").value;
    const newReview = document.createElement("div");
    newReview.textContent = reviewText;
    newReview.className = "rev";
    reviewsContainer.prepend(newReview);
    reviewForm.reset();
  }

  const orderForm = document.getElementById("purchase_form");
  const orderButton = document.getElementById("order");
  orderButton.addEventListener("click", placeAnOrder);

  const reviewsContainer = document.getElementById("revues_div");
  const reviewForm = document.getElementById("review_form");
  const reviewButton = document.getElementById("send");
  reviewButton.addEventListener("click", sendReview);
});
