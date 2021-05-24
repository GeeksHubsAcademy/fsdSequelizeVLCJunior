const { Client } = require("../models");

class User {

    async findAllClients(){
        return Client.findAll();
    }

    async signUpClient(client){
        
        return Client.create(client);
    }

}


let clientController = new User();
module.exports = clientController;