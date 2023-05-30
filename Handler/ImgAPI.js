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

exports.showImg = async (req, res) => {
    const imgAksaraSunda = db.collection("img_aksara-latin");
    const id = req.params.id

    try{
        const data = await imgAksaraSunda.doc(id).get()
        if(!data.exists){
            return res.status(404).send({status: "failed", message: "Data not found"})
        }
        return res.status(200).send({status: "success", message: "Data found", data: data.data()})
    }catch(err){
        console.log(err)
        return res.status(500).send({status: "failed", message: err})
    }
}

exports.dataImg = async (req, res) => {
    const imgAksaraSunda = db.collection("img_aksara-latin");

    try{
        const data = await imgAksaraSunda.get()
        if(data.empty){
            return res.status(404).send({status: "failed", message: "Data not found"})
        }
        let result = []
        data.forEach(doc => {
            result.push({
                id: doc.id,
                data: doc.data()
            })
        })
        return res.status(200).send({status: "success", message: "Data found", data: result})
    }catch(err){
        console.log(err)
        return res.status(500).send({status: "failed", message: err})
    }
}

exports.deleteImg = async (req, res) => {
    const imgAksaraSunda = db.collection("img_aksara-latin");
    const id = req.params.id

    try{
        const data = await imgAksaraSunda.doc(id).get()
        if(!data.exists){
            return res.status(404).send({status: "failed", message: "Data not found"})
        }
        await imgAksaraSunda.doc(id).delete()
        return res.status(200).send({status: "success", message: "Data deleted successfully"})
    }catch(err){
        console.log(err)
        return res.status(500).send({status: "failed", message: err})
    }
}

exports.updateImg = async (req, res) => {
    const imgAksaraSunda = db.collection("img_aksara-latin");
    const id = req.params.id
    const data_img = {
        foto: req.file.cloudStoragePublicUrl
    }

    try{
        const data = await imgAksaraSunda.doc(id).get()
        if(!data.exists){
            return res.status(404).send({status: "failed", message: "Data not found"})
        }
        await imgAksaraSunda.doc(id).update(data_img)
        return res.status(200).send({status: "success", message: "Data updated successfully"})
    }catch(err){
        console.log(err)
        return res.status(500).send({status: "failed", message: err})
    }
}