// check if the image name provided in the URL exists in the assets/full directory
// by checking the existingImgs.csv file to find a match

import fs from 'fs';
import { OG_IMGS_CSV } from '../logging/logExistingImgs';
import { filename } from '../routes/api/resize';

function checkImg() {
    fs.readFile(OG_IMGS_CSV, function (err, data) {
        if (err) throw err;
        if (data.includes(filename)) { console.log('Valid Image Name. Processing...'); }
        else { console.log('Unvalid Image Name.. Check and Retry.') };
    });
}

export default checkImg;
