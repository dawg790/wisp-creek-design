/*
 * Family Photo Album finder app
 *
 * Will use a data model including all the albums info, then a view model to search with
 * a select element by year for albums.
 */

// Data Model
var albums = [
  {
    "year": "2016",
    "url": "http://wispcreekdesign.com/blog/?p=1361",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2016/02/4_trailside.jpg",
    "caption": "Velorution Valkyrie",
    "filter": "2016 Adventures Bikepacking"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1318",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/12/WP_20151228_11_11_15_Pro.jpg",
    "caption": "First Family Ski Day",
    "filter": "2015 Adventures Family"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1281",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/12/6.jpg",
    "caption": "Texas Gilkerson Memorial",
    "filter": "2015 Family"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1263",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/11/6_family.jpg",
    "caption": "Thanksgiving 2015",
    "filter": "2015 Family"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1248",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/10/3.jpg",
    "caption": "Ava's 4th Birthday",
    "filter": "2015 Family Ava"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1226",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/09/1_sienna_view.jpg",
    "caption": "Lost Park Camping",
    "filter": "2015 Family Camping"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1200",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/09/Belford-summit.jpg",
    "caption": "14ers 2015",
    "filter": "2015 14ers"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1182",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/08/12_beers.jpg",
    "caption": "Mtns Revenge 2015",
    "filter": "2015 Adventures Bikepacking"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1333",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2016/02/13.jpg",
    "caption": "Rockford Christmas",
    "filter": "2015 Family"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1167",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/08/1_bike.jpg",
    "caption": "Breckenridge Camping",
    "filter": "2015 Family Camping"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1154",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/07/4_daddy.jpg",
    "caption": "Teagan is born",
    "filter": "2015 Family Teagan"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1147",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/07/1_di.jpg",
    "caption": "Destination Imagination 2015",
    "filter": "2015 Sienna"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1132",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/07/4_rockford.jpg",
    "caption": "Christmas 2015",
    "filter": "2015 Family"
  },
  {
    "year": "2015",
    "url": "http://wispcreekdesign.com/blog/?p=1086",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2015/06/18785521949_d5a0c5dc72_k.jpg",
    "caption": "Dixie 200 2015",
    "filter": "2015 Adventures Bikepacking"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=1048",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/11/DSC_9649-1024x683.jpg",
    "caption": "Thanksgiving 2014",
    "filter": "2014 Family Ava Sienna"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=1039",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/11/WP_20141115_16_40_03_Pro-1024x576.jpg",
    "caption": "Sienna's 5th Birthday",
    "filter": "2014 Family Sienna"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=1029",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/11/WP_20141031_14_08_18_Pro-1024x576.jpg",
    "caption": "Halloween 2014",
    "filter": "2014 Family Sienna Ava"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=1025",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/07/MC9.jpg",
    "caption": "Colorado Trail 2014",
    "filter": "2014 Adventures Bikepacking"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=1010",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/08/WP_20140830_10_17_37_Pro.jpg",
    "caption": "Mt Guiyot - 13er",
    "filter": "2014 Adventures"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=989",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/08/WP_20140823_18_28_12_Pro.jpg",
    "caption": "Nonny Visit 2014",
    "filter": "2014 Family"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=953",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/08/camp_yt-1024x576.jpg",
    "caption": "Rockford Visit 2014",
    "filter": "2014 Family"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=933",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/07/MC1.jpg",
    "caption": "Monarch Crest",
    "filter": "2014 Adventures"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=854",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/07/WP_20140705_12_02_45_Pro_edit.jpg",
    "caption": "Great Sand Dunes",
    "filter": "2014 Family Camping"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=835",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/06/graduate.jpg",
    "caption": "Sienna's Graduation Daycare",
    "filter": "2014 Sienna"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=809",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/03/WP_20140326_11_58_11_Pro.jpg",
    "caption": "Pueblo 2014",
    "filter": "2014 Family Camping"
  },
  {
    "year": "2014",
    "url": "http://wispcreekdesign.com/blog/?p=801",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/02/dance1.jpg",
    "caption": "Sienna Dancing Class",
    "filter": "2014 Sienna"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=772",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2014/01/1.jpg",
    "caption": "Carlisle Christmas 2013",
    "filter": "2013 Family"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=719",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/12/holiday4.jpg",
    "caption": "Holiday Program Daycare",
    "filter": "2013 Family Ava Sienna"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=1494",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2016/02/WP_20131127_10_32_08_Pro.jpg",
    "caption": "Thanksgiving 2013",
    "filter": "2013 Family"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=1479",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2016/02/WP_20131116_11_01_26_Pro.jpg",
    "caption": "Sienna's 4th Birthday",
    "filter": "2013 Family Sienna"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=705",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/11/trunk_or_treat2.jpg",
    "caption": "Halloween 2013",
    "filter": "2013 Family Ava Sienna"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=690",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/10/1417653_10151705249489109_1884863673_o.jpg",
    "caption": "Bean FeSSt 2013",
    "filter": "2013 Adventures"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=656",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/10/rides.jpg",
    "caption": "Chernobyl",
    "filter": "2013 Travel"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=637",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/10/Signs.jpg",
    "caption": "Kiev, Ukraine",
    "filter": "2013 Travel"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=628",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/10/beer_food.jpg",
    "caption": "Freising, Germany",
    "filter": "2013 Travel"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=609",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/09/4_summit.jpg",
    "caption": "Mt Democrat - 14er",
    "filter": "2013 Adventures 14ers"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=1505",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2016/02/WP_20130921_10_54_14_Pro-1024x576.jpg",
    "caption": "Guanella Pass Hike",
    "filter": "2013 Adventures Family"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=587",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/09/dad_girls.jpg",
    "caption": "Breck Camping 2013",
    "filter": "2013 Family Camping"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=411",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/07/IMG_0853.jpg",
    "caption": "First Pop-up Trip",
    "filter": "2013 Family Camping"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=1390",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2016/02/IMG_1022.jpg",
    "caption": "Zolman Cabin - Sedalia",
    "filter": "2013 Family"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=1411",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2016/02/DSC9719.jpg",
    "caption": "Cape Cod Summer",
    "filter": "2013 Family"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=471",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/08/georgia_pass.jpg",
    "caption": "Colorado Trail Race 2013",
    "filter": "2013 Adventures Bikepacking "
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=284",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/05/Ava_park.jpg",
    "caption": "Spring Time Fun",
    "filter": "2013 Family Sienna Ava"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=249",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/04/Ava_slide3.jpg",
    "caption": "Playground Fun",
    "filter": "2013 Family Sienna Ava"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=148",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/04/Sienna_new_bike_Ava.jpg",
    "caption": "Sienna's New Bike",
    "filter": "2013 Family Sienna Ava"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=55",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/04/decorating2.jpg",
    "caption": "Easter 2013",
    "filter": "2013 Family Sienna Ava"
  },
  {
    "year": "2013",
    "url": "http://wispcreekdesign.com/blog/?p=23",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2013/04/daddy_ava.jpg",
    "caption": "Pueblo 2013",
    "filter": "2013 Family Camping Sienna Ava"
  },
  {
    "year": "2012",
    "url": "http://wispcreekdesign.com/blog/?p=1126",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2012/08/clear_creek_rain_sm.jpg",
    "caption": "Colorado Trail Race 2012",
    "filter": "2012 Adventures Bikepacking"
  },
  {
    "year": "2011",
    "url": "http://wispcreekdesign.com/blog/?p=1527",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2016/02/Ava2.jpg",
    "caption": "Ava is Born",
    "filter": "2011 Family Ava"
  },
  {
    "year": "2009",
    "url": "http://wispcreekdesign.com/blog/?p=1541",
    "thumb": "http://wispcreekdesign.com/blog/wp-content/uploads/2016/02/yetterbergs.jpg",
    "caption": "Sienna is Born",
    "filter": "2009 Family Sienna"
  }


];

