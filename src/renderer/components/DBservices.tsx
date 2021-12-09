//createLogin DB first
import sqlite3 from 'sqlite3';

let db:any = new Sqlite3.Database('./DB/Login.db');
function CheckUser(user:string,pass:string){
db.run("CREATE TABLE users (id PRIMARY KEY ASC, username TEXT, password TEXT,dept TEXT)");
let selected_users = db.run("SELECT user FROM users WHERE username = user");
if(selected_users){

}
}