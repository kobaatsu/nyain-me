const path = require('path')
const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')

const USERNAME = 'user'
const PASSWORD = 'pass'

const app = express()

app.use(basicAuth(USERNAME, PASSWORD))
app.use(express.static(path.join(__dirname, '/dist')))

exports.firebaseAuth = functions.https.onRequest(app)
