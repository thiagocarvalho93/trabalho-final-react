import 'bootstrap/dist/css/bootstrap.min.css'


const CardProduto = ({precoProduto, nome}) => {



    return (
        <div className="col-md-3 col-sm-4 d-flex align-items-stretch">
            <div className="card text-center bg-light">
                <img src="./img/Acessorios/01.jpg" className="card-img-top" alt="..." />
                <div className="card-header">
                    R$ {precoProduto}
                </div>
                <div className="card-body">
                    <h5>{nome}</h5>
                    <p className="card-text"></p>
                </div>
                <div className="card-footer">
                    <form className="">
                        <button className="btn btn-primary">
                        Adicionar ao carrinho
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CardProduto