var config = require('config');
var dbConfig = config.get('multichainConfig');
let multichain = require("multichain-node")(dbConfig);

module.exports = {
    readData
}

function readData(params) {

    return new Promise((resolve) => {
        logger.info("insidereadData")
        var key = params.key;
        var patientDetails = [];
        var response;
        multichain.listStreamKeyItems({
            stream: "MedicalInfo",
            "key": key
        }, (err, res) => {
            var length = res.length;
            if (err == null) {
                if (length != 0) {
                    var string = '';
                    var data = res[length - 1].data;
                    string = Buffer.from(data, 'hex').toString();
                    var strlength = (JSON.parse(string)).length
                    if (strlength == 0) {
                        return resolve({
                            response: "No Records Were Found!"
                        });
                    } else {

                        patientDetails.push({
                            "publishers": res[0].publishers[0],
                            "key": res[0].key,
                            "data": string,
                            "confirmations": res[0].confirmations,
                            "blocktime": res[0].blocktime,
                            "txid": res[0].txid,

                        });
                        return resolve({
                            response: patientDetails
                        });
                    }
                }else {
                        return resolve({
                            response: "record was not found please check the EHRID!"
                        });
                    }
                
                
                }else {
                    multichain.listStreamKeyItems({
                        stream: "migration",
                        "key": key
                    }, (err, res) => {
                        var length = res.length;
                        if (err == null) {
                            if (length != 0) {
            
                                var string = '';
                                var data = res[length - 1].data;
                                string = Buffer.from(data, 'hex').toString();
                                var strlength = (JSON.parse(string)).length
                                if (strlength == 0) {
                                    return resolve({
                                        response: "No Records Were Found!"
                                    });
                                } else {
            
                                    patientDetails.push({
                                        "publishers": res[0].publishers[0],
                                        "key": res[0].key,
                                        "data": string,
                                        "confirmations": res[0].confirmations,
                                        "blocktime": res[0].blocktime,
                                        "txid": res[0].txid,
            
                                    });
                                    return resolve({
                                        response: patientDetails
                                    });
                                }
                            } 
                        } else {
                            logger.error(err)
                        }
                    })            
                }
            //  else {
            //     logger.error(err)
            // }
        })

    })

}