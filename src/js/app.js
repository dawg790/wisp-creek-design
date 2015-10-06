
/* Our Customer Database
 *
 * For a new order, add a new object to the orders database below
 * For updates to an order, update the stats in each entry
 * Take a picture of progress and add it to the src/images folder and run gulp images
 */
var orders = [
  {
    "firstName": "Nick",
    "lastName": "Woodland",
    "orderNumber": "000001",
    "status": "In Progress",
    "completionDate": "July 1, 2015",
    "notes": "Box is completed, first coat of Tung Oil has been applied.",
    "pic": "images/box9.jpg"
  },
  {
    "firstName": "Wendy",
    "lastName": "Yetterberg",
    "orderNumber": "000002",
    "status": "Not Started Yet",
    "completionDate": "August 21, 2015",
    "notes": "All the parts are planed and jointed and ready to be cut to size.",
    "pic": "images/box1.jpg"
  }
];

var ViewModel = function () {
  var self = this;

  // Set a counter for the home page picture scrolling app
  self.scrollCount = ko.observable(0);

  // Observable array to hold the home page picture href's
  self.homePagePics = ko.observableArray([
    "images/build1.jpg",
    "images/build4.jpg",
    "images/shop1.jpg",
    "images/box003_1.jpg",
    "images/box002_2.jpg",
    "images/box001_clip1.jpg"
  ]);

  // When scrolling right, increment the counter and stop scrolling if reach the last image
  self.rightScroll = function () {
    if (self.scrollCount() < 5) {
      self.scrollCount(self.scrollCount() + 1);
      $('#bgPic').attr('src', self.homePagePics()[self.scrollCount()]);
    } else if (self.scrollCount() === 5) {
      $('#bgPic').attr('src', self.homePagePics()[self.scrollCount()]);
    }
  };

  // When scrolling left, decrement the counter and stop scrolling if count is zero
  self.leftScroll = function () {
    if (self.scrollCount() > 0) {
      self.scrollCount(self.scrollCount() - 1);
      $('#bgPic').attr('src', self.homePagePics()[self.scrollCount()]);
    } else if (self.scrollCount === 5) {
      $('#bgPic').attr('src', self.homePagePics()[self.scrollCount()]);
    }
  };


  // ORDER STATUS CHECK APP
  self.allOrders = ko.observableArray([]);

  // Put all our orders into an observable array
  orders.forEach(function (item) {
    self.allOrders.push(item);
  });

  // Function to run when the order status form is submitted
  self.checkOrder = function () {
    var found =  false; // If no name, or order number found this stays as false
    var name = $('#order-name').val();
    var order = $('#order-num').val();
    // Capital casing the input name
    name = name.toLowerCase().replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });

    var items = self.allOrders().length;
    for (var i = 0; i < items; i++) {
      if (name === self.allOrders()[i].lastName || order === self.allOrders()[i].orderNumber) {
        $('.buyer span').text(self.allOrders()[i].firstName + " " + self.allOrders()[i].lastName);
        $('.status span').text(self.allOrders()[i].status);
        $('.completion span').text(self.allOrders()[i].completionDate);
        $('.notes span').text(self.allOrders()[i].notes);
        $('.pic img').attr('src', self.allOrders()[i].pic).attr('width', '300');
        found = true;
        break;
      }
    }
    // If our found variable is false, we did not find the order
    if (!found) $('.status span').html("We did not find that order. Please <a href='mailto:nick@wispcreekdesign.com'>Email Us</a.");

    return false;
  };

  // On click within the inputs, clear the Order Status input fields
  self.clearFields = function () {
    $('.status span, .completion span, .buyer span, .notes span').text("");
    $('.pic img').attr('src', "").attr('width', '0');
    $('#order-num, #order-name').val("");
  };

  // Mobile Hamburger icon click function to show the nav menu
  self.showMobileNav = function () {
    $('.lines-button').toggleClass('close');
    $('header .header-content .header-nav .nav').toggleClass('open');
    $('.tagline').fadeToggle();
  };

};

ko.applyBindings( new ViewModel());




// Helper js function to get height and width of browser
var w = window,
	d = document,
	e = d.documentElement,
	g = d.getElementsByTagName('body')[0],
	x = w.innerWidth || e.clientWidth || g.clientWidth,
	y = w.innerHeight || e.clientHeight || g.clientHeight;
console.log(x);
console.log(y);

// Header styling changes on Scroll
$(document).scroll(function() {
	if ( $(this).scrollTop() > 25 ) {
		$('.icon').css('display', 'none');
		$('.nav li').css('line-height', '47px');
		$('header').css('border-bottom', '1px solid #e9e9e9');
	} else if ( $(this).scrollTop() === 0 && x > 550) {
		$('.icon').css('display', 'block');
		$('.nav li').css('line-height', '74px');
		$('header').css('border-bottom', 'none');
	} else if ( $(this).scrollTop() === 0 && x < 550) {
		$('.icon').css('display', 'block');
		$('.nav li').css('line-height', '47px');
		$('header').css('border-bottom', 'none');
	}
});

// Tooltip only Text
$('.masterTooltip').hover(function(){
  // Hover over code
  var title = $(this).attr('title');
  $(this).data('tipText', title).removeAttr('title');
  $('<p class="tooltip"></p>').text(title).appendTo('body').fadeIn('slow');
}, function() {
  // Hover out code
  $(this).attr('title', $(this).data('tipText'));
  $('.tooltip').remove();
}).mousemove(function(e) {
  var mousex = e.pageX + 20; //Get X coordinates
  var mousey = e.pageY + 10; //Get Y coordinates
  $('.tooltip')
  .css({ top: mousey, left: mousex })
});