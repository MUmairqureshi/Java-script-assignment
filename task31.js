//task 31
// const age = [2 , 4,13,20,65,]
// while(age.length > 0)
// {
//     age.pop();
// }
//  console.log(age)
//  if(age.length === 0) {
//     console.log("We need to find some users")
//  }
//  else{
//     console.log("list is full")
//  }






















// task 32
// const current_users = [ " Umair" , "Hammad" , "JOHN" ,  " owais" , " Sajid" , " Ubaid"   ]
// const new_users = [ " Umair" , "Hammad" , "Huzaifa","John" , " Anas" , "Adil" , "Daniyal"]
// for(let i = 0 ; i < new_users.length ; i++ ){
//      if(new_users[i] == current_users[i]  ){
//         console.log(new_users[i]  +"  the person will need to enter a new username")
//     }

//     else{
//         console.log(new_users[i] + " the username is available.")
//     }
// }




















// task 33

// cont = ordinalnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < ordinalnumbers.length; i++) {
//   if (ordinalnumbers[i] === 1) {
//     console.log(ordinalnumbers[i] + "st");
//   } else if (ordinalnumbers[i] === 2) {
//     console.log(ordinalnumbers[i] + "nd");
//   } else if (ordinalnumbers[i] === 3) {
//     console.log(ordinalnumbers[i] + "rd");
//   }
//   else{
//     console.log(ordinalnumbers[i]+"th")
//   }
// }

















// task34
// const pizza = [" Cheese  ", " Veggie ", "  BBQ Chicken"];
// for (let i = 0; i < pizza.length; i++) {
//   console.log("I like pepperoni" + pizza[i] + " pizza");
// }
// console.log(" how much you like pizza. I really love pizza!");














// task35

// let animals = ["cat", "dog", "hamster"]
// let comman = " "
// for(let i =  0 ; i < animals.length ; i ++ ){
// // comman += animals[i] +  " will make a great pet!"  + " \n"
// console.log(animals[i] +  " will make a great pet!"  + " \n")
// }
// console.log("Any of these animals would make a great pet!")













// task36

// function Make_shirt(size, message) {
//   console.log(size, message);
// }

// Make_shirt(2, " Tshirt size is medium ");
// Make_shirt(3, " Tshirt size is Large ");

// task37
// function Make_shirt(size, message) {
//   console.log(size, message);
// }

// Make_shirt((size = " Medium"), (message = " I love JavaScript."));
// Make_shirt((size = "large"), (message = " I love large size."));










// task38

// function describe_city( city ,  country='Pakistan'){
//     console.log(city, " is in ", country)
// }
// describe_city("Karachi" )
// describe_city("Lahore")
// describe_city("Hyderabad")
// describe_city("Virginia " , " USA")














// task39

// function city_country(city, country) {
//       locaton =  city + "  " + country
// console.log(locaton)
// }
//  city_country(" Lahore"  ,"Pakistan")
// city_country(" Hyderabad"  ,"Pakistan")
// city_country(" Virginia"  ,"USA")


 









// task40

 


// function make_album(artist, album) {
//   console.log("{ Album: " + album + ", " + "Artist: " + artist + " }");
// }


// make_album("Marvin Gaye", "What's Going On");
// make_album("Fleetwood Mac", "Rumours");
// make_album("Prince and the Revolution", "Purple Rain");















// task 41

// function show_magicians(magicians) {
//   for (let i = 0; i < magicians.length; i++) {
//     console.log(magicians[i]);
//   }
// }
// let magicians_names = ["Yasir ", "iqball ", "nawaz"];
// show_magicians(magicians_names);
 

 
  




// task42
// function show_magicians(magicians) {
//   for (let i = 0; i < magicians.length; i++) {
//     console.log(magicians[i]);
//   }
// }

//  function  make_great(name ) {

//     for (let i = 0; i < name.length; i++) {
//         magicians_names =  name[i] + "  "   + "the Great"
//        console.log(magicians_names);
//     }
// }
// let show_name = ["Yasir ", "iqball ", "nawaz"];
// show_magicians(show_name);
// make_great(show_name);






 












 





















// task43

// function show_magicians(name) {
//   for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
//   }
// }

// function make_great(name_m) {
//   for (let i = 0; i < name_m.length; i++) {
//     magicians_names = name_m[i] + "  " + "the Great";

//     console.log(magicians_names);
//   }
// }

// let show_name = ["Yasir ", "iqball ", "nawaz"];
// show_magicians(show_name);
// console.log("\nGreat Magacian");

// make_great(show_name);
// console.log("\nOriginal Magacian:");
// show_magicians(show_name);

















// task 44
// function person(...number) {
//   for (let i = 0; i < number.length; i++) {
//     console.log(number[i] + " I like sendwitch" + "\n");
//   }
// }

// person("burger", " broast", " zinger", "roll");
// person("pizza", " broast");
// person("nugets", " broast");
























 
// // task 45

// function car(munufacture, model , name, ...opction) {
 
//   const info = {
//     munufacture: munufacture,
//     model: model,
//     name:name ,
//     opction : [...opction]
//   };
 
//   return info;
// }
// console.log(car('subaru', 'outback', color='blue', tow_package =  false) );
 
 
 