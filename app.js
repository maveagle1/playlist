
var searchbutton = $(".btn-lg")
   // console.log(searchbutton)
searchbutton.click(function(event){
  // prevent the default Action
   event.preventDefault();
    // console.log("Does the click works")
   if (event) {
    //console.log("My if statement works.....")
   $.get("https://lit-fortress-6467.herokuapp.com/object", function(data) {
      // console.log(data);
   var searchDataArray = data["results"];
   var playList = [];
     //console.log(data["Search"]);
     for (var i = 0; i < searchDataArray.length; i++) {   //push movies in to array.
       playList.push(searchDataArray[i]);
     }
   })
   for (var i = 0; i < playList.length; i++) {
     playList[i].needLocation //add later once page 2 coding is complete.
   }
 }
})
var screenheight100 = css('height', '100%');
$('.btn-lg').click(function(){
    $("html, body").animate({ scrollTop: (screenheight100)}, 600);
    return false;
 });
