let menu;
let balance = 1000;

do {

    menu = Number(prompt(
        "1. Check Balance\n" +
        "2. Deposit\n" +
        "3. Withdraw\n" +
        "4. Exit"
    ));

    switch(menu) {

        case 1:
            console.log("Current Balance:", balance);
            break;

        case 2:
            let depositAmount = Number(prompt("Enter Deposit Amount"));

            if (depositAmount > 0) {

                balance += depositAmount;

                console.log("Deposit Successful");
                console.log("Current Balance:", balance);

            } else {

                console.log("Invalid Deposit Amount");

            }

            break;

        case 3:

            let withdrawAmount = Number(prompt("Enter Withdraw Amount"));

            if (withdrawAmount <= 0) {

                console.log("Invalid Withdraw Amount");

            }
            else if (withdrawAmount > balance) {

                console.log("Insufficient Balance");

            }
            else {

                balance -= withdrawAmount;

                console.log("Withdraw Successful");
                console.log("Current Balance:", balance);

            }

            break;

        case 4:

            console.log("Thank You");
            break;

        default:

            console.log("Invalid Choice");

    }

} while(menu != 4);