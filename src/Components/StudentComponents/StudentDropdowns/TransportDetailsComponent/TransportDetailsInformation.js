import "./TransportDetailsInformation.css"


const TranspostDetailsInfo = ({icon, label, value}) =>{
    return(
        <div className="transport_details">
             {icon}
             <p className="label">{label}</p>
             <p className="value">{value}</p>
        </div>
    )
}

export default TranspostDetailsInfo;