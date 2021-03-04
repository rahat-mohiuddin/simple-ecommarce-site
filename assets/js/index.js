//Switch Login & Signup form

 $(document).ready(function () {
     $("#regi_form").hide();

     $("#toggleBtn").click(function () {
         $("#login_form, #regi_form").toggle();
     });


     $("#toggleBtn").click(function () {
         if ($(this).text() == "New User Ragistration") {
             $(this).text("Log in");
         } else {
             $(this).text("New User Ragistration");
         };
     });


     //Checkout page -> Diffrent Shipping Address
     $(".shippingAdress").hide();
     $("#diff_address").click(function () {
         if ($(this).is(":checked")) {
             $(".shippingAdress").show(300);
         } else {
             $(".shippingAdress").hide(200);
         }
     });
     
     //single product page
     $('.thumbnail img').click(function(){
         $('#main-image').attr('src',$(this).attr('src').replace());
     });
     
     $('#main-image').imagezoomsl();

 });

//tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Mobile navigator sidebar
function openNav(){
    document.getElementById("sidebar").style.left="0";
    document.querySelector(".overlay_mobile_Sidebar").style.opacity="1";
    document.querySelector(".overlay_mobile_Sidebar").style.display="block";
}
function closeNav(){
    document.getElementById("sidebar").style.left="-100%";
    document.querySelector(".overlay_mobile_Sidebar").style.display="none";
}

//Main slider

var slider = tns({
    container: '.main_slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: true,
    controlsText: ["<i class='bx bxs-left-arrow-square'></i>", "<i class='bx bxs-right-arrow-square'></i>"],
    nav: false,
    mouseDrag: true,
  });