var years = [
  "All...",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2009",
  "pre-2009"
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
      $('#messageYear, #messageFilter').show();
      $('#messageYear').text("Please select a year.");
    } else if (self.year === "pre-2009") {
      $('#messageYear').text("Year is set to: " + self.year);
      $('.snapfish').show();
      $('#messageYear, #messageFilter').hide();
    // If a year is choosen, than just display the year
    } else {
      $('#messageYear').text("Year is set to: " + self.year);
      $('.snapfish').hide();
      $('#messageYear, #messageFilter').show();
    }
  };

  self.clear = function () {
    // Click event to clear the filters
    $('.clear').click(function() {
      $('li').each(function() {
        $(this).show();
      })
    });
  };

  // Function to store all objects that have the selected year
  self.getAlbums = function () {

    var items = self.albumList().length;

    // Empty array to store our matched albums
    var array = [];

    for (var i = 0; i < items; i++) {
      // If All is choosen, than just push all the albums into our array
      if (this.year === "All...") array.push(self.albumList()[i]);

      // If a year is choosen, than push those albums into the array
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
    // TODO: Add multiple classes (like tags) then see if classes contain the filter. Use .hasClass()
    $('li').each(function() {
      var filterTerm = self.filter();
      if ($(this).hasClass(filterTerm)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    // Set the filter message to show users which filter is currently selected
    if (self.filter() === "Clear") {
      $('#messageFilter').text("Tags have been cleared");
    } else {
      $('#messageFilter').text("Tag is set to: " + self.filter());
    }
  };

  // On clicking the filters, run the filter Albums function above
  $('input[type="button"]').click(function() {
    // On click, store the value of the filter clicked in our global observalbe
    self.filter($(this).val());
    self.filterAlbums();
    self.clear();
  });


  // Function to run when the drop down select is changed.
  $('#album-year').change(function() {
    self.getYear();
    self.getAlbums();
    self.clear();
    $('#messageFilter').text("Tags have been cleared.");

    console.log(self.year, self.matchedItems());

  });

};


ko.applyBindings( new ViewModel() );

