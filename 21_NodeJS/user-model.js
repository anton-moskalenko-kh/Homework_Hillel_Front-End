const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    { timestamps: {
        createdAt: 'createDate',
            updatedAt: 'updateDate'
        }
    },
    { versionKey: false})

const UserModel = mongoose.model('users', usersSchema)

module.exports = UserModel;

