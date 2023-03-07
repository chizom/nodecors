const express = require('express')
const request = require('request');
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const router = express.Router()

// router.post('/', (req, res) => {
//     const requestOptions = {
//         url: 'http://192.168.6.119:9090/notification/ie/service/mail',
//         method: 'POST',
//         json: {
//           "from":"application-support@ikejaelectric.com",
//           "recipients":["cechehieuka@ikejaelectric.com","chizomreal@gmail.com"],
//           "subject":"testing mail from test server",
//           "msg":"<h1>testing mail</h1> from <b>test server</b> now!!!"   
//         },
        
//       };
//       request(
//         requestOptions,
//         (err, response, body) => {
//           renderHomepage(req, res);
//         }
//       );
//       res.json({
//         msg: 'sent'
//       })
// })

// router.post('/', jsonParser, (req, res, next) => {
//     console.log(req.body)
//     // const from = req.body.from
//     // const recipients = req.body.recipients
//     // const subject = req.body.subject
//     // const msg = req.body.msg
    
//     const from = 'hello world'
//     const recipients = 'cechehieuka@ikejaelectric.com'
//     const subject = 'testing'
//     const msg = 'testing'

//     request({
//       uri: 'http://192.168.6.119:9090/notification/ie/service/mail',
//       method: 'POST',
//       json: {
//         from: from,
//         recipients: recipients,
//         subject: subject,
//         msg: msg   
//       },
//     //   qs: {
//     //     api_key: '123456',
//     //     query: 'World of Warcraft: Legion'
//     //   }
//     }).pipe(res.json({
//         msg: 'email sent'
//     }));

    
//   });


router.post('/', jsonParser, (req, res, next) => {
  console.log(req.body)
  // const from = req.body.from
  // const recipients = req.body.recipients
  // const subject = req.body.subject
  // const msg = req.body.msg
  
  const from = 'hello world'
  const recipients = 'cechehieuka@ikejaelectric.com'
  const subject = 'testing'
  const msg = 'testing'

  request({
    uri: 'https://rest.cryptoapis.io/wallet-as-a-service/wallets/63f0cb659e4cfc0007386e73/bitcoin/testnet/addresses?context=generatedForChizom',
    method: 'POST',
    json: {
      "context": 'yourExampleString',
      "data": {
        "item": {
          "label": "Ure Echehieuka"
        }
      },
    },
  //   qs: {
  //     api_key: '123456',
  //     query: 'World of Warcraft: Legion'
  //   }
  }).pipe(res.json());

  
});


module.exports = router