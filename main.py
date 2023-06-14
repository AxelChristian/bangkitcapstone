import uvicorn
import traceback
import tensorflow as tf
import numpy as np

from tensorflow.keras.preprocessing import image
from fastapi import FastAPI, Response, UploadFile
from io import BytesIO

model = tf.keras.models.load_model("./model_cnn.h5")
labels = {0:'ka', 1:'ca', 2:'ta', 3:'pa', 4:'ya', 5:'wa', 6:'ga', 7:'ja', 8:'da', 9:'ba', 10:'ra', 11:'sa', 12:'nga', 13:'nya', 14:'na', 15:'ma', 16:'la', 17:'ha'}

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "dunia"}

@app.post("/uploadfile")
async def create_upload_file(upload_file:UploadFile, response: Response):
    try:
        if upload_file.content_type not in ["image/jpeg", "image/png"]:
            response.status_code = 400
            return {"message": "Only image/jpeg & image/png supported"}
        
        tes = upload_file.file.read()
        img = image.load_img(BytesIO(tes), target_size=(64, 64))
        # print(img)
        img2 = image.img_to_array(img)
        # print(img2)
        img3 = img2/225.0
        # print(img3.shape)
        img4 = img3.reshape(1, 64, 64, 3)
        # print(img4)

        pred = model.predict(img4)
        pred *= 100
        print(pred)
        indeks = np.argmax(pred)
        print(indeks)
        hasil = labels[indeks]
        print(hasil)
        # result = model.predict(img4)
        # print(type(result))

        return {"result": hasil, "filename": upload_file.filename}
    
    except Exception as e:
        traceback.print_exc()
        response.status_code = 500
        return {"message": str(e)}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=3000)