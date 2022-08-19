import sharp from "sharp";
import { filename, height, width } from '../routes/api/resize';
import resImgLogger from '../logging/logResizedImg'

let resImgName: string;

function resizeImg(filename: string, height: number, width: number) {
    resImgName = String(filename + '_' + height + '_' + width + '.jpg');
    
    // sharp

    resImgLogger();
    console.log('Image has been resized');
    // open resImgName
}

export default resizeImg;
export { resImgName };
