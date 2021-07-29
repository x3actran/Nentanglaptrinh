function tinh_diem() {
    let toan = +document.getElementById("toan").value;
    let van = +document.getElementById("van").value;
    let anh = +document.getElementById("anh").value;
    

    let uu_tien = document.getElementById("uu_tien").value;
    
    

    switch (uu_tien) {
        case 'KV1':
            uu_tien = 0.75;
            break;
        case 'KV2-NT' :
            uu_tien = 0.5;
            break;
        case 'KV2' :
            uu_tien = 0.25;
            break;
        case 'KV3' :
            uu_tien = 0;
            break;
    }
    let tong = toan + van + anh + uu_tien;
    
    document.getElementById("ket_qua").innerHTML = "Điểm tổng của bạn là: " + tong;
}