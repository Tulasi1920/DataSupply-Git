let fs = require("fs");
let CommonFolder = require("../ForFolder/ForFileAsFolder");

let StartFunc = async ({ inFolderName, inFileNameOnly, inDataPK }) => {
    let LocalReturnData = { KTF: false, DirCreate: "", CreatedLog: {} };

    try {
        let LocalFromCheck = await CommonFolder.StartFunc({ inFolderName, inFileNameOnly, inDataPK });
        LocalReturnData.DirPath = LocalFromCheck.DirPath;
        LocalReturnData.FolderPath = LocalFromCheck.FolderPath;
        LocalReturnData.FilePath = LocalFromCheck.FilePath;
        LocalReturnData.ReturnDataPath = LocalFromCheck.ReturnDataPath;

        if (LocalFromCheck.KTF) {
            if (fs.existsSync(LocalFromCheck.ReturnDataPath)) {
                LocalReturnData.KTF = true;
            };
        };
    } catch (error) {
        console.log("error in datasupply : ", error);
    };

    return await LocalReturnData;
};

module.exports = { StartFunc };