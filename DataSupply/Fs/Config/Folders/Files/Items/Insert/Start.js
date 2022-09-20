let CommonToDataFolder = require("./ToDataFolder");
let CommonToDisplayFolder = require("./ToDisplayFolder");

let Insert = async ({ inJsonConfig, inToName, inUserPK }) => {
    let LocalReturnData = { KTF: false, KResult: [] };
    let LocalRetrunFromToDataJson = await CommonToDataFolder.Insert({ inJsonConfig, inToName, inUserPK });
    let LocalReturnDataFromDisplay = await CommonToDisplayFolder.Insert({ inJsonConfig, inToName, inUserPK });

    if (LocalReturnDataFromDisplay.KTF && LocalRetrunFromToReturnData.KTF && LocalRetrunFromToDataJson.KTF) {
        LocalReturnData.KTF = true;
        LocalReturnData.KResult.push(LocalReturnDataFromDisplay);
        LocalReturnData.KResult.push(LocalRetrunFromToReturnData);
        LocalReturnData.KResult.push(LocalRetrunFromToDataJson);
    };

    return LocalReturnData;
};

module.exports = { Insert };