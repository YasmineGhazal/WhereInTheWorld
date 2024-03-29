const search_icon = <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" height="30" viewBox="0 -960 960 960" width="30"><path d="M762.692-160.924 524.461-399.155q-30 22.769-65.792 35.269t-73.865 12.5q-93.585 0-159.117-65.514t-65.532-159.037q0-93.524 65.514-159.101 65.514-65.576 159.038-65.576 93.523 0 159.1 65.532t65.577 159.117q0 39.227-12.885 75.019-12.885 35.792-34.885 64.638l238.231 238.231-37.153 37.153Zm-377.923-242.46q72.308 0 122.462-50.154Q557.385-503.692 557.385-576q0-72.308-50.154-122.462-50.154-50.154-122.462-50.154-72.308 0-122.462 50.154Q212.154-648.308 212.154-576q0 72.308 50.153 122.462 50.154 50.154 122.462 50.154Z"/></svg>;

const Search = ({ onChange }) => {
  return (
    <div className="search">
      {search_icon}
      <input className="search-input" type="text" placeholder="Search for a country" onChange={onChange}></input>
    </div>
  );
};

export default Search;
