var Request = require("request");
var mysql = require('mysql');

// Request.get("https://api.blockcypher.com/v1/btc/main/addrs/1EpDDhzLmQZ6ecpMSUZY2ogYq3eJmdfg5s", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
   

   

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "smartportfolio",
      //multipleStatements: true
    });



    var records = [
        ['1106','qe3ewr33qe5942a4ccba3961eb57bcade55832518rrtrtewerwdcfe6e9e774a3', '5665455', '455488', '2017-12-26T04:25:07Z','65434'],
        ['1206', '9c1a1b11405942a4ccba3961eb57bcade55832518a27abb675e5cfe6e9e774a3', '5665455', '455488', '2017-12-26T04:25:07Z','65434'],
        ['1306', '9c1a1b11405942a4ccba3961eb57bcader4332518a27abb675e5cfe6e9e7jjuv', '5665455', '455488', '2017-12-26T04:25:07Z','65434']
];



   //parsing top 

    // let obj = JSON.parse(body);

    //     console.log("Address: ", obj.address);
    //     console.log("total_received: ", obj.total_received);
    //     console.log("total_sent: ", obj.total_sent);
    //     console.log("balance: ", obj.balance);

    //   // var shareInfoLen = Object.keys(obj.txrefs[0]).length;

    //  // console.log("Length: ", shareInfoLen);
        
    //     for(var i=0; i<obj.final_n_tx;i++){
    //         var value= obj.txrefs[i].tx_hash;
    //         console.log("tx_hash: ", value);
    //     }

    //     con.connect(function(err) {
    //         if (err) throw err;
    //         // if connection is successful
    //         console.log('Connected');
    //     var sql = "INSERT INTO apidata_table (tran_id,tran_hash,block_height,confirmations,confirmed,ref_balance) VALUES ?";
    //     var query = con.query(sql, [records], function(err, result) {
    //     console.log(result);
    //     });
    // });


    con.query("INSERT INTO apidata_table (tran_id,tx_hash,block_height,confirmations,confirmed,ref_balance) VALUES ?", [records], function (err, result, fields) {
        // if any error while executing above query, throw error
        if (err) throw err;
        // if there is no error, you have the result
        console.log(result);
      });

con.end();

// });