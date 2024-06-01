import mongoose from "mongoose";

const Schema = mongoose.Schema;

const produtoSchema = new Schema(
  {
    nome: {
      type: String,
      require,
    },
    disponivel: {
      type: Boolean,
      require,
    },
    valor: {
      type: Number,
      require,
    },
    imgURL: {
      type: String,
      require,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Produto", produtoSchema);
