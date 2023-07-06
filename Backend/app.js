const express = require("express")
const errorMiddleware = require("./middleware/error")
const cookieParser = require("cookie-parser")

const app = express();
app.use(express.json())
app.use(cookieParser())
const order = require("./routes/orderRoute")
const product = require("./routes/productRoute")
const user = require("./routes/userRoute")

app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)
app.use(errorMiddleware)



module.exports = app

// import express, use app as alias. 
// express.json to parse incoming client request, so that we can access url , status code, request body and manipulate stuff
// we are making two routes, one related to product (crud) other - user register and login
// for error handling, we use error middleware 