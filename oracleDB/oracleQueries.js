
module.exports.highestHitConsumedAPI = 'select WIDGET_NAME,TOTAL_COUNT,CREATE_COUNT, READ_COUNT, UPDATE_COUNT, DELETE_COUNT, SUMMARY_COUNT FROM WIDGET_COUNT  ORDER BY TOTAL_COUNT DESC'
module.exports.leastHitConsumedAPI = 'select WIDGET_NAME,TOTAL_COUNT,CREATE_COUNT, READ_COUNT, UPDATE_COUNT, DELETE_COUNT, SUMMARY_COUNT FROM WIDGET_COUNT  ORDER BY TOTAL_COUNT ASC'
module.exports.successCountOfAPI = 'select WIDGET_NAME,SUCCESS_COUNT from WIDGET_COUNT where WIDGET_NAME = :WIDGETNAME '
module.exports.failureCountOfAPI = 'select WIDGET_NAME,FAILURE_COUNT from WIDGET_COUNT where WIDGET_NAME = :WIDGETNAME '
module.exports.totalSuccessFailure='select WIDGET_NAME,SUCCESS_COUNT,FAILURE_COUNT from WIDGET_COUNT'
module.exports.countofDevices = 'select * from DEVICES_COUNT'



module.exports.timeTakeByAPIs = 'select * from TIME_TAKEN_BY_APIS where WIDGET_NAME = :WIDGET_NAME'
module.exports.hitConsumedAPI = 'select WIDGET_NAME,TOTAL_COUNT,CREATE_COUNT, READ_COUNT, UPDATE_COUNT, DELETE_COUNT, SUMMARY_COUNT FROM WIDGET_COUNT where WIDGET_NAME = :WIDGETNAME '
module.exports.getTransactionCountOfAPIS = 'select WIDGET_NAME,sum(ADD_API_S+ READ_API_S+UPDATE_API_S+DELETE_API_S+SUMMARY_API_S+ADD_API_F+ READ_API_F+UPDATE_API_F+ DELETE_API_F+SUMMARY_API_F) from APIS_COUNTS group by rollup (WIDGET_NAME)'
module.exports.countConsumedAPI = 'select * from APIS_COUNTS where WIDGET_NAME = :WIDGET_NAME'
// module.exports.getMedicalReport = 'select * from MEDICAL_REPORT'
module.exports.getMedicalReport = 'SELECT SUM(SHARE_RECORDS_COUNT) from KEYSTORE'



module.exports.usersCountOfWidget = 'SELECT count(*) from USER_COUNTS where ALLERGY is not null'
