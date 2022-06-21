import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const Contato = () => {
    return(
        <main class="container mb-4 pb-4">
            <div class="row mb-5">
            <div class="col-11 col-md-7 col-sm-9 bg-white offset-md-3 m-auto">
                <div class="col justify-content-center">
                <h1>Contato</h1>
                <h6>Sinta-se à vontade para entrar em contato conosco!</h6>
                <form action="/contato.html">
                    <div class="mb-3 mt-3">
                    <div class="format-floating">
                        <label for="name" class="form-label">Nome:</label>
                        <input type="text" class="form-control" onblur="validarNome('nome')" id="nome"
                        placeholder="Entre o seu nome" name="Nome" />
                    </div>
                    </div>
                    <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="emailContato" onblur="validarEmail('email')"
                        placeholder="Entre o seu email" name="email" />
                    </div>
                    <label for="comment">Mensagem:</label>
                    <textarea class="form-control" rows="5" id="mensagem" name="mensagem"></textarea>
                    <div class="form-check mb-3">
                    <label class="form-check-label">
                        <input checked="true" class="form-check-input" type="checkbox" name="remember" />
                        Desejo receber e-mails com novidades e promoções.
                    </label>
                    </div>
                    <button type="submit" onclick="msg()" class="btn btn-primary submit">Enviar</button>
                </form>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Contato;