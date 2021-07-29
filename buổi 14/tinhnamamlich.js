function tra() {
    let nam = document.getElementById("namduonglich").value;

    let can = nam % 10;
    let can_la;
        switch (can) {
            case 0:
                can_la = "Canh";
                break;
            case 1:
                can_la = "Tân";
                break;
            case 2:
                can_la = "Nhâm";
                break;
            case 3:
                can = "Quý";
                break;
            case 4:
                can_la = "Giáp";
                break;
            case 5:
                ccan_la = "Ất";
                break;
            case 6:
                can_la = "Bính";
                break;
            case 7:
                can_la = "Đinh";
                break;
            case 8:
                can_la = "Mậu";
                break;
            case 9:
                can_la = "Kỷ";
                break;
        }

    let chi = nam % 12;
    let chi_la;
        switch (chi) {
            case 0:
                chi_la = " Thân";
                break;
            case 1:
                chi_la = " Dậu";
                break;
            case 2:
                chi_la = " Tuất";
                break;
            case 3:
                chi_la = " Hợi";
                break;
            case 4:
                chi_la = " Tí";
                break;
            case 5:
                chi_la = " Sửu";
                break;
            case 6:
                chi_la = " Dần";
                break;
            case 7:
                chi_la = " Mẹo";
                break;
            case 8:
                chi_la = " Thìn";
                break;
            case 9:
                chi_la = " Tỵ";
                break;
            case 10:
                chi_la = " Ngọ";
                break;
            case 11:
                chi_la = " Mùi";
                break;
        }

    document.getElementById("result").innerHTML = "Năm âm lịch là: " + can_la + chi_la ;
}