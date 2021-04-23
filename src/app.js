import express from "express";

const PORT = 3000;
const app = express();

const sum = (param1, param2) => {
    const reseult = parseInt(param1) + parseInt(param2)
    console.log(`결과는 ${reseult} 입니다.`)
}


app.listen(PORT, () => {
    console.log(`${PORT} server start`)
    sum(10, 20)
    sum(15, "30")
})