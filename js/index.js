function appoint(){
    /* firstly get value from the time day people fields*/
    let people = document.getElementById("people").value;
    let day = document.getElementById("day").value;
    let time = document.getElementById("time").value;

    // check if the values are successfullt got
    console.log(people,day,time);

    // good and succeeded so proceed


    // show the values on the field below appointments:...

    let record1 = document.getElementById("record1");

    let record2 = document.getElementById("record2");

    let record3 = document.getElementById("record3");

    
    record1.innerHTML = people + " people";

    record2.innerHTML = day;

    record3.innerHTML = time + ":00";

    // * succeeded! remember to ask teacher can i delete the other js file which is not related to index.html (delete the comment after asking teachers)

   
}