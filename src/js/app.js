
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

// When the order status form is submitted, run the checkOrder function
$('#order-status-form').submit(checkOrder);

// On focus, clear the input fields
$('#order-name, #order-num').focus(function() {
	$('.status span, .completion span, .buyer span, .notes span').text("");
	$('#order-num, #order-name').val("");
});


function checkOrder() {
	var found =  false; // If no name, or order number found this stays as false
	var name = $('#order-name').val();
	var order = $('#order-num').val();
	// Capital casing the input name
	name = name.toLowerCase().replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });

	var items = orders.length;
	for (var i = 0; i < items; i++) {
		if (name === orders[i].lastName || order === orders[i].orderNumber) {
			$('.buyer span').text(orders[i].firstName + " " + orders[i].lastName);
			$('.status span').text(orders[i].status);
			$('.completion span').text(orders[i].completionDate);
			$('.notes span').text(orders[i].notes);
			found = true;
			break;
		}
	}
	// If our found variable is false, we did not find the order
	if (!found) $('.status span').html("We did not find that order. Please <a href='mailto:nick@wispcreekdesign.com'>Email Us</a.");

	return false;
}