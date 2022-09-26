let CommonPullDataAdmin = require("../../../../PullData/FromConfig");
let CommonPushDataAdmin = require("../../../../PushData/ToConfig");
let CommonColumnJsonFuncs = require("../../../../../../../../Fix/Json/SupplyJson");

let FixColumnData = ({ inColumnObject }) => {
    inColumnObject.CreateNew = true;
    inColumnObject.Insert = true;
    inColumnObject.ShowInTable = true;
};

let Insert = async({ inJsonConfig, inItemConfig, inColumnName, inUserPK }) => {
    try {
        let LocalReturnData = { KTF: false, LocalCreateItem: "" };
        let LocalReturnFromPush;
        let LocalNewColumnObject = CommonColumnJsonFuncs.TableColumn();

        FixColumnData({ inColumnObject: LocalNewColumnObject });

        LocalNewColumnObject.DisplayName = inColumnName;
        LocalNewColumnObject.DataAttribute = inColumnName;

        let LocalDisplayData = await CommonPullDataAdmin.AsJsonAsync({ inJsonConfig, inUserPK });

        let LocalDisplayDataObject = JSON.parse(JSON.stringify(LocalDisplayData));
        let LocalItemScreenData = LocalDisplayDataObject[inItemConfig.inItemName][inItemConfig.inScreenName];

        LocalItemScreenData.TableColumns.push(LocalNewColumnObject);

        LocalReturnFromPush = await CommonPushDataAdmin.AsAsync({
            inJsonConfig,
            inUserPK,
            inOriginalData: LocalDisplayData,
            inDataToUpdate: LocalDisplayDataObject
        });

        return await LocalReturnFromPush;

    } catch (error) {
        console.log("error : ", error);
    };

};

let MockFuncInsert = async({ inJsonConfig, inItemConfig, inColumnName, inUserPK }) => {
    return await Insert({ inJsonConfig, inItemConfig, inColumnName, inUserPK });
};

MockFuncInsert({
    inJsonConfig: { inFolderName: "Masters", inJsonFileName: "f1.json" },
    inItemName: { inItemName: "item1", inScreenName: "Create" },
    inColumnName: "Col1",
    inDataPK: 1016
}).then(p => {
    console.log("P : ", p);
});
module.exports = { Insert };