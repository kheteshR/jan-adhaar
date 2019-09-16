
const oracledb = require('oracledb');
oracledb.autoCommit = true
var config = require('config')
var queryExcute = require("../oracleDB/queryExcute");


module.exports={
    get_registered_citizen:get_registered_citizen
}

async function get_registered_citizen(callback){
    const get_all_user=await queryExcute.dbconfig(`SELECT COUNT(*) FROM VW_ENROLL_BDH_DATA where FAMILYIDNO IS NOT NULL AND MEM_ID IS NOT NULL;`)
    console.log("result",get_all_user);
    // if()
}