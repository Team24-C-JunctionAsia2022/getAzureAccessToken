# getAzureAccessToken
Get Azure Access Token and SharePoints List Item

- Role: Get Access Token from Sharepoint and get lists created by PowerApps, send resources to another function — “createFamilyCareTemplate”
- Input: Client ID, Auth URL, Client secret from Azure App Registration Portal, List item id to get total information.
- Output: JSON string that contains data of list item.

> How to register application?

1. Go to Azure portal → find Search menu on the top bar.
2. Search “App Registration” and click.
3. Put name you want and select type to use more widely or not.
4. Once created, find “Certificate and Password” menu.
5. Upload certification if you have one from IT department in your company, or create Client Secret temporary. (* Currently, back-end code is not yet prepared for certification auth.)
6. Copy client secret. Also, please remember client ID from Summary menu.
7. Connect PowerApps or other applications with API.

> How to run this backend function? 

This app is optimized for Azure Functions. please clone its repository and upload to Azure Cloud with extension or additional tools that introduced by Microsoft officially.
