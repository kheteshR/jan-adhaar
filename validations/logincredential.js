
module.exports={
    credentialValidation:credentialValidation
}

async function credentialValidation(req,callback){
    
    const AADHAR_NO=req.body.aadhar_id;
    const password=req.body.password;
    if(!AADHAR_NO || !password ){
        err = {
            "status": 400,
            "message": 'fields should not be empty'
        }
        callback(err, "");

    }else{
        const params=[AADHAR_NO,password]
        const result=await mysqlConnection.query_execute(query.credentials,params)
        
        if(result.data.length!=0){
        callback("",{status:200,message:'login successfully done'});
    
    }else{
        callback({status:204,message:'user does not exist'},'')
    }
}
}