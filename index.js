let z = true,
    pas = document.getElementById("hoe");

function on() {
    z = !z
    if (z == true) {

        pas.type = "text"
    } else {
        pas.type = "password"
    }
}