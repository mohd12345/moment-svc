import * as mongoose from "mongoose";
const fs = require("fs");

export const isValidObjectId = (id: any) => mongoose.Types.ObjectId.isValid(id);

export const generateObjectId = () => mongoose.Types.ObjectId();

export const fileUpload = (data: any) => {
  return new Promise((resolve, reject) => {
    try {
      const base64Data = data.replace(/^data:image\/png;base64,/, "");
      const binaryData = new Buffer(base64Data, "base64").toString("binary");
      const imagePath = `${generateObjectId()}.png`;
      fs.writeFile(
        "upload/" + imagePath,
        binaryData,
        "binary",
        function (err: any) {
          if (err) {
            reject(err);
          } else {
            let dataToPass = {
              url: "upload/" + imagePath,
            };
            resolve(dataToPass);
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};
