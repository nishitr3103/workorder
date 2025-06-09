
// const oracledb = require("oracledb");

// async function run() {
//   let connection;

//   try {
//     connection = await oracledb.getConnection({
//       user: "your_db_user",
//       password: "your_password",
//       connectString: "hostname:port/service_name", // or alias
//     });

//     const result = await connection.execute("SELECT * FROM your_table");
//     console.log("Query Results:", result.rows);

//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Close error:", err);
//       }
//     }
//   }
// }

// run();



const data = [
    {
      name:'Alex',
      city:'paris',
      process: 'Copper Repair',
      id:'3903143',
      lex:'03wbi',
      area:'A2W',
      zone:'N/A',
      contractor:'TV GoSmarter',
      catoNumber:'12345',
      closure: "18/10/2024",
      snn: "038869402",
      workorder: "WO1260462_980758029_840938_SER_CS11167037_WO1260462-1 (R-JTR)",
      address: "LOTERIE NATIONALE KONINGLEOPOLDLAAN 13 2870 Puurs-Sint-Amands",
      contract: "46 00120.A2.R.CA TV GoSmarter",
      per: "840938",
      jobCode: "R-JTR",
      feedback: "7 / 0 / 0",
    },
    {
      name:'Bruno',
      city:'london',
      process: 'Copper Repair',
      id:'3903145',
      lex:'03wbi',
      area:'A2W',
      zone:'N/A',
      contractor:'Mobile GoSmarter',
      catoNumber:'12345678',
      closure: "18/10/2024",
      snn: "038869402",
      workorder: "WO1260462_980758029_840938_SER_CS11167037_WO1260462-1 (PBX)",
      address: "LOTERIE NATIONALE KONINGLEOPOLDLAAN 13 2870 Puurs-Sint-Amands",
      contract: "46 00120.A2.R.CA TV GoSmarter",
      per: "840938",
      jobCode: "R-JTRR",
      feedback: "7 / 0 / 0",
    },
  ];

module.exports = data;
