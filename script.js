
confirm = window.confirm("Hey there! Would you like to order some tacos?");
prompt = window.prompt("How many tacos would ou like to order?")

console.log(confirm)
console.log(prompt)

function place_order(){
    console.log("Your order will contain" + prompt + "tacos!!!");  //This line confirms your order.
    console.log("Your total is:" + prompt*5 + "USD."); //This line gives you the total $ spent.
    for (let prompt = 0; prompt >= 15; i++){
        console.log("Your tacos are being prepared!!! 100% of your purchase will be dobated towards our caritable cause!", prompt);

    }
    
}

place_order()




