import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/InputCadastro/App";
import Busca from "../../components/Busca";
import "./style.css";

export default function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    celular: "",
    endereco: "",
    bairro: "",
    cidade: "",
    cep: "",
    complemento: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5173/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/finalizarcompra"); // Redireciona para a página finalizar compra
      } else {
        console.error("Erro ao enviar os dados");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados", error);
    }
  };

  return (
    <>
      <div className="top-cadastro">
        <Busca />
      </div>
      <div className="margin-cadastro">
        <form className="form-cadastro" onSubmit={handleSubmit}>
          <div className="form-content">
            <h1>Criar Conta</h1>
            <h2>Informações Pessoais</h2>
            <hr />
            <Input
              htmlFor="nome"
              text="Nome completo *"
              id="nome"
              type="text"
              placeholder="Insira seu nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <Input
              htmlFor="email"
              text="E-mail *"
              id="email"
              type="text"
              placeholder="Insira seu e-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              htmlFor="cpf"
              text="CPF *"
              id="cpf"
              type="text"
              placeholder="Insira seu CPF"
              value={formData.cpf}
              onChange={handleChange}
            />
            <Input
              htmlFor="celular"
              text="Celular *"
              id="celular"
              type="text"
              placeholder="Insira seu celular"
              value={formData.celular}
              onChange={handleChange}
            />

            <h2>Informações de Entrega</h2>

            <hr />
            <Input
              htmlFor="endereco"
              text="Endereço *"
              id="endereco"
              type="text"
              placeholder="Insira seu endereço"
              value={formData.endereco}
              onChange={handleChange}
            />
            <Input
              htmlFor="bairro"
              text="Bairro *"
              id="bairro"
              type="text"
              placeholder="Insira seu bairro"
              value={formData.bairro}
              onChange={handleChange}
            />
            <Input
              htmlFor="cidade"
              text="Cidade *"
              id="cidade"
              type="text"
              placeholder="Insira sua cidade"
              value={formData.cidade}
              onChange={handleChange}
            />
            <Input
              htmlFor="cep"
              text="CEP *"
              id="cep"
              type="text"
              placeholder="Insira seu CEP"
              value={formData.cep}
              onChange={handleChange}
            />
            <Input
              htmlFor="complemento"
              text="Complemento"
              id="complemento"
              type="text"
              placeholder="Insira seu complemento"
              value={formData.complemento}
              onChange={handleChange}
            />
            <div className="checkbox-cadastro">
              <input type="checkbox" />
              <h5>
                Quero receber por email ofertas e novidades das lojas da Digital
                Store. A frequência de envios pode
                <br />
                variar de acordo com a interação do cliente.
              </h5>
            </div>
            <div className="button-cadastro">
              <button type="submit">Criar Conta</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
