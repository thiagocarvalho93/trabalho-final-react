import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

const CardProduto = ({precoProduto, nome,imagemProduto}) => {

    return (
        <div className="col-md-3 col-sm-4">
            <div className="card text-center bg-light h-100">
                <img src={imagemProduto} className="card-img-top" alt="..." />
                <div className="card-header">
                    R$ {precoProduto.toFixed(2)}
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