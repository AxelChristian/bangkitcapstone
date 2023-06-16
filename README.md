# bangkitcapstone
require install:
1. express
2. firebase
3. firebase-admin
4. @google-cloud/storage
5. dateformat@3
6. nanoid@3
7. multer

for install nodemon use this (npm i --save-dev nodemon)

if run with nodemon
-> npm run start-dev

## How to deploy google cloud
1. clone this github on the google cloud:
-> git clone -b main https://github.com/AxelChristian/bangkitcapstone.git
   OR
-> git clone https://github.com/AxelChristian/bangkitcapstone.git
2. Go into folder "bangkitcapstone" using terminal
3. Create file app.yaml
4. insert code this in app.yaml
-> runtime: nodejs16
   service: backend
6. Deploy the RestAPI using gcloud app deploy
7. after finis deploy you get the base URL
8. you can testing API with postman or any other

note: 
if you first time deploy, you can change "service: backend" be "service:default"
