const dbConfig = require('./../config/db-config');

const db = new dbConfig();

function getSubdomain(request) {
    return 'mmm' || request.origin.split("//")[1].split('.')[0];
}

module.exports = async (req, res, next) => {

    /*
      1. Get sub-domain name 
      2. Check in router instance
      3. If there then change the connection of database
      4. If not service - unavailable  
     */
    try {
        let subdomain = getSubdomain(req);
    
        let tenantDetails = await db.checkTenant(subdomain);

        if(tenantDetails.length  === 0) {
            throw new Error("No Tenant Found");
        } else {
            let changeTenant = await db.changeTenant(tenantDetails[0].schema);
            res.send(changeTenant);
        }
    } catch (err) {
        next(err);
    }
}