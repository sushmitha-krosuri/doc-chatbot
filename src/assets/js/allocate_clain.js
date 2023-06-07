
// function nextFuntion(){
//     var element1 = document.getElementById("mainbtn");
//     var element2 = document.getElementById("pill-hospital-details")
//     location.href(element2)
//     }


// $(".nav-tabs li a[data-toggle=tab]").on("click",function(e){
//     e.preventDefault();
//   //return false;
//       $('.nav-tabs li:eq(1) a').tab('show');

//       $("[class='btn btn-large btn-block btn-success disabled']").removeClass("btn btn-large btn-block btn-success disabled");
//       $('.nav-tabs li:eq(1) a').addClass("btn btn-large btn-block btn-success disabled");

// });

// function openCity(evt, cityName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the link that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }


// $(document).ready(function(){

//     $(".nav-tabs li a[data-bs-toggle=tab]").on("click",function(e){
    
//           e.preventDefault();
          
//           if($(this).parent('li').is(':last-child'))
//           {
//             $('.tab-button').hide();
//           }
//           else
//           {
//             $('.tab-button').show();
//           }
        
//             $('.nav-tabs li:eq(1) a').tab('show');
    
//             $("[class='btn btn-large btn-block btn-success disabled']").removeClass("btn btn-large btn-block btn-success disabled");
//             $(this).addClass("btn btn-large btn-block btn-success disabled");
    
//     });
    
//     $('.tab-button').click(function(){
    
//     ss = $("[class='btn btn-large btn-block btn-success disabled']").parent('li').next().find('a').trigger('click');
    
//     });
//     });

function bootstrapTabControl() {
    var i,
      items = $(".nav-link"),
      pane = $(".tab-pane");
  
    // next
  
    $(".nexttab").on("click", function () {
      for (i = 0; i < items.length; i++) {
        if ($(items[i]).hasClass("active") == true) {
          break;
        }
      }
      if (i < items.length - 1) {
        // for tab
  
        $(items[i]).removeClass("active");
  
        $(items[i + 1]).addClass("active");
  
        // for pane
  
        $(pane[i]).removeClass("show active");
  
        $(pane[i + 1]).addClass("show active");
      }
    });
  
    // Prev
  
    $(".prevtab").on("click", function () {
      for (i = 0; i < items.length; i++) {
        if ($(items[i]).hasClass("active") == true) {
          break;
        }
      }
  
      if (i != 0) {
        // for tab
  
        $(items[i]).removeClass("active");
  
        $(items[i - 1]).addClass("active");
  
        // for pane
  
        $(pane[i]).removeClass("show active");
  
        $(pane[i - 1]).addClass("show active");
      }
    });
  }
  
  bootstrapTabControl();


  
  document
  .getElementById('target')
  .addEventListener('change', function () {
    'use strict';
    var vis = document.querySelector('.vis'),   
      target = document.getElementById(this.value);
    if (vis !== null) {
      vis.className = 'inv';
    }
    if (target !== null ) {
      target.className = 'vis';
    }
});