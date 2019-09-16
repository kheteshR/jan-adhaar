'use strict';
var request = require('request');


module.exports = {
    authenticateSSOID:authenticateSSOID
}

function authenticateSSOID(req, callback) {
    console.log("inside authenticateSSOID")
    const UserName = req.body.UserName
    const Password = Buffer.from(req.body.Password).toString('base64');
    if (!UserName || !UserName.trim() || !Password || !Password.trim()) {

        var err = {
            "status": 401,
            "message": 'fields should not be empty'
        }
        callback(err);

    } else {

            var json = {
                "UserName": UserName,
                "Password": Password
            };
        
            var options = {
                url: 'http://ssotest.rajasthan.gov.in:8888/SSOREST/SSOAuthenticationJSON',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                json: json
            };
        
            request(options, function (err, res, body) {
        
        
                if (res.body.valid == true) {
                    callback("", res.body);
                } else {
                    callback(res.body, "");
                }
        
            });
        
        }
        
    
}