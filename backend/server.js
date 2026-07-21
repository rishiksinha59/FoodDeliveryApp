import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import path from "path"
import fs from "fs"
 //app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter) 
app.use('/images', express.static(path.join(process.cwd(), 'uploads')))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get("/api/debug-files", (req, res) => {
    try {
        const getFiles = (dir) => {
            const dirents = fs.readdirSync(dir, { withFileTypes: true });
            return dirents.map((dirent) => {
                const resPath = path.resolve(dir, dirent.name);
                return dirent.isDirectory() ? { name: dirent.name, type: 'dir', files: getFiles(resPath) } : { name: dirent.name, type: 'file' };
            });
        };
        res.json({ cwd: process.cwd(), files: getFiles(process.cwd()) });
    } catch (err) {
        res.json({ error: err.message });
    }
});

app.get("/", (req,res)=>{
    res.send('API is running...')
})
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})

// mongodb+srv://sinharishik8:rishik1234@cluster0.sdvsl.mongodb.net/?