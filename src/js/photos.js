/*
 * Family Photo Album finder app
 *
 * Will use a data model including all the albums info, then a view model to search with
 * a select element by year for albums.
 */

// Data Model
var albums = [
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1048",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/11/DSC_9649-1024x683.jpg",
    "caption": "Thanksgiving 2014",
    "filter": "Family"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=1039",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/11/WP_20141115_16_40_03_Pro-1024x576.jpg",
    "caption": "Sienna's 5th Birthday",
    "filter": "Family"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=1029",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/11/WP_20141031_14_08_18_Pro-1024x576.jpg",
    "caption": "Halloween 2014",
    "filter": "Family"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=1025",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/07/MC9.jpg",
    "caption": "Colorado Trail Tour",
    "filter": "Adventures"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=1010",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/08/WP_20140830_10_17_37_Pro.jpg",
    "caption": "Mt Guiyot - 13er",
    "filter": "Adventures"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=989",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/08/WP_20140823_18_28_12_Pro.jpg",
    "caption": "Nonny Visit - August",
    "filter": "Family"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=953",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/08/camp_yt-1024x576.jpg",
    "caption": "Rockford Visit",
    "filter": "Family"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=933",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/07/MC1.jpg",
    "caption": "Monarch Crest - Rainbow Trail",
    "filter": "Adventures"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=854",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/07/WP_20140705_12_02_45_Pro_edit.jpg",
    "caption": "Great Sand Dunes",
    "filter": "Family"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=835",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/06/graduate.jpg",
    "caption": "Sienna's Graduation Daycare",
    "filter": "Family"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=809",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/03/WP_20140326_11_58_11_Pro.jpg",
    "caption": "Spring Break - Pueblo",
    "filter": "Family"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=801",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/02/dance1.jpg",
    "caption": "Sienna Dancing Class",
    "filter": "Family"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=772",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/01/1.jpg",
    "caption": "Carlisle Holiday Visit",
    "filter": "Family"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=719",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/12/holiday4.jpg",
    "caption": "Holiday Program Daycare",
    "filter": "Family"
  }
];

var years = [
  "All...",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009"
];

var ViewModel = function () {
  var self = this;

  // Observable to store the selected year
  this.year = ko.observable(0);

  // Observable to store the selected filter
  this.filter = ko.observable(0);

  // Creating an empy observable array for the albums
  this.albumList = ko.observableArray([]);

  // Array to hold albums that match the selected year
  this.matchedItems = ko.observableArray([]);

  // Put all the albums into the albumList observable array
  albums.forEach(function (item) {
    self.albumList.push(item);
    self.matchedItems.push(item);
  });

  // Observable array for the years
  this.allYears = ko.observableArray([]);

  // Put all the years into the years observable array
  years.forEach(function (item) {
    self.allYears.push(item);
  });

  // Function to store the value of the select dropdown when it is changed
  self.getYear = function () {

    this.year = $('#album-year').val();

    // If All is choosen, every album will display and the message will ask to choose a year
    if (self.year === "All...") {
      $('#message').text("Please select a year.");
    // If a year is choosen, than just display the year
    } else {
      $('#message').text(self.year);
    }
  };


  // Function to store all objects that have the selected year
  self.getAlbums = function () {

    var items = self.albumList().length;

    // Empty array to store our matched albums
    var array = [];

    for (var i = 0; i < items; i++) {
      // If All is choosen, than just push all the albums into our array
      if (this.year === "All...") array.push(self.albumList()[i]);

      // If a year is choose, than just push those albums into the array
      if (this.year === self.albumList()[i].year) {
        array.push(self.albumList()[i]);
      }
    }

    // Now we set the Observable array to the matched items array.
    self.matchedItems(array);
  };

  // Function to filer the matchedItems array
  self.filterAlbums = function () {

    // Scroll through each list item, if the class matches the selected filter, show it.
    // The class on the list items is bound to the matchedItems array
    $('li').each(function() {
      if (self.filter() === $(this).attr('class')) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  };

  // On clicking the filters, run the filter Albums function above
  $('input[type="button"]').click(function() {
    // On click, store the value of the filter clicked in our global observalbe
    self.filter($(this).val());
    self.filterAlbums();
  });


  // Function to run when the drop down select is changed.
  $('#album-year').change(function() {
    self.getYear();
    self.getAlbums();

    console.log(self.year, self.matchedItems());

  });

};


ko.applyBindings( new ViewModel() );

