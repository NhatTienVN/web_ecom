Mã JavaScript bạn cung cấp sử dụng thư viện ScrollReveal để tạo hiệu ứng hiển thị khi cuộn trang web. Dưới đây là giải thích về từng đoạn mã:

1. **ScrollReveal().reveal(".top_nav", {...});**: Đoạn mã này áp dụng hiệu ứng hiển thị cho phần tử có lớp là "top_nav" khi nó được cuộn vào vùng nhìn thấy của trình duyệt. Cụ thể:

   - **origin**: "bottom" - Hiệu ứng xuất phát từ phía dưới.
   - **distance**: "20px" - Khoảng cách di chuyển từ điểm bắt đầu của hiệu ứng.
   - **opacity**: 0 - Độ mờ ban đầu của phần tử trước khi nó được hiển thị.
   - **delay**: 0 - Thời gian trễ trước khi hiển thị phần tử, tính bằng mili giây.

2. **ScrollReveal().reveal(".nav", {...});**: Tương tự như trên, hiệu ứng được áp dụng cho phần tử có lớp là "nav", với một số thiết lập như trên và có thêm delay là 100ms.

3. **ScrollReveal().reveal(".header", {...});**: Hiệu ứng được áp dụng cho phần tử có lớp là "header", với các thiết lập tương tự như trên và có thêm delay là 200ms.

4. **ScrollReveal().reveal(".section", {...});**: Tương tự như trên, hiệu ứng được áp dụng cho phần tử có lớp là "section", với các thiết lập tương tự nhưng có thêm duration (thời gian hoàn thành hiệu ứng) là 1000ms và delay là 100ms.

5. **ScrollReveal().reveal(".footer", {...});**: Hiệu ứng được áp dụng cho phần tử có lớp là "footer", với các thiết lập tương tự như trên và có thêm duration và delay là 1000ms và 100ms tương ứng.

Như vậy, khi trang web được cuộn, các phần tử có lớp tương ứng sẽ xuất hiện với hiệu ứng từ phía dưới và dần dần trở nên rõ ràng, tạo ra một trải nghiệm đồng nhất và thú vị cho người dùng.

[ScrollReveal](https://www.youtube.com/watch?v=nZIkHzIRrkg)
https://scrollrevealjs.org/api/clean.html

[Slide](https://swiperjs.com/demos)



sử dụng icon của gg 
https://developers.google.com/fonts/docs/material_symbols?hl=vi#use_in_web

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/scrollreveal"></script>
    <!-- Link Swiper's CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <link rel="stylesheet" href="./css/styles.css" />
    <title>Home - Exclusive E-Commerce Website</title>
  </head>
  <body>
    <div class="top_nav">
      <div class="container top_nav_container">
        <div class="top_nav_wrapper">
          <p class="tap_nav_p">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#" class="top_nav_link">SHOP NOW</a>
        </div>
      </div>
    </div>
    <nav class="nav">
      <div class="container nav_container">
        <a href="#" class="nav_logo">EXCLUSIVE</a>
        <ul class="nav_list">
          <li class="nav_item"><a href="/" class="nav_link">Home</a></li>
          <li class="nav_item"><a href="#" class="nav_link">About</a></li>
          <li class="nav_item"><a href="#" class="nav_link">Contact</a></li>
          <li class="nav_item">
            <a href="./sign-up.html" class="nav_link">Sign up</a>
          </li>
        </ul>
        <div class="nav_items">
          <form action="#" class="nav_form">
            <input
              type="text"
              class="nav_input"
              placeholder="search here...." />
            <img src="./image/search.png" alt="" class="nav_search" />
          </form>
          <img src="./image/heart.png" alt="" class="nav_heart" />
          <a href="/cart.html">
            <img src="./image/cart.png" alt="" class="nav_cart" />
          </a>
        </div>
        <span class="hamburger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </span>
      </div>
    </nav>
    <nav class="mobile_nav mobile_nav_hide">
      <ul class="mobile_nav_list">
        <li class="mobile_nav_item">
          <a href="/" class="mobile_nav_link">Home</a>
        </li>
        <li class="mobile_nav_item">
          <a href="#" class="mobile_nav_link">About</a>
        </li>
        <li class="mobile_nav_item">
          <a href="#" class="mobile_nav_link">Contact</a>
        </li>
        <li class="mobile_nav_item">
          <a href="/sign-up.html" class="mobile_nav_link">Sign Up</a>
        </li>
        <li class="mobile_nav_item">
          <a href="/cart.html" class="mobile_nav_link">Cart</a>
        </li>
      </ul>
    </nav>



    <footer class="footer">
      <div class="container footer_container">
        <div class="footer_item">
          <a href="#" class="footer_logo">Exclusive</a>
          <div class="footer_p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem fuga harum voluptate?
          </div>
        </div>
        <div class="footer_item">
          <h3 class="footer_item_titl">Support</h3>
          <ul class="footer_list">
            <li class="li footer_list_item">Stockholm, Sweden</li>
            <li class="li footer_list_item">email@gmail.com</li>
            <li class="li footer_list_item">+46 123 456 78</li>
            <li class="li footer_list_item">+46 72 345 67</li>
          </ul>
        </div>
        <div class="footer_item">
          <h3 class="footer_item_titl">Support</h3>
          <ul class="footer_list">
            <li class="li footer_list_item">Account</li>
            <li class="li footer_list_item">Login / Register</li>
            <li class="li footer_list_item">Cart</li>
            <li class="li footer_list_item">Shop</li>
          </ul>
        </div>
        <div class="footer_item">
          <h3 class="footer_item_titl">Support</h3>
          <ul class="footer_list">
            <li class="li footer_list_item">Privacy policy</li>
            <li class="li footer_list_item">Terms of use</li>
            <li class="li footer_list_item">FAQ's</li>
            <li class="li footer_list_item">Contact</li>
          </ul>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="container footer_bottom_container">
          <p class="footer_copy">
            Copyright Exclusive 2023. All right reserved
          </p>
        </div>
      </div>
    </footer>

    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="./js/app.js"></script>
  </body>
</html>









