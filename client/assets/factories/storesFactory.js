app.factory("storesFactory", ["$http", "$cookies", "jwtHelper", function($http, $cookies, jwtHelper){
    var factory = {};

//********* login and logout function ***********
    factory.login = function(user, callback){
        $http.post(
            "http://127.0.0.1:8000/api/auth/token/",
            {
                "username": user.username,
                "password": user.password
            }
        )
        .then(function(returned_data){
            var token = returned_data.data.token;
            $cookies.put("token", token)
            // $http.defaults.headers['Authorization'] = 'JWT ' + token;
            // var tokenPayload = jwtHelper.decodeToken(token);
            // var date = jwtHelper.getTokenExpirationDate(token);
            // var bool = jwtHelper.isTokenExpired(token);
            // console.log("The token is: " + token);
            // console.log(tokenPayload);
            // console.log("Valid until: " + date);
            // console.log("Expired? " + bool); 
            callback(returned_data.data);
        })
        .catch(function(err){
            console.log(err.data);
            callback(err.data);
        });
    }

    factory.logout = function(){
        $cookies.remove("token");
        $cookies.remove("username");
        $http.defaults.headers.Authorization = '';
    }


//*********for clientProfileController functions***********

    factory.getAllClients = function(callback){
        // $http({
        //     url: "http://127.0.0.1:8000/api/client/",
        //     method: "GET",
        //     headers: {
        //         "Authorization": "JWT " + $cookies.get("token"),
        //         'Content-Type': 'application/json',
        //     }
        // })
        $http.get("http://127.0.0.1:8000/api/client/")
        .then(function(returned_data){
            console.log(returned_data);
            callback(returned_data.data);
        })
        .catch(function(err){
            console.log(err.data);
            callback(err.data);
        });
    }

//********* functions for loading options ***********
    factory.loadStates = function(callback){
        $http.get("assets/json/states.json")
        .then(function(returned_data){
            callback(returned_data);
        })
        .catch(function(err){
            console.log(err);
            callback(err);
        });
    }

    factory.loadCountries = function(callback){
        $http.get("assets/json/countries.json")
        .then(function(returned_data){
            callback(returned_data);
        })
        .catch(function(err){
            console.log(err);
            callback(err);
        });
    }

//*********for clientNewController functions***********
    factory.getZohoID = function(callback){
        $http.get('http://127.0.0.1:8000/api/zohocrm')
        .then(function(returned_data){
            callback(returned_data.data);
        })
        .catch(function(err){
            console.log(err);
            callback(err);
        });
    }

    factory.getZohoAccount = function(id, callback){
        $http.get('http://127.0.0.1:8000/api/zohocrm/'+id)
        .then(function(returned_data){
            callback(returned_data.data);
        })
        .catch(function(err){
            console.log(err);
            callback(err);
        });
    }

    factory.getClientTypes = function(callback){
        $http.get("http://127.0.0.1:8000/api/client/type/")
        .then(function(returned_data){
            callback(returned_data.data);
        })
        .catch(function(err){
            console.log(err);
            callback(err);
        });
    }

    factory.createClient = function(client, callback){
        console.log(client);
        $http({
            url:"http://127.0.0.1:8000/api/client/create/",
            method: "POST",
            data: client,
            headers: {
                "Authorization": "JWT " + $cookies.get("token"),
                'Content-Type': 'application/json',
            }
        })
        .then(function(returned_data){
            console.log(returned_data.data);
            if(typeof(callback)=="function"){
                callback(returned_data.data);
            }
        })
        .catch(function(err){
            console.log(err);
            callback(err);
        });
    }











// old functions for the project
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
