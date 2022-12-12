import clientes from "../models/Cliente.js";

class ClienteController {

	static listarClientes = (req, res) => {
		clientes.find((err, clientes) => {
			res.status(200).json(clientes);
		});
	}

	static listarClientePorId = (req, res) => {
		const id = req.params.id;

		clientes.findById(id, (err, clientes) => {
			if (err) {
				res.status(400).send({ message: `${err.message} - ID do Cliente não localizado.` });
			} else {
				res.status(200).send(clientes);
			}
		})
	}

	static cadastrarCliente = (req, res) => {
		let cliente = new clientes(req.body);

		cliente.save((err) => {

			if (err) {
				res.status(500).send({ message: `${err.message} - Falha ao cadastrar Cliente.` });
			} else {
				res.status(201).send(cliente.toJSON());
			}
		});
	}

	static atualizarCliente = (req, res) => {
		const id = req.params.id;

		clientes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
			if (!err) {
				res.status(200).send({ message: "Cliente atualizado com sucesso" })
			} else {
				res.status(500).send({ message: err.message })
			}
		});
	}

	static excluirCliente = (req, res) => {
		const id = req.params.id;

		clientes.findByIdAndDelete(id, (err) => {
			if (!err) {
				res.status(200).send({ message: "Cliente removido com sucesso" })
			} else {
				res.status(500).send({ message: err.message })
			}
		});
	}
}

export default ClienteController;