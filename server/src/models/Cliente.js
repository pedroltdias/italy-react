import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
	{
		id: { type: String },
		nome: { type: String, required: true },
		nacionalidade: { type: String }
	},
	{
		versionKey: false
	}
)

const clientes = mongoose.model("cliente", clienteSchema);

export default clientes;