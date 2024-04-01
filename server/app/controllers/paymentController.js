const payment = require('../middleware/cybersource')


exports.paymentCheck = (req, res) => {
    
    
    payment.payment()
      .then(data => {
        
        res.send(data)
  
      })
      .catch(err => {
  
        res.status(500).json({
  
          message:
            err.message || "Some error occurred while retrieving tutorials."
  
        });
      });
  };
  
  
  