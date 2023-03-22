
//Đăng ký
function dangky(frm) {
    if (frm.name.value.length < 4) {
        alert("Tên tài khoản quá ngắn, nhập lại!");
        frm.name.focus();
        return false;
    }
    window.localStorage.setItem("nameaccount", JSON.stringify(frm.name.value))
    if (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(frm.email.value) ==
        false
    ) {
        alert("Email không đúng nhập lại!");
        frm.email.focus();
        return false;
    }
    window.localStorage.setItem("email", JSON.stringify(frm.email.value))
    if (frm.pw.value.length < 8) {
        alert("Mật khẩu quá ngắn, vui lòng nhập hơn 8 kí tự!");
        frm.pw.focus();
        return false;
    }
    if (frm.rpw.value !== frm.pw.value) {
        alert("Mật khẩu không trùng khớp, nhập lại!");
        frm.rpw.focus();
        return false;
    }
    window.localStorage.setItem("address", JSON.stringify(frm.addr.value))
    if (/^\d{10}$/.test(frm.phone.value) == false) {
        alert("Nhập sai số điện thoại, nhập lại!");
        frm.phone.focus();
        return false;
    }
    window.localStorage.setItem("phone", JSON.stringify(frm.phone.value))

    alert("Đăng ký thành công!");
    indexCode = 1;
    window.localStorage.setItem("indexcode", JSON.stringify(indexCode))
    return true;
}

//Đăng nhập
function dangnhap(frm) {
    if (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(frm.email.value) ==
        false
    ) {
        alert("Sai định dạng email, nhập lại!");
        frm.email.focus();
        return false;
    }
    if (frm.pw.value.length < 8) {
        alert("Mật khẩu sai, nhập lại!");
        frm.pw.focus();
        return false;
    }
    alert("Đăng nhập thành công!");
    indexCode = 2;
    window.localStorage.setItem("indexcode", JSON.stringify(indexCode))
    return true;
}