const db = require("../db")

const User = db.model("User", {
    username: {type: String, required: true},
    password: {type: String, required: true},
    status: {type: String, default: "online"},
    teacher: {type: Boolean, default: false},
    cart: [String]
})

module.exports = User;