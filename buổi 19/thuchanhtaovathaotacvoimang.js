let array = Array("Nguyen Van A","Nguyen Van B");

function add_element_to_array() {
    console.log(document.getElementById("txtValue").value)
    array.push(document.getElementById("txtValue").value);
    alert("Hoc sinh: " + array[array.length-1]);
}

function delete_last_element() {
    array.pop();
}

function display_array() {
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
    e += "Số thứ tự học sinh  " + array[i] + "  là:  " + i + "<br/>";
    }
document.getElementById("result").innerHTML = e;
}