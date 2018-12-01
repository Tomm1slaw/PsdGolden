$(document).ready(function() {
   //navigation
   $(function() {
      $('#menu').slicknav({
         label: ''
      });
   });

   // slider
   $(document).ready(function() {
      $('.clients').slick({
         autoplay: true,
         speed: 100
      });
   });

   // Smooth scroll
   $('#menu a').smoothScroll({
      afterScroll: function() {
         $(this)
            .closest('ul')
            .find('a')
            .removeClass('active');
         $(this).addClass('active');
      }
   });
});
