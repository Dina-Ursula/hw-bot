"use strict"
// module 1, excercise 1

    // const productName = 'Droid';
    // const pricePerItem = 2000;
    // console.log(productName);
    // console.log(pricePerItem);

// exercise 2
    // let productName = "Droid";
    // let pricePerItem = 2000;
    // productName = "Repair droid";
    // pricePerItem = pricePerItem + 1500;;
    // console.log(productName);
    // console.log(pricePerItem);
// exercise 3
    // let topSpeed = 160;
    // let distance = 617.54;
    // let login = "mango935";
    // let isOnline = true;
    // let isAdmin = false;
    // console.log(topSpeed);
    // console.log(distance);
    // console.log(login);
    // console.log(isOnline);
    // console.log(isAdmin);
// exercise 4
    // const pricePerItem = 3500;
    // const orderedQuantity = 4;
    // const totalPrice = orderedQuantity * pricePerItem;
    // console.log(totalPrice);
// exercise 5
    // const productName = "Droid";
    // const pricePerItem = 3500;
    // const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
    // console.log(message);
// exercise 6
    // const pricePerDroid = 800;
    // const orderedQuantity = 6;
    // const deliveryFee = 50;
    // const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
    // const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    // console.log(message);
// exercise 7
    // function sayHi() {
    //     console.log("Hello, this is my first function!");
    // }
    // sayHi();
// exercise 8
    // function add(a, b, c) {
    // console.log(`Addition result equals ${a + b + c}`);
    // // Change code above this line
    // }
    // add(15, 27, 10);
    // add(10, 20, 30);
    // add(5, 10, 15);
// exercise 9
    // function add(a, b, c) {
    //     return a + b + c;
    // }

    // add(2, 5, 8); // 15

    // console.log(add(15, 27, 10));
    // console.log(add(10, 20, 30));
    // console.log(add(5, 10, 15));
// exercise 10
    // function makeMessage (name, price) {
    //     const message = `You picked ${name}, price per item is ${price} credits`;
        
    // return message;
    // };
    // console.log(makeMessage('box', 50));
// exercise 11
    // function calculateTotalPrice (orderedQuantity, pricePerItem) {
    //   const totalPrice = orderedQuantity * pricePerItem;

    //   return totalPrice;
    // };
    // console.log(calculateTotalPrice(4, 10)); 
    //выдуманные мной значения параметра в консоли
// exercise 12
    // function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    //     const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
    //     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

    //   return message;
    // }
    // console.log(makeOrderMessage(2, 100, 50));
    //выдуманные мной значения параметра в консоли
// exercise 13
    // function isAdult(age) {
    //   const passed = age >= 18;

    //   return passed;
    // }
    // console.log(isAdult(20));
    // console.log(isAdult(14));
// exercise 14
    //  function isValidPassword(password) {
    //   const SAVED_PASSWORD = 'jqueryismyjam';
    //   const isMatch = password === SAVED_PASSWORD;

    //   return isMatch;
    // }
    // console.log(isValidPassword('password'));
    // console.log(isValidPassword('jqueryismyjam'));
// exercise 15
    // function checkAge(age) {
    //   let message;

    //   if (age >= 18) { // Change this line
    //     message = 'You are an adult';
    //   } else {
    //     message = 'You are a minor';
    //   }

    //   return message;
    // }
    // console.log(checkAge(20));
    // console.log(checkAge(14));
// exercise 16
    // function checkStorage(available, ordered) {
    //   let message;
    //     if (ordered > available) {
    //         message = 'Not enought goods in stock!';
    //     } else {
    //         message = 'Order is processed, our manager will contact you.';
    // }
    //   return message;
    // }
    // console.log(checkStorage(100, 50));
    // console.log(checkStorage(150, 180));
// exercise 17
    // let a = 5;
    // let b = 10;
    // let c = 15;
    // let d = 20;

    // a += 2;
    // b -= 4;
    // c *= 3;
    // d /= 10;
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
// exercise 18
    // function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    //   let message;
    //   let totalPrice = pricePerDroid * orderedQuantity;

    //     if (totalPrice > customerCredits) {
    //         message = 'Insufficient funds!';
    //     } else {
    //        customerCredits = customerCredits - totalPrice;
    //         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
    //     }

    //   return message;
    // }
    // console.log(makeTransaction(3000, 5, 23000));
    // console.log(makeTransaction(500, 10, 5000));
    // console.log(makeTransaction(5000, 10, 8000));
    // console.log(makeTransaction(2000, 8, 10000));
    // console.log(makeTransaction(1000, 3, 15000));
// exercise 19
    // function checkPassword(password) {
    //   const ADMIN_PASSWORD = 'jqueryismyjam';
    //   let message;

    //   if (password === null) { // Change this line
    //     message =  'Canceled by user!';
    //   } else if (password === ADMIN_PASSWORD) { // Change this line
    //     message = 'Welcome!';
    //   } else {
    //     message = 'Access denied, wrong password!';
    //   }

    //   return message;
    // }
    // console.log(checkPassword(12344600));
    // console.log(checkPassword('jqueryismyjam'));
    // console.log(checkPassword('jhjgdk'));
// exercise 20
    // function checkStorage(available, ordered) {
    //   let message;
    //   // Change code below this line
    //     if (ordered === 0) {
    //         message = 'There are no products in the order!';
    //     } else if (ordered > available) {
    //     message = 'Your order is too large, there are not enough items in stock!'
    //     } else {
    //         message = 'The order is accepted, our manager will contact you'
    // }
    //   // Change code above this line
    //   return message;
    // }
    // console.log(checkStorage(100, 50));
    // console.log(checkStorage(100, 130));
    // console.log(checkStorage(70, 0));
// exercise 21
    // function isNumberInRange(start, end, number) {
    //   const isInRange = number >= start && number <= end; // Change this line

    //   return isInRange;
    // }
    // console.log(isNumberInRange(10, 30, 17));
    // console.log(isNumberInRange(10, 30, 5));
    // console.log(isNumberInRange(20, 50, 24));
// EXERCISE 22
    // function checkIfCanAccessContent(subType) {
    //   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

    //   return canAccessContent;
    // }
    // console.log(checkIfCanAccessContent('pro')); //true
    // console.log(checkIfCanAccessContent('qwaqwa')); //false
// exercise 23
    // function isNumberNotInRange(start, end, number) {
    //   const isInRange = number >= start && number <= end;
    //   const isNotInRange = !isInRange;

    //   return isNotInRange;
    // }
    // console.log(isNumberNotInRange(10, 30, 17));
    // console.log(isNumberNotInRange(10, 30, 5));
// exercise 24
