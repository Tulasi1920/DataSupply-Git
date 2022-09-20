let fs = require("fs");
let CommonFolder = require("../Check");

let ForFile = ({ inFolderName, inFileNameWithExtension, inUserPK }) => {
    let LocalReturnData = { KTF: false, DirPath: "", FilePath: "", CreatedLog: {} };

    let LocalFolderInfo = CommonFolder.ForExistence({ inFolderName, inUserPK });
    
    if (LocalFolderInfo.KTF) {
        LocalReturnData.DirPath = LocalFolderInfo.DirPath;
        LocalReturnData.FilePath = `${LocalReturnData.DirPath}/${inFileNameWithExtension}`;

        if (fs.existsSync(LocalReturnData.FilePath)) {
            LocalReturnData.KTF = true;
        };
    } else {
        LocalReturnData.KReason = LocalFolderInfo.KReason;
    };

    return LocalReturnData;
};

let InConfig = ({ inFolderName, inFileNameOnly, inUserPK }) => {
    let LocalReturnData = { KTF: false, DirCreate: "", CreatedLog: {} };
    let LocalFolderInfo = CommonFolder.ForConfig({ inFolderName, inUserPK });
    LocalReturnData.DirPath = LocalFolderInfo.DirPath;
    LocalReturnData.FolderPath = `${LocalReturnData.DirPath}/${inFileNameOnly}`;
    LocalReturnData.FilePath = `${LocalReturnData.FolderPath}/Display.json`;
    LocalReturnData.ReturnDataPath = `${LocalReturnData.FolderPath}/ReturnData.json`;

    if (LocalFolderInfo.KTF) {
        if (fs.existsSync(LocalReturnData.FilePath)) {
            LocalReturnData.KTF = true;
        };
    };

    return LocalReturnData;
};

module.exports = { ForFile, InConfig };