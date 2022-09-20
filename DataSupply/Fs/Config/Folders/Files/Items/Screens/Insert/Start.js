let CommonToDisplayFolder = require("./ToDisplayFolder");
//let CommonToDisplayFolder = require("./");

let Insert = async ({ inJsonConfig, inItemName, inScreenName, inUserPK }) => {
    let LocalReturnData = { KTF: false, LocalCreateItem: "" };
    let LocaFromDataFolder = await CommonToDisplayFolder.Insert({ inJsonConfig, inItemName, inScreenName, inUserPK });

    if (LocaFromDataFolder.KTF) {
        LocalReturnData.KTF = true;
    };

    return await LocalReturnData;
};

let InsertWithKPk = async ({ inJsonConfig, inItemName, inScreenName, inUserPK, inKPk }) => {
    let LocalReturnData = { KTF: false, LocalCreateItem: "" };
    let LocaFromDataFolder = await CommonToDisplayFolder.InsertWithKPk({
        inJsonConfig, inItemName, inScreenName, inUserPK,
        inKPk
    });

    if (LocaFromDataFolder.KTF) {
        LocalReturnData.KTF = true;
    };

    return await LocalReturnData;
};

let FromTemplate = async ({ inJsonConfig, inItemName, inUserPK, inFirstRow }) => {
    //console.log("FromTemplate");
    let LocalReturnData = { KTF: false, LocalCreateItem: "" };
    let LocaFromDataFolder = await CommonToDisplayFolder.FromTemplate({
        inJsonConfig, inItemName, inUserPK, inFirstRow
    });

    if (LocaFromDataFolder.KTF) {
        LocalReturnData.KTF = true;
    };

    return await LocalReturnData;
};

module.exports = {
    Insert, InsertWithKPk,
    FromTemplate
};