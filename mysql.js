var mysql=require('mysql')

var con=mysql.createConnection({
    host:'3306',
    user:'root',
    password:'12345'
});

con.connect(function(err){
    if(err)
    return
    console.log('connected');

    var sql='CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
    con.query(sql,function(err,result){
        if (err)
        return
        console.log('Database created');
    });
});