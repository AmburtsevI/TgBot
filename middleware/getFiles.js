import fs from "fs";

export const getFiles = () => {

    const dir = fs.readFileSync('./utils/urls.txt', 'utf8', (err, data) => {

        if (err) {
            console.log(err)
        }
    })

    let arrayOfUrls = dir.split('; ')

    let arrayOfObjects = arrayOfUrls.map((d, index) => {
            let obj = {
                "type": "photo",
                "media": d,
            }
            return obj
        });

    let size = 10;
    let subarray = [];
    for (let i = 0; i < Math.ceil(arrayOfObjects.length / size); i++) {
    	subarray[i] = arrayOfObjects.slice(i * size, i * size + size);
        if (subarray[i].length < size) {
 
        }
    }

    console.log(subarray)
    return subarray;
};
