const Email = require("../models/email");

exports.sendmail = async (req, res) => {
  try {
    const { recipient, subject, readMail, text, sender, blueTick } = req.body;
    // console.log(req.body);
    const newEmail = new Email({
      recipient,
      subject,
      readMail,
      text,
      sender,
      blueTick,
    });
    const result = await newEmail.save();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({error});
  }
};
exports.inboxCheck = async (req, res) => {
  const email = req.params.email;
  const emails = await Email.find({recipient : email});
  // console.log(emails);
  res.status(200).json(emails);
};
exports.sentboxCheck = async (req, res) => {
  const email = req.params.email;
  const emails = await Email.find({sender : email});
  // console.log(emails);
  res.status(200).json(emails);
};
exports.deleteIndoxMail = async (req ,res)=>{
  try{
    console.log("check the deltemessage")
    const id = req.params.id;
    console.log(id);
    const result = await Email.deleteOne({_id : id});
    console.log(result , "delte result")
    if (result.deletedCount === 1) {
      res.status(200).json({ message: 'Email deleted successfully' });
    } else {
      res.status(404).json({ message: 'Email not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

exports.sentemailDetails = async(req ,res)=>{
  const emailId = req.params.id;
  const email = await Email.findByIdAndUpdate({_id : emailId} , {$set : { blueTick  : true} },{new : true});
  console.log(email , "sent email details");
  res.status(200).json(email);
}
exports.inboxemailDetails = async(req ,res)=>{
  const emailId = req.params.id;
  const email = await Email.findByIdAndUpdate({_id : emailId} , {$set : {readMail : true} },{new : true});
  console.log(email , "sent email details");
  res.status(200).json(email);
}