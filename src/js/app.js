
// Our Customer Database
var orders = [
  {
  	"firstName": "Nick",
  	"lastName": "Woodland",
  	"orderNumber": "000001",
  	"status": "In Progress",
  	"completionDate": "July 1, 2015",
  	"notes": "Box is completed, first coat of Tung Oil has been applied."
  },
  {
  	"firstName": "Wendy",
  	"lastName": "Yetterberg",
  	"orderNumber": "000002",
  	"status": "Not Started Yet",
  	"completionDate": "August 21, 2015",
  	"notes": "All the parts are planed and jointed and ready to be cut to size."
  }
];

var ViewModel = function () {
	var self = this;

	// Set a counter for the home page picture scrolling app
	self.scrollCount = ko.observable(0);

	// Observable array to hold the home page picture href's
	self.homePagePics = ko.observableArray([
	  "images/box3.jpg",
    "images/box1.jpg",
    "images/stock.jpg",
    "images/box6.jpg",
    "images/box_open_lg.png",
    "images/box14.jpg"
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
  orders.forEach(function(item) {
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
		$('#order-num, #order-name').val("");
	};



	// Mobile Hamburger icon click function to show the nav menu
	self.showMobileNav = function () {
		$('.lines-button').toggleClass('close');
		$('header .header-content .header-nav .nav').toggleClass('open');
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
