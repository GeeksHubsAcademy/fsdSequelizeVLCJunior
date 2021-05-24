const router = require('express').Router();
const clientController = require('../controllers/client.controller');

//CRUD

router.get('/', async(req, res) => {
    try {
        res.json(await clientController.findAllClients())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('/', async(req, res) => {
    try {
        const id = await clientController.signUpClient(req.body);
        const status = 'success';
        res.json({ status, id });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})

module.exports = router;