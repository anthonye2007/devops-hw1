var fs                = require('fs');
var computeManagement = require('azure-mgmt-compute');


// Authenticate to Azure using a pem file
// run `azure account cert export` to generate the pem file
var credentials = {
  subscriptionId: '8f323954-73ce-46ad-bb2b-a7e563e4c572',
  pem: fs.readFileSync('azure.pem', 'utf-8')
};

var computeManagementClient = computeManagement.createComputeManagementClient(computeManagement.createCertificateCloudCredentials(credentials));

// List all the virtual machine images you can use.
// added 'VM'
computeManagementClient.virtualMachineVMImages.list(function (err, result) {
  if (err) {
    console.error(err);
  } else {
    console.info(result);
  }
});
