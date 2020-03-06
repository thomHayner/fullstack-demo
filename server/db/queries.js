// create db
//pool stuff goes here
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'buglist',
    password: '',
    port: 0420
})

const getAll = (req, res) => {
    pool.query('SELECT * FROM buglist', (err, data) => {
        if (err) {
            throw err
        }
        res.status(200).send(data)
    })
}

const getOne = (req, res) => {
    //set buglist = params
    pool.query('Select * FROM buglist WHERE threatlevel IS = $1', [buglist], (err, data) => {
        if (err) {
            throw err
        }
        res.status(200).send(data)
    })
}

const addBug = (req, res) => {
    //set inoutArr = params
    let inputArr = 
    pool.query('INSERT INTO buglist(descriptor, reportedby, createdat, assignedto, threatlevel) VALUES($1, $2, $3, $4, $5)', [inputArr], (err) => {
        if (err) {
            throw err
        }
        res.status(200).send('Great Success!!!')
    })
}

const markComplete = (req, res) => {
    pool.query('/*DO SOME UPDATE TYPE STUFF HERE*/', (err, data) => {
        if (err) {
            throw err
        }
        res.status(200).send('Marked Complete!!!')
    })
}


modules.export = { getAll, getOne, addBug, markComplete }