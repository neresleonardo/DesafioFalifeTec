import express, { NextFunction, Request, Response } from "express";
import "express-async-errors"

const app = express()

// Usando o formato Json
app.use(express.json())
// Colocando as rotas 

// Tratando as excerções

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            message:err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    })
})

app.listen(3000, () => {
    console.log("Correndo em 3000");  
})