import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const Sobre = () => {
    return(
      <main class="container mb-6 pb-6">
        <div class="containerMain p-4">
          <div class="row">
            <div class="col-12 col-md-6"><span class="textSobre">
                <h2>Quem somos:</h2><br>Tegloja é uma loja e-commerce de produtos eletrônicos e jogos, fundada por alunos do
                Serratec no primeiro semestre de 2022, e desde seu início tem se esforçado para oferecer produtos e
                atendimento de boa qualidade prezando sempre por atender as necessidades de nossos clientes da
                melhor forma.
                <br><br>
                <h6>Trabalho Desenvolvimento Web - Serratec - Grupo 3</h6>
    
                Marcos Vinícios Freitas<br>
                Thiago Paes<br>
                Patrícia Motta<br>
                Nícolas Oliveira<br>
                Hítalo Taverna<br>
              </span>
    
            </div>
            <div class="col-12 col-md-6"><img class="imgSobre" src="./img/Undraw2.svg" alt="teste"></div>
          </div>
        </div>
      </main>
    )
}

export default Sobre;