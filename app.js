/**
 * Created by joelmiller on 7/14/15.
 */
$(document).ready(function() {


    $.ajax("insert.html", {
        success: function(response){
            $(".myDiv").html(response);
        },
        error: function(){
            alert('There was an error when requesting your file!');
        },
        timeout: 3000,
        data: {"id" : "afs3reet3r4yrrt353"},
        //beforeSend: function(){
        //    alert("Before the request!");
        //},
        //complete: function(){
        //    alert("Request complete!")
        //}
    })

})