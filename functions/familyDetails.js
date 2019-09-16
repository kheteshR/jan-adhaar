
'use strict'

var bcSdk=require("../sdk/query.js");

exports.familyHistory= (key) => {
    return new Promise((resolve, reject) => {
        logger.info("insidereadProfileData")

        bcSdk.readData({
            key: key
        })

            .then((requestarray) => {
                if (requestarray.response == "record was not found please check the EHRID!") {
                    logger.info(requestarray.response)
                    return resolve({
                        status: 401,
                        data: requestarray.response
                    })
                } else if (requestarray.response == "No Records Were Found!") {
                    logger.info(requestarray.response)
                    return resolve({
                        status: 404,
                        data: requestarray.response
                    })

                } else {
                    var data = JSON.parse(requestarray.response[0].data);
                    return resolve({
                        status: 200,
                        data: data
                    })
                }
            })

            .catch(err => {
                logger.error(err)
                return reject({
                    status: 500,
                    message: 'Something went wrong please try again later!!'
                });

            })
    })

};