let CommonPullData = require("../../PullData/FromData");
let CommonPushData = require("../../PushData/ToData");
//let CommonPushDataAdmin = require("../../DefultFileNames/Display/PushData");

let CommonFuns = {
    ToDisplay: async ({ inJsonConfig, inToName, inUserPK }) => {
        let LocalReturnData = { KTF: false, LocalCreateItem: "" };
        let LocalFromPushDataFuncAsync;

        let LocalDataFromJSON = await CommonPullData.AsJsonAsync({ inJsonConfig, inUserPK });
        let LocalDataFromJSONObject = JSON.parse(JSON.stringify(LocalDataFromJSON));
        if (inToName in LocalDataFromJSONObject === false) {
            LocalDataFromJSONObject[inToName] = {};

            LocalFromPushDataFuncAsync = await CommonPushData.AsAsync({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalDataFromJSONObject });
            console.log("LocalFromPushDataFuncAsync: ", LocalFromPushDataFuncAsync);

            if (LocalFromPushDataFuncAsync.KTF) {
                LocalReturnData.KTF = true;
            };
        };

        return LocalReturnData;
    }
};

let Insert = async ({ inJsonConfig, inToName, inUserPK }) => {
    let LocalReturnData = { KTF: false, LocalCreateItem: "" };
    let LocalFromPushDataFuncAsync;

    let LocalDataFromJSON = await CommonPullData.AsJsonAsync({ inJsonConfig, inUserPK });
    let LocalDataFromJSONObject = JSON.parse(JSON.stringify(LocalDataFromJSON));
    if (inToName in LocalDataFromJSONObject === false) {
        LocalDataFromJSONObject[inToName] = {};

        LocalFromPushDataFuncAsync = await CommonPushData.AsAsync({ inJsonConfig, inUserPK, inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalDataFromJSONObject });
        console.log("LocalFromPushDataFuncAsync: ", LocalFromPushDataFuncAsync);

        if (LocalFromPushDataFuncAsync.KTF) {
            LocalReturnData.KTF = true;
        };
    };

    return LocalReturnData;
};

module.exports = { Insert };