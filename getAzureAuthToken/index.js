const msal = require('@azure/msal-node');
const axios = require('axios');

module.exports = async function (context, req) {
    const msalConfig = {
        auth: {
            clientId: req.body.clientId,
            authority: req.body.authURL,
            clientSecret: req.body.clientSecret
        }
    };

    const cca = new msal.ConfidentialClientApplication(msalConfig);
    const tokenRequest = {
        scopes: [req.body.defaultURL + ".default"],
    };
    const tokenResponse = await cca.acquireTokenByClientCredential(tokenRequest);

    const listName = req.body.listName;
    const listURL = req.body.defaultURL + "sites/" + req.body.siteId + "/_api/web/lists/GetByTitle('" + listName + "')/items/" + req.body.itemId + "?expand=fields";
    
    console.log(tokenResponse.accessToken);
    
    const listItemRetriveOption = {
        headers: {
            "Authorization": `Bearer ${tokenResponse.accessToken}`,
            "Accept": "application/json;odata=verbose",
        }
    };

    const currentDataResponse = await axios.default.get(listURL, listItemRetriveOption);
    const currentData = currentDataResponse.json;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: currentData
    };
}