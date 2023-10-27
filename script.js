
confirm = window.confirm("Hey there! Would you like to order some tacos?");
prompt = window.prompt("How many tacos would you like to order? (Maximum amount is 99 tacos")

console.log(confirm)
console.log(prompt)

function place_order(){
    console.log("Your order will contain:  " + prompt + "   tacos!!!");  //This line confirms your order.
    console.log("Your total is:  " + prompt*5 + " USD."); //This line gives you the total $ spent.
    for (let i = prompt; i == prompt; i++){
        console.log("Your  " + prompt + "  tacos are being prepared 🌮");
        

    }
    
}

place_order()




