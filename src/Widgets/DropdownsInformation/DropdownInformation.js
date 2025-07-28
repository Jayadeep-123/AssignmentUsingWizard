import "./DropdownInformation.css"

const DropdownInformation = ({heading, value, variant, side}) =>{
    return(
        <div className={`dropdown_heading_value ${variant}`}>
           <p className={`left_side_heading ${side}_side_heading`}>{heading}</p>
           <p className="value">{value}</p> 
        </div>
    )
}

export default DropdownInformation;