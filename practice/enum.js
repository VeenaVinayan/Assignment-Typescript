// Implement enum
//const enum enum statusType
// enum statusType{
//     PENDING,
//     COMPLETED,
//     FAILED,
// }
// function getStatus(orderID: string,status:statusType){
//     console.log(orderID,"==",status);
// }
// getStatus("12345",statusType.COMPLETED);
//keyof type of
var statusType = {
    PENDING: "pending",
    COMPLETED: "completed",
    FAILED: "failed",
}; // Set Readonly property
function getStatus(orderID, status) {
    console.log(orderID, "==", statusType[status]);
}
getStatus("13598", "PENDING");
