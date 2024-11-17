import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/InputFinalizar/App";
import "./style.css";

export default function FormFinalizar() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para finalizar a compra
    navigate("/comprafinalizada"); // Redireciona para a página inicial ou página de confirmação
  };

  return (
    <div className="form-finalizar-container">
      <form className="form-finalizar" onSubmit={handleSubmit}>
        <div className="form-content">
          <h1>Finalizar Compra</h1>

          <h2>Informações Pessoais</h2>
          <hr />
          <Input
            htmlFor="nome"
            text="Nome completo *"
            id="nome"
            type="text"
            placeholder="Insira seu nome"
          />
          <Input
            htmlFor="email"
            text="E-mail *"
            id="email"
            type="text"
            placeholder="Insira seu e-mail"
          />
          <Input
            htmlFor="cpf"
            text="CPF *"
            id="cpf"
            type="text"
            placeholder="Insira seu CPF"
          />
          <Input
            htmlFor="celular"
            text="Celular *"
            id="celular"
            type="text"
            placeholder="Insira seu celular"
          />

          <h2>Informações de Entrega</h2>
          <hr />
          <Input
            htmlFor="endereco"
            text="Endereço *"
            id="endereco"
            type="text"
            placeholder="Insira seu endereço"
          />
          <Input
            htmlFor="bairro"
            text="Bairro *"
            id="bairro"
            type="text"
            placeholder="Insira seu bairro"
          />
          <Input
            htmlFor="cidade"
            text="Cidade *"
            id="cidade"
            type="text"
            placeholder="Insira sua cidade"
          />
          <Input
            htmlFor="cep"
            text="CEP *"
            id="cep"
            type="text"
            placeholder="Insira seu CEP"
          />
          <Input
            htmlFor="complemento"
            text="Complemento"
            id="complemento"
            type="text"
            placeholder="Insira seu complemento"
          />

          <h2>Informações de Pagamento</h2>
          <hr />
          <Input
            htmlFor="cartao"
            text="Número do Cartão *"
            id="cartao"
            type="text"
            placeholder="Insira o número do cartão"
          />
          <Input
            htmlFor="validade"
            text="Validade *"
            id="validade"
            type="text"
            placeholder="MM/AA"
          />
          <Input
            htmlFor="cvv"
            text="CVV *"
            id="cvv"
            type="text"
            placeholder="Insira o CVV"
          />
          <Input
            htmlFor="nomeCartao"
            text="Nome no Cartão *"
            id="nomeCartao"
            type="text"
            placeholder="Insira o nome como está no cartão"
          />

          <div className="button-finalizar">
            <button type="submit">Finalizar Compra</button>
          </div>
        </div>
      </form>
    </div>
  );
}