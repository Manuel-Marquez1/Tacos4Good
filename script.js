// The following will help us develop with better developer practices.
"use strict"

console.log("This is my nonprofit prototype webpage");
alert("Welcome to my New page!!!");

// One dynamic component - user input.
//We need to store the resulting info in another variable. console.log(user_Name)

const user_Name = prompt("What is your first name?");
console.log(user_Name);




// Something new. In here you decide what you want to write to the document.
//string concatenation
document.write("Hi" + user_Name + "How is it going?");
document.write("Your favorite hot sauce brand is" + sauce + "mine is Tabasco")
document.write("You said" + service + "to volunteering!!!")

//Conditional logic - capitalization matters in Js.



if (user_Name == "Cameron"){
    alert("Hey Cam! Please give me a good grade :)");
} else if(user_Name == "cameron"){
    alert("Hey Cam! Please give me a good grade");
} else if (user_Name != "Cameron"){
    alert ("Good to see you, this is your sign to go and get tacos!!!")
}
else {
    alert("Feel free to donate to our cause. Link below!!!")
}
// Volunteering

if (service == "No"){
    alert("Hey it is never too late to become a volunteer!");
} else {
    alert("Congrats for volunteering! We are so proud of you!")
}

//spicy food
if (permission = "Ok"){
    alert("Wow, you are so brave!")
}





