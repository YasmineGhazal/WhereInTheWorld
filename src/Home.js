import { useEffect, useState } from "react";

import Search from "./Search";
import Filter from "./Filter";
import Card from "./Card";

const Home = () => {
    const [countries, setCountries] = useState([]);
    let region = 'all';

    const getAllCountries = async (path) => {
        const res = await fetch(`https://restcountries.com/v3.1/${path}?fields=name,capital,population,region,flags,cca3`);
        setCountries(await res.json());
    };

    const search = (keyword) => {
        const regexp = new RegExp(keyword)
        document.querySelectorAll('.card').forEach(card => { card.style.display = regexp.test(card.getAttribute('name')) ? 'block' : 'none'; })
    }

    useEffect(() => {
        getAllCountries(region);
    }, [region]);

    return (<>
        <div className="filters">
            <Search onChange={(e) => (search(e.target.value.toLowerCase().trim()))} />
            {/* not triggering the useEffect */}
            <Filter onChange={(e) => (region = e.target.value)} />
        </div>
        <div className="card-list"> {countries.map(country => <Card country={country} />) || <h2>No matching countries </h2>} </div>
    </>);
}

export default Home;