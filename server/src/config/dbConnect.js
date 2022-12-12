import mongoose from "mongoose";

mongoose.connect("mongodb+srv://pedro:pedro123456@italy.33528eb.mongodb.net/italy?");
//mongodb+srv://pedrodias:<password>@cluster0.cbmsw.mongodb.net/nomeDatabase?
//mongodb+srv://alura:123@alura.cnt6f.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://alura:123@alura.cnt6f.mongodb.net/alura-node?

let db = mongoose.connection;

export default db;