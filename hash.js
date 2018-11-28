const bcrypt = require('bcrypt'); 
const{MD5} = require('crypto-js')
const jwt = require('jsonwebtoken')


// bcrypt.genSalt(10,(err,salt)=>{
//     if(err) return next(err)
//     bcrypt.hash('password123',salt,(err,hash)=>{
//         if(err) return next(err)
//         console.log(hash)
//     })
// })




// const secret ="secretpassword"
// const secretSalt="somerandomletters"

// const user ={
//     id:1,
//     token:MD5("hashedpassword").toString()+secretSalt

// }
// const recievedtoken ='fdc94bf9572d3d1dc136a73a75c05666somerandomletters'
// if(recievedtoken=== user.token){
//     console.log('move on')
// }
// console.log(user)
const id ='1000'
const secret = 'supersecret'

const recievedtoken ='eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y'
const token = jwt.sign(id,secret)
const decodeToken = jwt.verify(recievedtoken,secret)

console.log(decodeToken)