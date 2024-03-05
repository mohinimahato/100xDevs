export function GET(){
    // database logic
    return  Response.json({
        email: "mohini@gmail.com",
        name:"mohini"
    })
}
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