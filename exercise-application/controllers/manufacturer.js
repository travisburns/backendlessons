var Manufacturer = require('../models/manufacturer');
var Equipment = require('../models/equipment');
var async = require("async");
var mongoose = require("mongoose");



// Display list of all manufactuer's.
exports.manufacturer_list = function (req, res, next) {
    Manufacturer.find().exec(function (err, list_manufacturers) {
      if (err) return next(err);
  
      res.render("manufacturer_list", {
        title: "All Manufacturers",
        manufacturers: list_manufacturers,
      });
    });
  };

// Display detail page for a specific Author.
exports.manufacturer_detail = function(req, res) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        let err = new Error("invalid ObjectID");
        err.status = 404;
        return next(err);
    }

    async.parallel(
        {
            
        }
    )

};

// Display Author create form on GET.
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET.
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
