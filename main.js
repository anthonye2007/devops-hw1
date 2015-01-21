var fs                = require('fs');
var computeManagement = require('azure-mgmt-compute');

var credentials = {
  subscriptionId: '8f323954-73ce-46ad-bb2b-a7e563e4c572',
  pem: fs.readFileSync('azure.pem', 'utf-8')
};

var computeManagementClient = computeManagement.createComputeManagementClient(computeManagement.createCertificateCloudCredentials(credentials));
