import { FaXbox, FaMicrosoft, FaPlaystation, FaSteam, FaAndroid, FaApple, FaMouse } from "react-icons/fa"
import { SiNintendoswitch } from "react-icons/si"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"

const Card = (categoria) => {

    const navigate = useNavigate();
    const location = useLocation();
    const handleIcons = () => {
        switch (categoria.index) {
            case 1:
                return <><FaPlaystation className="icones me-2" /></>
            case 2:
                return <><FaXbox className="icones me-2" /></>
            case 3:
                return <><FaMicrosoft className="icones me-2" /></>
            case 4:
                return <><FaAndroid className="icones me-2" /></>
            case 5:
                return <><FaApple className="icones me-2" /></>
            case 6:
                return <><FaMouse className="icones me-2" /></>
            case 7:
                return <><FaSteam className="icones me-2" /></>
            case 8:
                return <><SiNintendoswitch className="icones me-2" /></>

            default:
                return 'vazio'
        }
    }

    const handleCategoria = () => {
        navigate("/produto", { state: categoria.index })

    }

    return (
        <>

            <div className="col-md-4 col-lg-3 col-xs-2">
                <button className="btnn mt-3" onClick={handleCategoria} >
                    <div className="card shadow-sm mb-2">
                        <div className="card-header d-flex justify-content-between">
                            {handleIcons()}
                            <span className="d-flex align-items-center"></span>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{categoria.categoria}</p>
                            <div className="d-flex justify-content-end">
                            </div>
                        </div>
                    </div>
                </button>
            </div>

        </>

    )
}
export default Card