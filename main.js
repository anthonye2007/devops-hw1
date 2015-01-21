var fs                = require('fs');
var computeManagement = require('azure-mgmt-compute');

//console.log(computeManagement.createCertificateCloudCredentials);

var pemFile = fs.readFileSync('azure.pem', 'utf-8');
console.log("pemFile: " + pemFile);

var credentials = {
  subscriptionId: '8f323954-73ce-46ad-bb2b-a7e563e4c572',
  pem: pemFile
};

console.log("Credentials: " + credentials);

var me = computeManagement.createCertificateCloudCredentials(credentials);

var computeManagementClient = computeManagement.createComputeManagementClient(me);

