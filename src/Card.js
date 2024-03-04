import { Link } from 'react-router-dom';

const Card = ({ country }) => {
    return <div className="card" key={country.cca3} name={country.name.official.toLowerCase()}>
        <Link to={`/country/${country.cca3}`} > <img className="flag" src={country.flags.png} alt={country.flags.alt} /></Link >
        <div className="card-data">
            <div className="country-name">{country.name.official}</div>
            <div className="info">
                <span className="info-title">Population: </span>{country.population}
            </div>
            <div className="info">
                <span className="info-title">Region: </span>{country.region}
            </div>
            <div className="info">
                <span className="info-title">Capital: </span>{country.capital}
            </div>
        </div>
    </div >
}

export default Card;