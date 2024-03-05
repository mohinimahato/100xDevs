// export function GET(){
//     // database logic
//     return  Response.json({
//         email: "mohini@gmail.com",
//         name:"mohini"
//     })
// }
// In express we write it like
/**
app.get("/api/user". (req,res)=>{
    res.json({
        email: "mohini@gmail.com",
        name:"mohini"
    })
}) 

 * 
 */

import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export async function POST(req:NextRequest) {
    // extract the body
    const body = await req.json();
   await client.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    })
    // store the body in the database
    console.log(body);

    return Response.json({
        message: "You are logged in!"
    })
    
}