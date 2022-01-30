import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const router = express.Router();

let users = [
    // {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 21
    // },
    // {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 22
    // }
]

//  all routs in here are starting with /users
router.get('/', (req, res) => {
    // console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    // console.log('POST ROUTE REACHED');
    const user =  req.body;
    users.push({ ...user, id: uuidv4() });
    // users.push(); 
    res.send(`User with the name ${user.firstName} added to the database`);
});

// /user/2 => req.params { id: 2 }
router.get('/:id', (req, res) => {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id /= id);

    res.send(`User with the id ${id} deleted from the database`);
});


export default router;
