function xem_gia() {
    let gia = document.getElementById("gia").value;
    switch (gia) {
        case 'oi':
            gia = 20000;
            break;
        case 'duahau':
            gia = 20000;
            break;
        case 'tao':
            gia = 30000;
            break;
        case 'xoai':
            gia = 30000;
            break;
        case 'cam':
            gia = 40000;
            break;
        case 'chomchom':
            gia = 40000;
            break;
        case 'mangcut':
            gia = 50000
            break;
    }
    document.getElementById("result").innerHTML = gia + " VND/kg";
}