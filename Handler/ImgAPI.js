const { db } = require("../Config/firebaseAdmin");
const { customAlphabet } = require("nanoid");

exports.uploadImg = async (req, res) => {
    const imgAksaraSunda = db.collection("img_aksara-latin");
    const nanoid = customAlphabet('123ABC',5)
    const id = nanoid()
    const data = {
        foto: req.file.cloudStoragePublicUrl
    }

    try{
        await imgAksaraSunda.doc(id).set(data)
        console.log(data)
        return res.status(200).send({status: "success", message: "Image uploaded successfully"})
    }catch(err){
        console.log(err)
        return res.status(500).send({status: "failed", message: err})
    }
}