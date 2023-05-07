import ReactCountryFlag from "react-country-flag"
import './Flags.css'

const Flags = () => {
    return ( 
        <div className='header__flags' >
                <ReactCountryFlag countryCode="EG" svg />
                <ReactCountryFlag countryCode="AU" svg />
                <ReactCountryFlag countryCode="LB" svg />
                <ReactCountryFlag countryCode="SA" svg />
                <ReactCountryFlag countryCode="GE" svg />
                <ReactCountryFlag countryCode="SE" svg />
                <ReactCountryFlag countryCode="US" svg />
        </div>
     );
}
 
export default Flags;