import React, { Component } from 'react';


export default class Horarios extends Component {

    render() {
        return (
            <div   className = "container"><br></br>
            <h3    style     = {{textAlign: 'center', color: 'black'}}>HORÁRIO DE ÔNIBUS</h3>
            <div   className = "row">
            <div   className = "col-lg-2">
            <table className = "table table-bordered table-hover">
                    <thead>
                     <tr colspan = "2">Posto Girassol</tr>
                          <th>Ida</th>
                          <th>Retorno</th>
                         </thead>
                         <tbody>
                     <tr>
                            <td>06: 25</td>
                            <td>06: 55</td>
                      </tr>
                      <tr>
                            <td>07: 20</td>
                            <td>07: 55</td>
                      </tr>
                      <tr>
                            <td>08: 10</td>
                            <td>08: 45</td>
                      </tr>
                      <tr>
                            <td>09: 00</td>
                            <td>09: 35</td>
                      </tr>
                      <tr>
                            <td>10: 00</td>
                            <td>10: 35</td>
                      </tr>
                      <tr>
                            <td>11: 00</td>
                            <td>11: 30</td>
                      </tr>
                      <tr>
                            <td>12: 30</td>
                            <td>13: 10</td>
                      </tr>
                      <tr>
                            <td>13: 20</td>
                            <td>13: 55</td>
                      </tr>
                      <tr>
                            <td>14: 10</td>
                            <td>14: 45</td>
                      </tr>
                      <tr>
                            <td>15: 05</td>
                            <td>15: 40</td>
                      </tr>
                      <tr>
                            <td>16: 00</td>
                            <td>16: 40</td>
                      </tr>
                      <tr>
                            <td>17: 05</td>
                            <td>17: 30</td>
                      </tr>
                      <tr>
                            <td>18: 25</td>
                            <td>18: 55</td>
                      </tr>
                      <tr>
                            <td>19: 20</td>
                            <td>19: 55</td>
                      </tr>
                      <tr>
                            <td>20: 15</td>
                            <td>20: 45</td>
                      </tr>
                      <tr>
                            <td>21: 10</td>
                            <td>21: 45</td>
                      </tr>
                      <tr>
                            <td>22: 10</td>
                            <td>22: 40</td>
                      </tr>
                      <th colspan = "2">Percurso</th>
                      <tr></tr>
                        <tr>
                              <td colspan = "2">Posto Girassol, Rua Santos Dumont, Sorveteria do Jesus, Quartel (PMMG), Rua do comércio, Rua Alzira Torres</td></tr>
                              </tbody>
                          </table>
                    </div>
              
              <div   className = "col-lg-10">
              <table className = "table table-bordered table-hover">
            <thead>
              <tr><th colspan = "3">Cerrado</th></tr>
              <tr>
                  <th>Ida</th>
                  <th>Retorno</th>
                  <th>Percurso</th>
              </tr>
            </thead>
             <tbody>
             <tr>
                       <td>06: 25</td>
                       <td>-</td>
                       <td>Rodoviária, Cerrado, Campos, Rocinha, Rua do Comércio, Rua Alzira Torres</td>
                      </tr>
                      <tr>
                       <td>-</td>
                       <td>07: 10</td>
                       <td>Quartel (PMMG), Restaurante Avenida, Rua Santos Dumont, Posto Girassol</td>
                      </tr>
                      <tr>
                       <td>-</td>
                       <td>11: 30</td>
                       <td>Quartel (PMMG), Sorveteria do Jesus, Forúm, Cerrado, Rodoviária</td>
                      </tr>
                      <tr>
                       <td>12: 25</td>
                       <td>-</td>
                       <td>Rodoviária, Cerrado, Campos, Rua Tiradentes, Sorveteria do Jesus, Forúm, Rocinha, Rua do Comécio, Rua Alzira Torres</td>
                      </tr>
                      <tr>
                       <td>-</td>
                       <td>14: 45</td>
                       <td>Quartel, Sorveteria do Jesus, Forúm, Cerrado, Rodoviária</td>
                      </tr>
                      <tr>
                       <td>-</td>
                       <td>15: 40</td>
                       <td>Quartel, Sorveteria do Jesus, Forúm, Cerrado, Rodoviária</td>
                      </tr>
                      <tr>
                       <td>18: 30</td>
                       <td>-</td>
                       <td>Rodoviária, Cerrado, Campos, Rua Tiradentes, Sorveteria do Jesus, Forúm, Rocinha, Rua do Comécio, Rua Alzira Torres</td>
                      </tr>
                      <tr>
                       <td>-</td>
                       <td>17: 30</td>
                       <td>Quartel, Sorveteria do Jesus, Forúm, Cerrado, Rodoviária</td>
                      </tr>
                      <tr>
                       <td>-</td>
                       <td>19: 10</td>
                       <td>Quartel, Sorveteria do Jesus, Forúm,Rodoviária, Cerrado</td>
                      </tr>
             </tbody>
             </table>

             <table class = "table table-bordered table-hover mt-5">
                    <thead>
                      <tr><th colspan = "3">Rola moça</th></tr>
                      <tr>
                          <th>Ida</th>
                          <th>Retorno</th>
                          <th>Percurso</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>06: 25</td>
                            <td>-</td>
                            <td>Rua Tiradentes, Sorveteria do Jesus, Forúm, Rocinha, Rua do comércio, Rua Alzira Torres</td>
                      </tr>
                      <tr>
                            <td>-</td>
                            <td>17: 05</td>
                            <td>Quartel (PMMG), Restaurante Avenida, Rua Santos Dumont, Posto Girassol</td>
                      </tr>
                     </tbody>
                </table>

                <table class = "table table-bordered table-hover mt-5">
                    <thead>
                      <tr><th colspan = "3">Alto da antena</th></tr>
                      <tr>
                          <th>Ida</th>
                          <th>Retorno</th>
                          <th>Percurso</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>06: 25</td>
                            <td>-</td>
                            <td>Supermercado Mag Mag, Supermercado São Francisco, Escola Sagrado Coração (Lagoa Seca), Bolota Lanches, Rua Santo Antônio</td>
                      </tr>
                      <tr>
                            <td>-</td>
                            <td>17: 30</td>
                            <td>Rua Santo Antônio, Bolota Lanches, Escola Sagrado Coração (Lagoa Seca)</td>
                      </tr>
                     </tbody>
                </table>
             </div>
             <div   className = "col-lg-12">
             <table className = "table table-bordered table-hover">
                    <thead>
                      <tr>
                          <th>Sábados, domingos e feriados</th></tr>
                      <tr>
                      <tr></tr>
                          <th colspan = "3">Posto Girasol</th></tr>
                      <tr>
                          <th>Ida</th>
                          <th>Retorno</th>
                          <th>Percurso</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                           <td>06: 25</td>
                           <td>07: 10</td>
                           <td>Posto Girassol, Cerrado, Santos Dumont, Sorveteria do Jesus, Quartel (PMMG), Rua do Comércio, Rua Alzira Tôrres.</td>
                        </tr>
                        <tr>
                           <td>10: 30</td>
                           <td>11: 10</td>
                           <td >Posto Girassol, Santos Dumont, Sorveteria do Jesus, Quartel (PMMG), Rua do Comércio, Rua Alzira Tôrres.</td>
                        </tr>
                        <tr>
                           <td>12: 30</td>
                           <td>13: 10</td>
                           <td>Posto Girassol, Santos Dumont, Sorveteria do Jesus, Quartel (PMMG), Rua do Comércio, Rua Alzira Tôrres.</td>
                        </tr>
                        <tr>
                           <td>15: 30</td>
                           <td>16: 10</td>
                           <td>Posto Girassol, Santos Dumont, Sorveteria do Jesus, Quartel (PMMG), Rua do Comércio, Rua Alzira Tôrres.</td>
                        </tr>
                        <tr>
                           <td>18: 30</td>
                           <td>19: 10</td>
                           <td>Posto Girassol, Santos Dumont, Sorveteria do Jesus, Quartel (PMMG), Rua do Comércio, Rua Alzira Tôrres.</td>
                        </tr>
                        <tr>
                           <td>21: 15</td>
                           <td>-</td>
                           <td>(Somentes aos Domingos) Rodoviária,  Santos Dumont, Sorveteria do Jesus, Quartel (PMMG), Rua do Comércio, Rua Alzira Tôrres.</td>
                        </tr>   
                    </tbody>
                    </table>

</div>
</div>
</div>

                          
        
          ); 
        
      
    }
}