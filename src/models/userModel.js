const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: "L'email est requis",
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: "Le role est obligatoire",
        enum: ["admin", "user"]
    }

});

module.exports = mongoose.model('User', userSchema);