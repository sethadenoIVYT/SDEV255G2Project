function checkAuth(){
    if(localStorage.getItem("teacher") == "true"){
        window.location.replace("index.html")
    }
}

checkAuth()