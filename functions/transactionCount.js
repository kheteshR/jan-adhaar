
const oracledb = require('oracledb');
oracledb.autoCommit = true
var config = require('config')
var queryExcute = require("../oracleDB/queryExcute");



module.exports={
    getTotalTransCount,
    getTotalDistricts,
    getTotalBlocks,
    genderCount
}
async function getTotalTransCount(callback){
var result;
return new Promise(async function(resolve, reject) {
 let connection;
 try {
result = await queryExcute.dbconfig(`SELECT COUNT(*) FROM citizen_profile_data_keystore`,[])
console.log(result,"result")
return resolve({"result":result.result})                                           
}catch(err){
reject(err)
     } 
    })
 }

 async function getTotalDistricts(callback){
    var result;
    return new Promise(async function(resolve, reject) {
     let connection;
     try {
    result = await queryExcute.dbconfig(`SELECT COUNT(DISTINCT district) FROM vw_enroll_bdh_data_v2`,[])
    console.log(result,"result")
    return resolve({"result":result.result})                                           
    }catch(err){
    reject(err)
         } 
        })
     }

async function getTotalBlocks(callback){
var result;
return new Promise(async function(resolve, reject) {
let connection;
try {
result = await queryExcute.dbconfig(`SELECT COUNT(DISTINCT block_city) FROM vw_enroll_bdh_data_v2`,[])
console.log(result,"result")
var result = {
    'success': true,
    'data': {
        'code': 00,
        'message': "Blocks Count",
        'count':result.result[0][0],
        'status_type': '',
        'status_popupmessage_type': ''
    },
    "isSuccessful": true,
    "statusCode": 200
};
return resolve(result);

                                      
}catch(error){
reject(error)
} 
})
}

async function genderCount(callback){
    var result;
    return new Promise(async function(resolve, reject) {
    let connection;
    try {
    Female = await queryExcute.dbconfig(`select count(*) from (select distinct BHAMASHAH_ID, MEM_ID from VW_ENROLL_BDH_DATA_V2 where GENDER='Female' AND MEM_ID IS NOT NULL)`,[])
    console.log(result,"result")
    Male = await queryExcute.dbconfig(`select count(*) from (select distinct BHAMASHAH_ID, MEM_ID from VW_ENROLL_BDH_DATA_V2 where GENDER='Male' AND MEM_ID IS NOT NULL)`,[])
    console.log(Male,"Male")
    return resolve({"Female":Female.result,"Male":Male.result})  
    }catch(err){
    reject(err)
    } 
    })
    }