

function digitalDataLayer(family,rmc){
    var layer = {
        environment: {
            environmentVersion: "V7",
            coBrandedVersion: "Bespoke",
        },
        page: {
            pageType: "model page",
            pageFamilyName:family
        },
        products:{
            productRMC:rmc
        }
    };
    return layer
}

export default digitalDataLayer