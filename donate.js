let button = document.getElementById("button2");

button.addEventListener("click",function() {
    // get the value with user types
    let name = document.getElementById("name").value;

    let gender = document.getElementById("gender").value;

    let age = document.getElementById("age").value;

    let contact = document.getElementById("contact").value;

    let pincode = document.getElementById("pincode").value;

    let state = document.getElementById("state").value;

    let district = document.getElementById("district").value;

    let bloodGroup =document.getElementById("bg").value;

    let aadhaar =document.getElementById("aadhaar").value;

    let date_of_covid =document.getElementById("date_of_covid").value;

    let date_of_recovery =document.getElementById("date_of_recovery").value;

    const ref =firebase.storage().ref();

    const file =document.querySelector('#file').files[0];

    if(name == ""|| contact =="" || age=="" || gender=="Select your Gender"||pincode == "" || state == "" || district =="" || bloodGroup=="SelectBloodGroup" || aadhaar ==""){
        alert("Please enter the fields");
    }
    else
    {
        const metadata = {
            contentType : file.type
        }
        const task =ref.child(aadhaar).put(file,metadata);
        var link;
        task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        console.log(url);
        link = url;
        firebase.database().ref(pincode+'/'+bloodGroup+'/'+aadhaar).set({
            Name : name,
            Age : age,
            Gender : gender,
            Contact : contact,
            Pincode : pincode,
            State : state,
            District :district,
            BloodGroup :bloodGroup,
            Aadhaar : aadhaar,
            Link : link,
            Date_Of_Suspect : date_of_covid,
            Date_Of_Recovery : date_of_recovery
        });
        alert("Image Upload Successful");
        // const imageelement = document.createElement('image')
    })
        
        alert("successfull");
        // pushing the object to the reference records

       
    }
})