import { FaXbox, FaMicrosoft, FaPlaystation, FaSteam, FaAndroid, FaApple, FaMouse } from "react-icons/fa"
import { SiNintendoswitch } from "react-icons/si"
import { BsFillCpuFill, BsLaptop } from "react-icons/bs"
import { MdMonitor } from "react-icons/md"
import { GiOfficeChair } from "react-icons/gi"
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
                return <><SiNintendoswitch className="icones me-2" /></>
            case 8:
                return <><FaSteam className="icones me-2" /></>
            case 9:
                return <><GiOfficeChair className="icones me-2" /></>
            case 10:
                return <><BsLaptop className="icones me-2" /></>
            case 11:
                return <><MdMonitor className="icones me-2" /></>
            case 12:
                return <><BsFillCpuFill className="icones me-2" /></>

            default:
                return 'vazio'
        }
    }

    const handleCategoria = () => {
        navigate("/produto", { state: categoria.index })

    }

    return (
        <>
            <div className="col-md-4 col-xl-2 col-lg-3 col-sm-4 d-flex justify-content-center">
                <button className="btnn mt-3" onClick={handleCategoria} >
                    <div className="cardHover">
                        <div className="card shadow-sm mb-2 text-center">
                            <div className="card-header d-flex">
                                {handleIcons()}
                            </div>
                            <div className="card-body">
                                <p className="card-text">{categoria.categoria}</p>
                                <div className="d-flex justify-content-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </>

    )
}
export default Card