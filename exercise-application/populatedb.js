#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Category = require('./models/category')
var Equipment = require('./models/equipment')
var Manufacturer = require('./models/manufacturer')



var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var categories = []
var equipments = []
var manufacturers = []


function categoryCreate(title, description, cb) {
  categorydetail = {title: title };
  if (description != false) categorydetail.description = description;
  
  var category = new Category(categorydetail);
       
  category.save(function (err) {
    if (err) {
      cb(err, null)
      return;
    }
    console.log('New Category: ' + category);
    categories.push(category);
    cb(null, category);
  }  );
}

function manufacturerCreate(name, description, cb) {
  var manufacturerdetail = { name: name };
  if (description != false) manufacturerdetail.description = description;

  var manufacturer = new Manufacturer(manufacturerdetail);
       
  manufacturer.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Manufacturer: " + manufacturer);
    manufacturers.push(manufacturer);
    cb(null, genre);
  });
}

function equipmentPartCreate(
    name,
    description,
    inStock,
    price,
    category,
    manufacturer,
    cb
    ) {
  var equipmentPart =  new Equipment({ 
    name: name,
    description: description,
    inStock: inStock,
    price: price,
    category: category,
    manufacturer: manufacturer,
  });
  
  equipmentPart.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New equipment Part: ' + equipmentPart);
    equipments.push(equipmentPart)
    cb(null, equipmentPart)
  }  );
}


function createCategories(cb) {
    async.parallel(
        [
            function (callback) {
                categoryCreate(
                    'Home Gym',
                    'Home gyms can be anything you use at home to support your strength goals and build muscle. Thats a great opportunity to exercise at any time of the day to improve your health and fitness.',
                
                    callback
                
                    );
            },
              
            function (callback) {
                categoryCreate(
                    'Weightset',
                    'Use your head. What do you think weightsets are?',
                    
                    callback
                );
            },


            function(callback) {
                categoryCreate(
                    'Treadmill',
                    'a device having an endless belt on which an individual walks or runs in place for exercise or physiological testing'
                );
            },




        ]
    )
}



function createManufacturers(cb) {
    async.series([
        function(callback) {
          manufacturerCreate(
            'TotalGym', 
            'Total Gym is the brand name for a line of fitness training equipment, created by Total Gym Global Corp, marketed and sold by Total Gym Commercial LLC and Total Gym Fitness, LLC. ',
        
            callback
            );
    },


            function(callback) {
                manufacturerCreate(
                  'Bowflex', 
                  'Bowflex is the brand name for a series of fitness training equipment, marketed and sold by Nautilus, Inc. Based in Vancouver, Washington, it sells its products through direct, retail and international channels. The first Bowflex product, Bowflex 2000X, was created in 1986.',
                  
                  callback
                  );

        },
    ],
        // optional callback
        cb
    );
}


function createComponents(cb) {
    async.parallel(
      [
        function (callback) {
          EquipmentCreate(
            "Intel® Core™ i7-9700K Processor",
            "The Core i7-9700k 3.6 GHz 8 Core Processor from Intel is designed for gaming, creating, and productivity.",
            9,
            429.99,
            categories[0],
            manufacturers[1],
            callback
          );
        },
      ],
      // optional callback
      cb
    );
  }




async.series([
    createCategories,
    createManufacturers,
    createComponents
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('BOOKInstances: '+bookinstances);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});
