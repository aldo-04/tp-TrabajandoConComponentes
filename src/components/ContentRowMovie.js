import propTypes from "prop-types"

function ContentRowMovie(props) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card ${props.borde} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold ${props.color} text-uppercase mb-1`}>{props.titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.total}</div>
                        </div>
                        <div className="col-auto">
                            <i className={props.icono}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ContentRowMovie.propTypes = {
	titulo : propTypes.string.isRequired,
    borde : propTypes.oneOf([`border-left-primary`,`border-left-success`,`border-left-warning`]).isRequired,
    total : propTypes.number.isRequired,
    icono : propTypes.string.isRequired,
    color : propTypes.string.isRequired
}

ContentRowMovie.defaultProps = {
    titulo : "Movies",
    borde : "border-left-warning",
    total : 0,
    icono : "fas fa-film fa-2x text-gray-300",
    color : "text-primary"
}

export default ContentRowMovie