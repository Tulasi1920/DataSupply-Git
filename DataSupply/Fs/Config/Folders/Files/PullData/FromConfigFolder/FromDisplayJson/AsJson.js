let CommonCheck = require("../../../Check");
let path = require("path");
let fs = require("fs");

let FromFoldFile = async ({ inFolderName, inFileNameWithExtension, inDataPK }) => {
    //console.log("inUserPK : ", inUserPK);
    let LocalDataPK = inDataPK;
    let LocalReturnObject = {
        KTF: false,
        JsonData: {}
    };

    if (LocalDataPK > 0) {
        let LocalDataFromCommonCreate;
        let LocalDataFromJSON;
        let LocalFolderName = inFolderName;
        let LocalFileNameWithExtension = inFileNameWithExtension;
        let LocalFilePath;

        LocalDataFromCommonCreate = await CommonCheck.InConfig({
            inFolderName: LocalFolderName,
            inFileNameOnly: path.parse(LocalFileNameWithExtension).name, inUserPK: LocalDataPK
        });
        //console.log("ssssssssss : ", LocalDataFromCommonCreate);
        if (LocalDataFromCommonCreate.KTF) {
            LocalFilePath = LocalDataFromCommonCreate.FilePath
            LocalDataFromJSON = await fs.readFileSync(LocalFilePath);
            LocalReturnObject.JsonData = JSON.parse(LocalDataFromJSON);

            LocalReturnObject.KTF = true;
        };
    };

    return await LocalReturnObject;
};

module.exports = {
    FromFoldFile
};