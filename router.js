const router = require('express').Router();
const clientRouter = require('./routers/client.routers')


router.use('/clients', clientRouter);

module.exports = router;