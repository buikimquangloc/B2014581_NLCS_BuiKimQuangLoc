

function getfooter() {
  document.write(`
    <hr>
    <p class="text-center">&copy; Copyright 2023. Website được thiết
    kế
    bởi cá nhân Bùi Kim
    Quang Lộc.</p>
    `)

}
function getheader() {
    document.write(`
    <body class="w-75 m-auto">
    
    <div class="d-flex">

      <img src="/HTML/IMG/channels4_profile.jpg" class="img-fluid m-2"
        width="100" height="100" alt="">
      <div>
      <h2 class="m-2 text-center">GIỚI THIỆU VỀ Y HỌC CỔ TRUYỀN</h2>
      <div class="">
          <ul class="nav nav-tabs col-12 justify-content-center ">
            <li class="nav-item">
              <a class="nav-link" href="Trangchu.html">Home page</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Caclinhvuc.html">Các lĩnh vực</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Sanphamthietbi.html">Trang sản phẩm -
                thiết bị</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Thuocnam.html">Thuốc nam</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Chungchi.html">Các loại chứng chỉ</a>
            </li>
            <!-- <li class="nav-item">
                    <a class="nav-link disabled">Thuốc nam</a>
                  </li> -->
          </ul>
        </div>
      </div>
      </div>
      <div class="d-flex justify-content-end">
      <button class=" justify-content-end btn btn-success"><a
          href="../HTML/dangnhap.html" class="text-light">Đăng nhập</a></button>
      <button class=" justify-content-end btn btn-success"><a
          href="../HTML/dangnhap.html" class="text-light">Đăng ký</a></button>
    </div>
  </body>
    `)
}