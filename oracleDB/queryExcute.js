var oracledb = require('oracledb');
oracledb.autoCommit = true;

var config = require('config');
var dbConfig = config.get('OraConfig');


exports.dbconfig = (sqlQuery,params) => {
    return new Promise((resolve, reject) => {

        oracledb.getConnection(dbConfig,
        function(err, connection) {
            if (err) {
                console.error("failure",err);
                return;
            }
            connection.execute(
                sqlQuery,params, // bind value for :id
                function(err, result) {
                    if (err) {
                         console.error("failure",err);
                        return resolve({code:400,
                            result:err
                            })
                       
                        doRelease(connection);
                        return;
                    }
                    console.log("success")
                    return resolve({code:201,
                        result:result.rows,
                        rowsAffected:result.rowsAffected
                        })
                    doRelease(connection);
                });
        });
     
     })
}
function doRelease(connection) {
        connection.close(
            function(err) {
                if (err)
                    console.error(err);
            });
   
}

exports.updateFunction = (sqlQuery,params) => {
    return new Promise((resolve, reject) => {

        oracledb.getConnection(dbConfig,
        function(err, connection) {
            if (err) {
                console.error("failure",err);
                return;
            }
            connection.execute(
                sqlQuery,params, // bind value for :id
                function(err, result) {
                    if (err) {
                        console.error("failure",err);
                        return resolve({code:400,
                            result:err
                            })
                        doRelease(connection);
                        return;
                    }
                    console.error("success");
                    return resolve({code:201,
                        result:result.rows,
                        rowsAffected:result.rowsAffected
                        })
                    doRelease(connection);
                });
        });
     
     })
}
function doRelease(connection) {
        connection.close(
            function(err) {
                if (err)
                    console.error(err);
            });
   
}