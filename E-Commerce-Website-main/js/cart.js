const CartItems = document.querySelector(".cart-items");
const cartTotalElement = document.querySelector(".cart-total span");

let cartTotal = 0;

function displayCartItems() {
  const items = JSON.parse(localStorage.getItem("cart"));
  items.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
    <p class="cart_id">${item.id}</p>
    <p class="cart_title">${item.title}</p>
    <img src="${item.image}" alt="${item.title}" class="cart_img" />
    <p class="cart_price">${item.price}</p>
    <p class="cart_delete" data-index="${index}">Delete</p>
    `;
    CartItems.appendChild(cartItem);
  });

  // Thêm sự kiện click cho nút "Delete"
  const deleteButtons = document.querySelectorAll(".cart_delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      removeFromCart(index);
    });
  });

  // Hiển thị tổng tiền sau khi hiển thị mặt hàng
  displayCartTotal();
}

function removeFromCart(index) {
  let items = JSON.parse(localStorage.getItem("cart"));
  items.splice(index, 1); // Xoá mục khỏi mảng
  localStorage.setItem("cart", JSON.stringify(items)); // Cập nhật giỏ hàng trong localStorage
  CartItems.innerHTML = ""; // Xóa tất cả các mục hiện tại trong giỏ hàng
  displayCartItems(); // Hiển thị lại giỏ hàng sau khi xoá
}

function calculateTotalPrice() {
  let items = JSON.parse(localStorage.getItem("cart"));
  let total = 0;
  if (items) {
    items.forEach((item) => {
      total += parseFloat(item.price); // Cộng giá của mỗi mặt hàng vào tổng
    });
  }
  return total.toFixed(2); // Làm tròn tổng đến 2 chữ số thập phân và trả về
}

function displayCartTotal() {
  cartTotalElement.textContent = calculateTotalPrice();
}

displayCartItems();
