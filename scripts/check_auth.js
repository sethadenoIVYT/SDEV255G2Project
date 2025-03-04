function checkAuth(){
    if(localStorage.getItem("uname") === "IvyStudent"){
        window.location.href = "index.html"
    }
}

checkAuth()
