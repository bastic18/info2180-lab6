


// var xml= new XMLHttpRequest();
// var url= "/superheroes.php";
// xml.onreadystatechange= getname();
// xml.open("GET",url);
// xml.send();

// function getname(){
//     if (xml.readyState=== XMLHttpRequest.DONE){
//         if (xml.status===200){
//             var response= xml.responseText;
//             alert(response);
//         } else {
//             alert ("there was a problem getting the names");
//         }
//     }
    
// }

// $(document).ready(function(){
// });


// document.ready(function(){

// var xml= new XMLHttpRequest();
// var url= "/superheroes.php";
// xml.onreadystatechange= getname();
// xml.open("GET",url);
// xml.send();

// function getname(){
//     if (xml.readyState=== XMLHttpRequest.DONE){
//         if (xml.status===200){
//             var response= xml.responseText;
//             //alert(response);
//             document.getElementById('result').innerHTML= response;
//             console.log(response);
//         } else {
//             alert ("there was a problem getting the names");
//         }
//     }
    
// }

// document.getElementById("submit").addEventListener("click",()=> {
//     getname();
// });

// });


window.onload= function(){
    // $("#submit").mouseover(function(){
        
     //let search = $('inputname').val();
       // search= search.trim();
    //     $.ajax("superheroes.php", {
    //         method: 'GET',
    //         data: {
    //             query: searchName
    //         }
    //     }).done(function(response){
    //         let resp = response;
    //         $('#result').html(resp);
    //     }).fail(function(){
    //         alert('There was an issue with the request.');
    //     });
        
        
    // });
    
    

document.getElementById("submit").addEventListener("click",function(e){
    e.preventDefault();
        
let search= $("#ser").val();
let xml= new XMLHttpRequest();
let url= "superheroes.php";
xml.onreadystatechange= getname;
xml.open("GET",url+'?query='+search);
xml.send();

function getname(){
    if (xml.readyState=== XMLHttpRequest.DONE){
        if (xml.status===200){
            var response= xml.responseText;
            alert(search);
          // alert(response);
            document.getElementById('result').innerHTML= response;
            console.log(response);
        } else {
            alert ("there was a problem getting the names");
        }
    }
    
}

});

    
    
}

