document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#cartBtn").addEventListener("click", async function() {
        alert("Item Was Added To Cart");
        const urlparam = new URLSearchParams(window.location.search);
        const courseID = urlparam.get('id');
        console.log(courseID);

        const response = await fetch("http://localhost:3000/api/courses/" + courseID);
        const course = await response.json();
        console.log(course.number);
        addToCart(course.number);
    });

    document.querySelector("#removeCtBtn").addEventListener("click", async function() {
        alert("Item Has Been Removed From The Cart");
        const urlparam = new URLSearchParams(window.location.search);
        const courseID = urlparam.get('id');
        console.log(courseID);

        const response = await fetch("http://localhost:3000/api/courses/" + courseID);
        const course = await response.json();
        console.log(course.number);
        removeCart(course.number);
    });
});

async function addToCart(number) {
    const username = localStorage.getItem("uname");
    
    const response = await fetch("http://localhost:3000/api/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            number: number
        })
    });

    const data = await response.json();
    console.log("Course added to cart:", data);
}

async function removeCart(number) {
    const username = localStorage.getItem("uname");
    
    const response = await fetch("http://localhost:3000/api/user", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            number: number
        })
    });

    const data = await response.json();
    console.log("Course removed from cart:", data);
}
