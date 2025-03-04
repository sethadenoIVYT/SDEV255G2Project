let token

window.onload=function(){
document.querySelector("#loginBtn").addEventListener("click",function() {
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    login(username, password)
})}
//test
async function login(username, password) {
    const login_cred = {
        username,
        password
    }

    const response = await fetch("https://lowly-cool-pony.glitch.me/api/auth/", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(login_cred)

    })

    if(response.ok) {
        const tokenResponse = await response.json()
        token = tokenResponse.token
        uname = tokenResponse.username2
        auth = tokenResponse.auth
        teacher = tokenResponse.teacher

        console.log(token)

        localStorage.setItem("token", token)
        localStorage.setItem("uname", uname)
        localStorage.setItem("auth", auth)
        localStorage.setItem("teacher", teacher)

        window.location.href = "index.html"
    }
    else {
        document.querySelector("errorMsg").innerHTML = "Bad username and Password"
    }

}
