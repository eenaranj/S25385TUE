/*
SID: 12345678
Name: Eduardo Naranjo
File: store_script.js
10 points
*/

// option 3: immediately invoked function expression
(function(){
    var my_array = [
        "CIS100",   // 0 
        "CIS200",  // 1
        "CIS385",   // 2
        "CIS485"
    ];

    var desc = [
        "Introduction to Computer Applications",
        "Introduction to Systems and Technology",
        "Web Programming I",
        "Web Programming II"
    ];

    var prod_price = [
        "3CRS.4HRS",
        "3CRS.4HRS",
        "3CRS.4HRS",
        "3CRS.4HRS"
    ];
    //<img src="images/baf1.jpeg" alt="Desc 1" style="width: 25%;">
    var images = [
        "baf1",
        "baf2",
        "baf3",
        "baf4"
    ];

    var table_row = "";

    for (var i = 0; i < my_array.length; i++) {
        table_row += "<tr>";
        table_row += "<td>" + my_array[i] + "</td>";
        table_row += "<td>" + desc[i] + "</td>";
        table_row += "<td>" + prod_price[i] + "</td>";
        // table_row += "<td><img src='images/" + images[i] + 
        //     ".jpeg' alt='Desc 1' style=\"width: 25%;\"></td>";
        table_row += "</tr>";
        console.log(my_array[i]);
    }

    document.getElementById("products_table").innerHTML = table_row;
})();