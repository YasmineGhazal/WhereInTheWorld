import { useEffect, useRef, useState } from "react";

import Search from "./Search";
import Filter from "./Filter";
import Card from "./Card";

const Home = () => {
    const [countries, setCountries] = useState([]);
    const timeRef = useRef();

    const getAllCountries = async (path) => {
        const res = await fetch(`https://restcountries.com/v3.1/${path}?fields=name,capital,population,region,flags,cca3`);
        setCountries(await res.json());
    };

    const search = (keyword) => {
        const regexp = new RegExp(keyword);
        document.querySelectorAll('.card').forEach(card => { card.style.display = regexp.test(card.getAttribute('name')) ? 'block' : 'none'; });
    }

    useEffect(() => {
        getAllCountries('all');
    }, []);

    return (<>
        <div className="filters">
            <Search onChange={(e) => {
                clearTimeout(timeRef.current);

                timeRef.current = setTimeout(() => {
                    search(e.target.value.toLowerCase().trim());
                }, 1000);
            }}
         />
            <Filter onChange={(e) => (getAllCountries(e.target.value))} />
        </div>
        <div className="card-list"> {countries.map(country => <Card country={country} />)} </div>
    </>);
}

export default Home;
