var mongoose = require('mongoose');

var Schema =  mongoose.Schema;

var GenreSchema = new Schema(
    {
        Genre: {type: String, required: true, maxLength: 3 < 100}
    }
);


GenreSchema
.virtual('url')
.get(function(){
    return 'catalog/genre' + this._id;
});

//export model

module.exports = mongoose.model('Genre', GenreSchema);

