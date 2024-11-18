import React, { useState } from "react";
import "./style.css";


export default function MinhasInformacoes() {
    return (
       <>
       <div className="container">
            <div className="nav-options"> 
                <p>Meu Perfil</p>
                <hr />
                <p>Meus Pedidos</p>
                <hr />
                <p>Minhas Informações</p>
                <hr />
                <p>Métodos de Pagamento</p>
            </div>

        <div className="informacoes">
            <section className="minhas-informacoes">
                <div>
                    <p><strong>Minhas Informações</strong></p>
                </div>
                <div className="edit-link">
                <a href="#">Editar</a>
                </div>
            </section>
            <hr/>
        
            <div className="informacoes-pessoais">
                <div className="title-informacoes">
                <h2>Informações Pessoais</h2>
                </div>
                <div className="nome">
                
                    <p>Nome:</p>
                    <p>Francisco Antonio Pereira</p>
                </div>
                <div className="CPF">
                    <p>CPF:</p>
                    <p>123485913-35</p>
                </div>
                <div className="email">   
                    <p>Email:</p>
                    <p>francisco@gmail.com</p>
                </div>
                <div className="celular"> 
                    <p>Celular:</p>
                    <p>(85) 5555-5555</p>
                </div> 
            </div>
                <hr/>
        
            <div className="informacoes-entrega">   
                <div className="title-entrega">
                    <h2>Informações de Entrega</h2>
                </div>
                <div className="endereco">
                    <p>Endereço:</p>
                    <p>Rua João Pessoa, 333</p>
                </div>
                <div className="bairro">
                    <p>Bairro:</p>
                    <p>Centro</p>
                </div>   
                <div className="cidade">  
                    <p>Cidade:</p>
                    <p>Fortaleza, Ceará</p>
                </div> 
                <div className="CEP">  
                    <p>CEP:</p>
                    <p>433-8800</p>
                </div>
            </div>  
        </div>
</div>   
       
       
       </>

    )
}