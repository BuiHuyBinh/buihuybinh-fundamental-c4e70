// 1.
// function hello (){
//     console.log("Hello world")
//     console.log("Hello world")
//     console.log("Hello world")
// }
// hello ()


// 2.
// function sum(x, y){    
//     a = x + y
//     console.log(a)   
// }
//     let x = 10
//     let y = 20
// sum(x, y)


// 3.
// function draw_square(length, color1){
//     for (let i = 0; i < 4; i++){
//         color(color1)
//         fd(length)
//         rt(90)
//     } 
// }
// draw_square(100, "red")


// 4.
// clear()
// function draw_square(length, color1){
//     for (let i = 0; i < 4; i++){
//         color(color1)
//         fd(length)
//         rt(90)
//     } 
//  }
//  draw_square(100, "red")
 
//  for (let i = 0; i  < 30; i ++){
//     drawSquare(i * 5, 'red')
//         lt(17)
// 		penup()
//         forward(i * 2)
//         pendown()
// }


// 5.
// clear()
// function draw_star(length){
// 	rt(18)
// 	for(let i = 0; i < 5; i++){
//     fd(length)
//     rt(144)
// 	}
// }
// draw_star(100)


// 6.
function remove_dollar_sign (){
    let str = $SS$
    let res = str.replace("$SS$", "SS")
    console.log(res)
}
remove_dollar_sign()
