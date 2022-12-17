function form_validation() {

   // firstname
   let fname = document.form1.fname.value;
   if (fname == "") {
       document.getElementById("fname_msg").innerHTML = "enter first name"
       return false;
   } else if (!isNaN(fname)) {
       document.getElementById("fname_msg").innerHTML = "enter alphbets olny"
       return false;
   }

   // middlename
   let mname = document.form1.mname.value;
   if (mname == "") {
       document.getElementById("mname_msg").innerHTML = "enter middle name"
       return false;
   } else if (!isNaN(mname)) {
       document.getElementById("mname_msg").innerHTML = "enter alphbets olny"
       return false;
   }

   // lastname
   let lname = document.form1.lname.value;
   if (lname == "") {
       document.getElementById("lname_msg").innerHTML = "enter last name"
       return false;
   } else if (!isNaN(lname)) {
       document.getElementById("lname_msg").innerHTML = "enter alphbets olny";
       return false;
   }

   // address
   let adrs = document.form1.add.value;
   if (adrs == "") {
       document.getElementById("add_msg").innerHTML = "enter address";
       return false;
   }

   // Date
   let date = document.form1.date.value;
   if (date == "") {
       document.getElementById("date_msg").innerHTML = "fill the date"
       return false;
   }

   // gender
   let male = document.form1.gen[0].checked;
   let female = document.form1.gen[1].checked;
   if (male == false && female == false) {
       document.getElementById("gen_msg").innerHTML = "select gender"
       return false;
   }

   // Experience
   let ex = document.form1.drop.value;
   if (ex == -1) {
       document.getElementById("drop_msg").innerHTML = "select experience"
       return false;
   }

   // mobile number
   function form_valid() {
       let mobile = document.form1.nmo.value;
       if (mobile == "") {
           document.getElementById("msg_mno").innerHTML = "enter your mobile no";
           return false
       }
       else if (isNaN(mobile)) {
           document.getElementById("msg_mno").innerHTML = " you enter alaphabets";
           return false;
       }
       else if (mobile.length < 10) {
           document.getElementById("msg_mno").innerHTML = " mobile no is less then 10 digites";
           return false;
       }
   }

   //  email
   let mail = document.form1.mail.value;
   if (mail == "") {
       document.getElementById("mail_msg").innerHTML = "enter email"
       return false;
   }
}
function hide_show() {
   let pass = document.form1.pass;
   if (pass.type == "password") {
       pass.type = "text";
   } else {
       pass.type = "password";
   }
}