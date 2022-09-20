let CommonToDataFolder = require("./ToDataFolder");
let CommonToDisplayFolder = require("./ToDisplayFolder");
let CommonToReturnDataJson = require("./ToReturnDataJson");

let InsertNew = async ({ inFolderName, inFileName, inUserPK }) => {
    let LocalReturnData = { KTF: false };
    let LocalReturnFromData = await CommonToDataFolder.CreateDataFolder({
        inFolderName,
        inFileNameWithExtension: inFileName, inUserPK
    });
    let LocalRetrunFromConfig;
    let LocalFromToReturnDataJson;

    if (LocalReturnFromData.KTF) {
        LocalRetrunFromConfig = await CommonToDisplayFolder.CreateConfigFolder({
            inFolderName,
            inFileNameWithExtension: inFileName, inUserPK
        });

        if (LocalRetrunFromConfig.KTF) {
            LocalReturnData.KTF = true;

            LocalFromToReturnDataJson = await CommonToReturnDataJson.StartFunc({
                inFolderName,
                inFileNameWithExtension: inFileName, inUserPK
            });

            if (LocalRetrunFromConfig.KTF) {
                LocalReturnData.KTF = true;
            };
        };
    };

    return await LocalReturnData;
};

module.exports = { InsertNew };
