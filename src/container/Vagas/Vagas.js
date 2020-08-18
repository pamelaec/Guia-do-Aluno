import React, { Component } from 'react';


export default class Vagas extends Component {

    render() {
        return (
            <div class="container">
                <h2>Anúncios de vagas</h2>
                <br>
                <div class="row text-center">
                    <a href="#" data-toggle="modal" data-target="#siteModal">
                        <button type="button" class="btn btn-success">Publicar vaga</button>
                    </a>
                </div>
                    <br>
                    <h2>Publicações recentes:</h2><br>                       
                    <div class="modal fade" id="siteModal" tabindex="-1" role="dialog">
                        <div class="modal-dialog modal-lg" role="document">
                            <!--FORMULARIO DO CADASTRO -->
                            <form>
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Preencha os dados abaixo:</h5>
                                            <button type="button" class="close" data-dismiss="modal">
                                                <span>&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="container-fluid">
                                                    <div class="col-12">
                                                        <table class="table">
                                                            <tr>
                                                                <td><label for="titulo">Titulo:</label></td>
                                                                <td><input type="text" 
                                                                    class="form-control" 
                                                                    id="userTitulo" 
                                                                    name="Titulo"
                                                                     placeholder="Titulo da publicação"></td>
                                                            </tr>            
                                                            <tr>
                                                                <td><label for="telefone">Telefone:</label></td>
                                                                <td><input type="text" 
                                                                    class="form-control"
                                                                     id="userTelefone" 
                                                                     name="Telefone" 
                                                                     pattern="^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$" 
                                                                     placeholder="Ex: (00) 0000-0000"></td>
                                                            </tr>
                                                            <tr>
                                                                <td><label for="message">Descrição da vaga: </label></td>
                                                                <td><textarea 
                                                                    type="message" 
                                                                    class="form-control"
                                                                     id="userMessage"
                                                                      name="Message"
                                                                       placeholder="Descrição da Vaga "></textarea>
                                                            </tr>
                                                        </table>                                            
                                                    </div>
                                            </div> 
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" name="publicar" id="publicar" class="btn btn-success">Publicar</button>
                                        </div>                        
                                    </div>
                           </form>
                        </div>
            </div>
        
        );
    }
}