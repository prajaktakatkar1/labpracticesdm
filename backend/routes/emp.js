const express = require("express");
const router = express.Router();
const utils = require("../utils");
const db = require('../db')

// display all data of employee
router.get("/:empid", (request, response) => {
  const { empid } = request.params;

  
  const statement = `
        select * from Emp where
        empid = '${empid}'
      `;
  db.execute(statement, (error, result) => {
    
    if (result.length > 0) {
      // console.log(result.length);
      // console.log(result);
      response.send(utils.createResult(error, result));
    } else {
      response.send("user not found !");
    }
  });
});

router.post("/add", (request, response) => {
  const { name, salary, age } = request.body;

  const statement = `
        insert into Emp
          ( name,salary,age)
        values
          ( '${name}','${salary}','${age}')
      `;
      db.execute(statement, (error, result) => {
     response.send(utils.createResult(error, result));
  });
});


router.put("/update/:name", (request, response) => {
  const { name } = request.params;
  const { salary } = request.body;

  const statement = `
    update Emp
    set
      salary=${salary}
    where
      name = '${name}'
  `;

  db.execute(statement, (error, result) => {

    response.send(utils.createResult(error, result));
  });
});
router.delete("/delete/:name", (request, response) => {
  const { name } = request.params;
  const statement = `
    delete from Emp
    where
      name = '${name}'
  `;
 
  db.execute(statement, (error, result) => {

    response.send(utils.createResult(error, result));
  });
});

router.get("/find/:name", (request, response) => {
  const { name } = request.params;
  
        const statement = `select * from Emp where name = '${name}'
            `;
            db.execute(statement, (error, result) => {
          response.send(utils.createResult(error, result));
    
  });
});

module.exports = router