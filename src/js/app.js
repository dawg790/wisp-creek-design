/* Orders placed online
 * For a new order, add a new object to the orders database below
 * For updates to an order, update the stats in each entry
 *
 */
var orders = [
  // Orders below
  {
    "firstName": "Ann",
    "lastName": "Meehan",
    "orderNumber": "000004",
    "status": "Delivered",
    "completionDate": "November 8, 2015",
    "notes": "",
    "tracking": ""
  },
  {
    "firstName": "George",
    "lastName": "Woodland",
    "orderNumber": "000001",
    "status": "Delivered",
    "completionDate": "November 7, 2015",
    "notes": "",
    "tracking": ""
  },
  {
    "firstName": "DeWitt",
    "lastName": "Ivins",
    "orderNumber": "000003",
    "status": "Shipped",
    "completionDate": "December 9, 2015",
    "notes": "All three boxes have been shipped!",
    "tracking": "vj336880185us"
  }
];

/* Current Inventory. The values are pulled from the valueText variable.
 * TODO: Keep this updated with the current boxes in stock
 */
var inventory = [
  'Jewelry Box - Wood: Mahogany. Inlay: Black Line #2 +$25. Velvet: Black. Size: Standard: 8" x 12"'
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

  // Create an observable array for our Orders
  self.allOrders = ko.observableArray([]);

  // Put all our orders into the observable array
  orders.forEach(function (item) {
    self.allOrders.push(item);
  });

  // Pulls up order information when a user submits the form
  self.checkOrder = function () {
    var found =  false; // If no name or order number found, this stays false
    var name = $('#order-name').val();
    var order = $('#order-num').val();

    // Capital casing the input name
    name = name.toLowerCase().replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });

    // Loop through all orders to see if there is a match. If so, display the order info in the appropriate fields.
    var items = self.allOrders().length;
    for (var i = 0; i < items; i++) {
      if (name === self.allOrders()[i].lastName || order === self.allOrders()[i].orderNumber) {
        $('.buyer span').text(self.allOrders()[i].firstName + " " + self.allOrders()[i].lastName);
        $('.status span').text(self.allOrders()[i].status);
        $('.completion span').text(self.allOrders()[i].completionDate);
        $('.notes span').text(self.allOrders()[i].notes);
        $('.tracking span').text(self.allOrders()[i].tracking);
        found = true;
        break;
      }
    }
    // USPS Tracking ULR: https://tools.usps.com/go/TrackConfirmAction?tLabels=
    // UPS Tracking URL: https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=
    if (found) $('.tracking a').attr("href", "https://tools.usps.com/go/TrackConfirmAction?tLabels=" + self.allOrders()[i].tracking);

    // If our found variable is false, we did not find the order
    if (!found) $('.status span').html("We did not find that order. Please <a href='mailto:nick@wispcreekdesign.com'>Email Us</a.");

    return false;
  };

  // Clear the Order Status input fields
  self.clearFields = function () {
    $('.status span, .completion span, .buyer span, .notes span, .tracking span').text("");
    $('#order-num, #order-name').val("");
  };

  // Mobile Hamburger icon click function to show the nav menu
  self.showMobileNav = function () {
    $('.lines-button').toggleClass('close');
    $('header .header-content .header-nav .nav').toggleClass('open');
    $('.tagline').fadeToggle();
  };

  // Inventory Check function to see if a box the user has built is in stock or not.
  self.checkInventory = function () {
    // On click this shows the spinning icon and hides both messages
    $('.fa-pulse').show();
    $('.messageNA, .messageAvail').hide();

    // We store the result of the findings in a variable
    var result;

    // After the timer, hide the spinner, and show the correct message
    setTimeout(function() {
      $('.fa-pulse').hide();
      for (var i = 0; i < inventory.length; i++) {
        if (valueText === inventory[i]) {
          result = true;
          break;
        } else {
          result = false;
        }
      }

      // Based on the value of the result variable, show the correct message
      if (result) {
        $('.messageAvail').show();

        // Since it is in stock, give a 5% discount, and show the new price
        value = Math.floor(value - (value * 0.05));
        $('#totalCost').addClass('discounted');
        $('#discountCost').show().text(value);

        // Set the new price for the paypal button value
        $('input[name="amount"]').val(value);
        $('.discount').show();
      } else {
        $('.messageNA').show();
        $('.discount, #discountCost').hide();
      }

    }, 1500);

    return false;
  };


  // The Box Builder function
  self.boxBuilder = function () {
    // Clear the Inventory Check messages and any discounted pricing if an option is changed
    $('.messageNA, .messageAvail').hide();
    $('#totalCost').removeClass('discounted');
    $('.discount, #discountCost').hide();

    // Set the thumbnail images accordingly when a new option is selected
    if ($('#wood-species option:selected').text() === "Mahogany") $('#wood-species-image').attr("src", "images/mahogany.png");
    if ($('#wood-species option:selected').text() === "Walnut") $('#wood-species-image').attr("src", "images/walnut.png");
    if ($('#inlay option:selected').text() === "Chevron #1 +$25") $('#inlay-image').attr("src", "images/inlay1.jpg");
    if ($('#inlay option:selected').text() === "Black Line #2 +$25") $('#inlay-image').attr("src", "images/inlay2.jpg");
    if ($('#inlay option:selected').text() === "Blocks #3 +$25") $('#inlay-image').attr("src", "images/inlay3.jpg");
    if ($('#inlay option:selected').text() === "Alternating Blocks #4 +$25") $('#inlay-image').attr("src", "images/inlay4.jpg");
    if ($('#inlay option:selected').text() === "No Inlay") $('#inlay-image').attr("src", "images/none.png");
    if ($('#velvet option:selected').text() === "Red") $('#velvet-image').attr("src", "images/red.jpg");
    if ($('#velvet option:selected').text() === "Black") $('#velvet-image').attr("src", "images/black.jpg");

    // Get the pricing values from the inputs and store them in the value variable
    var wood = parseInt($('#wood-species').val());
    var inlay = parseInt($('#inlay').val());
    var velvet = parseInt($('#velvet').val());
    var size = parseInt($('#size').val());
    value = wood + inlay + velvet + size;

    // Grab the choices and store them in the valueText variable so I can save those in the paypal info
    var woodChoice = $('#wood-species option:selected').text();
    var inlayChoice = $('#inlay option:selected').text();
    var velvetChoice = $('#velvet option:selected').text();
    var sizeChoice = $('#size option:selected').text();
    valueText = "Jewelry Box - Wood: " + woodChoice + ". Inlay: " + inlayChoice + ". Velvet: " +
                    velvetChoice + ". Size: " + sizeChoice;
    $('#totalCost').text(value);

    // Sets the value of the hidden form field that the paypal button script above creates
    $('input[name="amount"]').val(value);
    $('input[name="item_name"]').val(valueText);

  };

};

ko.applyBindings( new ViewModel());


/*
 * Other Site Scripts
 */

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
	} else if ( $(this).scrollTop() === 0 && x > 850) {
		$('.icon').css('display', 'block');
		$('.nav li').css('line-height', '74px');
		$('header').css('border-bottom', 'none');
	} else if ( $(this).scrollTop() === 0 && x < 850) {
		$('.icon').css('display', 'block');
		$('.nav li').css('line-height', '40px');
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
  .css({ top: mousey, left: mousex });
});