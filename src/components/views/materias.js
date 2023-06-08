import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../views/materias.css';
import listTaskImage from '../../static/img/list-task.svg';

const Materias = () => {
  useEffect(() => {
    // Ajustar a posição do scroll após a navegação
    const adjustScrollPosition = () => {
      const navbarHeight = document.getElementById('navbar-example3').offsetHeight;
      window.scrollBy(0, -navbarHeight);
    };

    const navLinks = document.querySelectorAll('#navbar-example3 .nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', adjustScrollPosition);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', adjustScrollPosition);
      });
    };
  }, []);

  return (
    <div className="card">
      <div className="row">
        <div className="col-4">
          <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ms-3 my-1" href="#bloco-i">
                BLOCO I: Língua Portuguesa
              </a>
              <a className="nav-link ms-3 my-1" href="#bloco-ii">
                BLOCO II: Conhecimentos em Direito
              </a>

              


              <a className="nav-link ms-3 my-1" href="#bloco-iii">
                BLOCO III: Conhecimentos Gerais
              </a>
            </nav>
          </nav>
        </div>

        <div className="col-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example3"
            data-bs-offset="0"
            data-bs-duration="200"
            className="scrollspy-example-2"
            tabIndex="0"
          >
            <div id="bloco-i" className="mb-4">
              <h4>BLOCO I: Língua Portuguesa</h4>
              <p>(24) questões:</p>
              <ol>
                <li>Análise, compreensão e interpretação de diversos tipos de textos verbais, não verbais, literários e não literários.</li>
                <li>Informações literais e inferências possíveis.</li>
                <li>Ponto de vista do autor.</li>
                <li>Estruturação do texto: relações entre ideias; recursos de coesão.</li>
                <li>Significação contextual de palavras e expressões.</li>
                <li>Sinônimos e antônimos.</li>
                <li>Sentido próprio e figurado das palavras.</li>
                <li>Classes de palavras: emprego e sentido que imprimem às relações que estabelecem: substantivo, adjetivo, artigo, numeral, pronome, verbo, advérbio, preposição e conjunção.</li>
                <li>Concordância verbal e nominal.</li>
                <li>Regência verbal e nominal.</li>
                <li>Colocação pronominal.</li>
                <li>Crase.</li>
                <li>Pontuação.</li>
              </ol>
            </div>
            <div id="bloco-ii" className="mb-4">

              
              <h4>BLOCO II: Conhecimentos em Direito</h4>

              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p>(40) questões:

                <a className="nav-link ms-3 my-1" href="#bloco-i">
                  <img src={listTaskImage} alt="Descrição da imagem" />
                </a>

                </p>

              </div>

              <ol>
                <h5>DIREITO PENAL:</h5>
                <ul>
                  <li>Código Penal - artigos 293 a 305; 307; 308; 311-A; 312 a 317; 319 a 333; 336 e 337; 339 a 347; 357 e 359.</li>
                </ul>
                <h5>DIREITO PROCESSUAL PENAL:</h5>
                <ul>
                  <li>Código de Processo Penal - artigos 251 a 258; 261 a 267; 274; 351 a 372; 394 a 497; 531 a 538; 541 a 548; 574 a 667 e Lei nº 9.099 de 26.09.1995 (artigos 60 a 83; 88 e 89).</li>
                </ul>
                <h5>DIREITO PROCESSUAL CIVIL:</h5>
                <ul>
                  <li>Código de Processo Civil - artigos 144 a 155; 188 a 275; 294 a 311 e do 318 a 538; 994 a 1026; Lei nº 9.099 de 26.09.1995 (artigos 3º ao 19) e Lei nº 12.153 de 22.12.2009.</li>
                </ul>
                <h5>DIREITO CONSTITUCIONAL:</h5>
                <ul>
                  <li>Constituição Federal – Título II - Capítulos I, II e III; e Título III - Capítulo VII com Seções I e II; e também o artigo 92.</li>
                </ul>
                <h5>DIREITO ADMINISTRATIVO:</h5>
                <ul>
                  <li>Estatuto dos Funcionários Públicos Civis do Estado de São Paulo (Lei n.º 10.261/68) – artigos 239 a 323; e Lei Federal nº 8.429/92 (Lei de Improbidade Administrativa)</li>
                </ul>
                <h5>NORMAS DA CORREGEDORIA GERAL DA JUSTIÇA (disponíveis no portal do Tribunal de Justiça – site: www.tjsp.jus.br, na área Institucional / Corregedoria / Normas Judiciais):</h5>
                <ul>
                  <li>Tomo I – Capítulo II: Seção I – subseções I e II;</li>
                  <li>Tomo I - Capítulo III: Seções I, II, V, VI, VII;</li>
                  <li>Tomo I - Capítulo III: Seção VIII – subseções I, II e III;</li>
                  <li>Tomo I – Capitulo III: Seções IX a XV, XVII a XIX;</li>
                  <li>Tomo I – Capítulo XI: Seções I, IV e V;</li>
                  <li>Tomo I – Capitulo XI: Seção VI – subseções I, III, V e XIII.</li>
                </ul>
              </ol>
            </div>
            <div id="bloco-iii">

              <h4>BLOCO III: Conhecimentos Gerais</h4>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p>(40) questões:

                <a className="nav-link ms-3 my-1" href="#bloco-i">
                  <img src={listTaskImage} alt="Descrição da imagem" />
                </a>
                </p>

              </div>

              <ul>
                <h5>Atualidades</h5>
                <li>1. Questões relacionadas a fatos políticos, econômicos, sociais e culturais, nacionais e internacionais, ocorridos a partir do 2° semestre de 2022, divulgados na mídia local e/ou nacional;</li>
                <li>2. Artigos 1º ao 13; 34 ao 38 da Lei nº 13.146/2015 – Estatuto da Pessoa com Deficiência, com as alterações vigentes até a publicação deste edital.</li>
                <h5>Matemática</h5>
                <ul>
                  <li>Operações com números reais.</li>
                  <li>Mínimo múltiplo comum e máximo divisor comum.</li>
                  <li>Razão e proporção.</li>
                  <li>Porcentagem.</li>
                  <li>Regra de três simples e composta.</li>
                  <li>Média aritmética simples e ponderada.</li>
                  <li>Juros simples.</li>
                  <li>Equação do 1.º e 2.º graus.</li>
                  <li>Sistema de equações do 1.º grau.</li>
                  <li>Relação entre grandezas: tabelas e gráficos.</li>
                  <li>Sistemas de medidas usuais.</li>
                  <li>Noções de geometria: forma, perímetro, área, volume, ângulo, teorema de Pitágoras.</li>
                  <li>Resolução de situações-problema.</li>
                </ul>
                <h5>Informática</h5>
                <ul>
                  <li>MS-Windows 10 ou superior: conceito de pastas, diretórios, arquivos e atalhos, área de trabalho, área de transferência, manipulação de arquivos e pastas, uso dos menus, programas e aplicativos, interação com o conjunto de aplicativos do Microsoft-365.</li>
                  <li>MS-Word: estrutura básica dos documentos, edição e formatação de textos, tabelas, impressão, controle de quebras e numeração de páginas, inserção de objetos, campos predefinidos.</li>
                  <li>MS-Excel: estrutura básica das planilhas, conceitos de células, linhas, colunas, pastas e gráficos, elaboração de tabelas e gráficos, uso de fórmulas, funções e macros, impressão, inserção de objetos, campos predefinidos.</li>
                  <li>Correio Eletrônico: uso de correio eletrônico, preparo e envio de mensagens, anexação de arquivos.</li>
                  <li>Internet: navegação na internet, conceitos de URL, links, sites, busca e impressão de páginas.</li>
                  <li>MS Teams: chats, chamadas de áudio e vídeo, criação de grupos, trabalho em equipe com Word, Excel, PowerPoint, SharePoint e OneNote, agendamento de reuniões e gravação.</li>
                  <li>OneDrive: armazenamento e compartilhamento de arquivos.</li>
                </ul>
                <h5>Raciocínio Lógico</h5>
                <ul>
                  <li>Visa avaliar a habilidade do(a) candidato(a) em entender a estrutura lógica das relações arbitrárias entre pessoas, lugares, coisas, eventos fictícios; deduzir novas informações das relações fornecidas e avaliar as condições usadas para estabelecer a estrutura daquelas relações.</li>
                  <li>Identificação de regularidades em sequências numéricas e figurais, a fim de determinar o elemento em uma posição específica.</li>
                  <li>Estruturas lógicas: análise de argumentos, diagramas lógicos e avaliação de sua validade.</li>
                  <li>Resolução de problemas que envolvem frações, conjuntos, porcentagens, sequências (com números, com figuras e de palavras), equivalência e transformação de unidades de medida.</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materias;
