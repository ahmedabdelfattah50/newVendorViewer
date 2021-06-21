
// the defination of the ready function of jquery
$(document).ready(function() {

   // ========================== Start the nav bar =========================

   var navBar = document.querySelector('nav.bg-light'),
       menu_icon = document.querySelector('.navbar-light .navbar-toggler-icon'),
       border_menu = document.querySelector('.navbar-light .navbar-toggler');          
   // this is for addiing the class (change_nav) to change the color of the navbar 
   $(window).scroll(function(){
      if($(document).scrollTop() > 80){
         $(navBar).addClass('change_nav');
         $(menu_icon).css('background-image', 'url("images/icons/white-menu-icon-4.jpg")'); 
         $(border_menu).css('border' , '1px solid #fff');  
         // 'url(' + imageUrl + ')'      
      } else {
         $(navBar).removeClass('change_nav');                
         $(menu_icon).css('background-image', 'url("images/icons/menu-black.png")');   
      }
   });

   // ========================== End the nav bar =========================

   // ========================== Start the icon go up =========================   

   var iconUP = document.querySelector('.fa-angle-up');
   // this is for the icon to go up in the website 
   $(window).scroll(function(){
      if($(document).scrollTop() > 150){
         $(iconUP).fadeIn();
         $(iconUP).fadeIn("slow");
         $(iconUP).fadeIn(3000);
      } else {
         $(iconUP).fadeOut();
         $(iconUP).fadeOut("slow");
         $(iconUP).fadeOut(3000);
      }
   });         

   // ========================== End the icon go up =========================  

   // ========================== Start change image of card ==========================

   var images_card = document.querySelectorAll('.card .images_card');

   $(images_card).hover( function() {
      $(this).children(".card .card_img_1").css('opacity' , '0');
   } , function () {
      $(this).children(".card .card_img_1").css('opacity' , '1');
   });  

   // ========================== End change image of card ==========================

   // ========================== Start change image of card ==========================

       // this is the first section of products
   var first_section_product = document.querySelector('.first_section_product'), 
       // this is the second section of products
       second_section_product = document.querySelector('.second_section_product'), 
       // this is the third section of products
       third_section_product = document.querySelector('.third_section_product'),
       
       // this is the defination of the first link in change tab in products div
       first_tab_btn = document.querySelector('#first_tab_btn'),  
       // this is the defination of the second link in change tab in products div
       section_tab_btn = document.querySelector('#section_tab_btn'),
       // this is the defination of the third link in change tab in products div
       third_tab_btn = document.querySelector('#third_tab_btn');
      // this for the change the the choice of the tabs in the products div

   // --------------------------------------------------------------------------------
   
   // =========>>>>> Start the tabs of change type of products 
   $('.products .nav-pills .nav-item .nav-link').on('click' , function() {    
      if($(this).data('class') === 'all') {
         $('.card-deck .card').css('display' , 'grid');             
         $(this).siblings().removeClass('active');
      }
      
      else {
         $('.card-deck .card').css('display' , 'none');
         $($(this).data('class')).css('display' , 'grid');
         $(this).siblings().removeClass('active');         

         $(second_section_product).removeElement('div');
         $(third_section_product).removeElement('div');
         $(second_section_product).css( 'display' , 'grid');
         $(third_section_product).css('display' , 'grid');
      }
   });  
   // =========>>>>> End the tabs of change type of products 

   // --------------------------------------------------------------------------------     

   // =========>>>>> Start (the numbers of the section of products) 

   // this when we click on the first link in tabs of products (button number (1)) 
   $(first_tab_btn).on('click' , function() {    
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(first_section_product).css('display' , 'grid');
      $(third_section_product).css('display' , 'none');
      $(second_section_product).css('display' , 'none');
   });

   // this when we click on the second link in tabs of products (button number (2)) 
   $(section_tab_btn).on('click' , function() {   
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(first_section_product).css('display' , 'none');
      $(second_section_product).css('display' , 'grid');
      $(third_section_product).css('display' , 'none');
   });

   // this when we click on the third link in tabs of products (button number (3)) 
   $(third_tab_btn).on('click' , function() {    
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $(second_section_product).css('display' , 'none');
      $(first_section_product).css('display' , 'none');
      $(third_section_product).css('display' , 'grid');
   });

   // =========>>>>> End (the numbers of the section of products)
   
   // ========================== End change image of card ==========================

   // =========>>>>> this for the change the images in the modal of products 
   var mainImgInMarket = document.querySelectorAll('.product_properity .product_images .main_img') , 
       imgPlusInMarket = document.querySelectorAll('.product_images .plus_images img');

   // this when the user click on the image in the moadl 
   $(imgPlusInMarket).on('click' , function() { 
      $(mainImgInMarket).attr('src' , ($(this).attr('src')) ); 
      $(this).attr('src' , ($(mainImgInMarket).attr('src')) );
   });
});


