const express = require('express');
var cors = require('cors')
var app = express()

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello from my  smarty pant');
})
const users = [
    { id: 1, name: 'Sabana', email: 'asdf@gmail.com', phone: '0135456355' },
    { id: 2, name: 'Sabnur', email: 'asdf@gmail.com', phone: '0135456355' },
    { id: 3, name: 'Socoita', email: 'asdf@gmail.com', phone: '0135456355' },
    { id: 4, name: 'Suchonsda', email: 'asdf@gmail.com', phone: '0135456355' },
    { id: 5, name: 'Sraboni', email: 'asdf@gmail.com', phone: '0135456355' }
]
app.get('/users', (req, res) => {
    console.log('quary', req.query);
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else {

        res.send(users);
    }
})
app.get('/users/:id', (req, res) => {

    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {

    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log('Listening to port', port)
})