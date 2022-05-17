let button = document.getElementById("button1");

button.addEventListener("click",function() {
    // get the value with user types
    let pincode = document.getElementById("pincode1").value;

    let state = document.getElementById("state1").value;

    let district = document.getElementById("district1").value;

    let bloodGroup =document.getElementById("bg1").value;

    if(state == ""|| district =="" ||pincode == "" || bloodGroup == "Select Blood Group")
    {
        alert("Please enter the fields");
    }
    else
    {       firebase.database().ref(pincode+'/'+bloodGroup).on('value',function(snapshot){
            var txt='';
            txt = txt + '<h1>Donor details : -</h1>';
            txt = txt + '<p><strong>Pincode : </strong>'+pincode+'</p><p><strong>Selected BloodGroup : </strong>'+bloodGroup+'</p>';
            txt = txt + '<table><tr><th>Name</th><th>Gender</th><th>Age</th><th>Contact</th><th>Date of Suspect</th><th>Date of Recovery</th><th>Report</th></tr>';
            snapshot.forEach(element => {
                txt = txt + '<tr><td>'+element.val().Name + '</td><td>'+element.val().Gender+'</td><td>'+element.val().Age+'</td><td style=""color:red>' + element.val().Contact + '</td><td>'+element.val().Date_Of_Suspect+'</td><td>'+element.val().Date_Of_Recovery+'</td><td><a href="'+element.val().Link+'"target="_blank">'+element.val().Aadhaar+'</a></td></tr>';
            });
            txt = txt + '</table> <br><br>';
            document.getElementById("output").innerHTML=txt;
        });
        alert("successfull");
        // pushing the object to the reference records
    }
})