app.factory("storesFactory", ["$http", "$localStorage", "jwtHelper", function($http, $localStorage, jwtHelper){
    var factory = {};

    factory.login = function(username, password, callback){
        $http.post(
            "http://127.0.0.1:8000/api/auth/token",
            {
                "username": username,
                "password": password
            }
        )
        .then(function(returned_data){
            console.log(returned_data);
            var token = returned_data.data.token;
            $localStorage.currentUser = { username: username, token: token };
            $http.defaults.headers.common.Authorization = 'Bearer ' + token;
            var tokenPayload = jwtHelper.decodeToken(token);
            var date = jwtHelper.getTokenExpirationDate(token);
            var bool = jwtHelper.isTokenExpired(token);
            console.log("Token: " + token);
            console.log(tokenPayload);
            console.log("Valid until: " + date);
            console.log("Expired? " + bool); 
            console.log($localStorage.currentUser);
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err)
            callback(err.data);
        });
    }
    factory.logout = function(){
        delete $localStorage.currentUser;
        $http.defaults.headers.common.Authorization = '';
    }
    
    factory.getAllClients = function(callback){
        $http.get("assets/json/client_profiles.json")
        .then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//********* functions for loading options ***********
    factory.loadStates = function(callback){
        $http.get("assets/json/states.json")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.loadCountries = function(callback){
        $http.get("assets/json/countries.json")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.loadClientTypes = function(callback){
        $http.get("assets/json/client_types.json")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//*********for clientNewController functions***********
    factory.getZohoID = function(callback){
        $http.get('http://127.0.0.1:8000/api/zohocrm')
        .then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.getZohoAccount = function(id, callback){
        $http.get('http://127.0.0.1:8000/api/zohocrm/'+id)
        .then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

    factory.createClient = function(client, callback){
        console.log(client);
        $http.post("", client)
        .then(function(returned_data){
            console.log(returned_data.data);
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//*********for dashboardController functions***********
     factory.dashboardIndex = function(callback){
        $http.get("/dashboard")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//*********for productsController functions***********
    factory.productsIndex = function(callback){
        $http.get("/products")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
                console.log(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.createProduct = function(product, callback){
        console.log(product);
        $http.post("/products", product)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//*********for ordersController functions***********
    factory.ordersIndex = function(callback){
        $http.get("/orders")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.createOrder = function(newOrder, callback){
        $http.post("/orders", newOrder)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }


//*********for customersController functions***********
    factory.customersIndex = function(callback){
        $http.get("/customers")
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.createCustomer = function(customer, callback){
        console.log(customer);
        $http.post("/customers", customer)
        .then(function(returned_data){
            console.log(returned_data.data);
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    factory.deleteCustomer = function(id, callback){
        console.log(id);
        $http.delete("/customers/"+id)
        .then(function(returned_data){
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }

//Return the factory object.

    return factory;
}]);
