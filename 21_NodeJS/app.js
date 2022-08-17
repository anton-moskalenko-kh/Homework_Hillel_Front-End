const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./user-model')
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://anton_moskalenko_kh:kompas2005@cluster0.bjobz86.mongodb.net/users', {},
    () => {
        console.log('Db is online')
    })

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello User')
})

// Find all users
app.get('/users', (req, res) => {
    UserModel.find().then((r) => {
        res.send(r);
    })
})

// Find one user
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    UserModel.findOne({_id: id}).then(r => res.send(r))
        .catch(e => res.status(400).send(e))
})

// Add User
app.post('/users', (req, res) => {
    const user = new UserModel(req.body)
    user.save().then((r) => {
        res.send(r);
    })
        .catch(e => res.status(400).send(e))
})

//Change user data
app.put('/users/:id', (req, res) => {
    const id = req.params.id
    const user = req.body
    UserModel.updateOne({_id: id}, user)
        .then(r => UserModel.findById(id))
        .then(r => res.send(r))
        .catch(e => res.status(400).send(e))
})

//Delete user
app.delete('/users/:id', (req, res) => {
    UserModel.deleteOne({_id: req.params.id}).then(r => res.send(r))
        .catch(e => res.status(400).send(e))
})

app.listen(PORT, () => {
    console.log('Dev started')
})