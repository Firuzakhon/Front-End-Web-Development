$(function)() {
    console.log("Hello!")

    $("#submit").click(function(){
        submit();
    });
});
function submit() {
    alert("Your application have been submitted. Thank you!");
}