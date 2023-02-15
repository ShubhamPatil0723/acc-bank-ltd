import {db} from '../models/index.js'

//to handle file operations
import fs from 'fs';

//const PDFDocument = require('pdfkit');
import PDFDocument from 'pdfkit';

const {customers, Transaction} = db;

// main work

// 1. Transaction Reports

export const getReport = async (req, res) => {
    const date = new Date();
    const format = {
    dd: (date.getDate()),
    mm: (date.getMonth() + 1),
    yyyy: date.getFullYear()};
  
    try{
    //new customers
    const newCustomers =  await customers.findAll({ where: { createdAt: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` }})
    const {count,row}=await customers.findAndCountAll({ where: { createdAt: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` }})
    console.log(count)
    //updated customers
    const updatedCustomers=await customers.findAll({where :{updatedAt:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}})
    //to count updated users
    const{count1,row1}=await customers.findAndCountAll({where :{updatedAt:`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}})
    console.log(count1,row1)

    //Transaction of day
    const amt=await Transaction.sum('amount',{where:{transaction_status:'COMPLETED'}})
    
   //create text file
   const data = `Hello, this is a today's report file. 
                 __________________________________________________________________________________
                 today newly join customers total is ${count} are = ${JSON.stringify(newCustomers)} ,
                 _________________________________________________________________
                 newly updated Customers are = ${JSON.stringify(updatedCustomers)},
                 _________________________________________________________________
                 total amount transaction in bank = ${JSON.stringify(amt)} 
                 __________________________________________________________________` ;
    fs.writeFile('Report.txt', data, (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                  });
    //convert text file to pdf file 
    
    const text = fs.readFileSync('Report.txt', 'utf8',(err)=>{
        if(err)throw err;
      //  console.log('file is converted in to pdf!');
    });

    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('Report.pdf','utf8'));

    doc.font('Times-Roman')
   .text(text, {
     paragraphGap: 10,
     indent: 20,
     align: 'justify'
   });

doc.end();



   // console.log(newCustomers[0].customer);
   // console.log(updatedCustomers);
    // console.log(amt);
    res.status(200).send(`${newCustomers},${updatedCustomers}`)
}
catch(err){
    console.log(err);
}

}

