addEventListener("DOMContentLoaded", async function() {
    const username = localStorage.getItem("uname")
    const response = await fetch(`http://localhost:3000/api/user?username=${username}`)
    const user = await response.json()

    console.log(user.cart.length)

    let html = ""
    for (i = 0; i < user.cart.length; i++) {
        html+='<li><div class="display-3">' + user.cart[i] + '</div></li>'
    }

    document.querySelector("#cartList").innerHTML = html
})