const Search = ({ onChange }) => {
  return (
    <div className="search">
      <img src="/search.svg" className="search-ico" alt="search_icon" height="30px" />
      <input className="search-input" type="text" placeholder="Search for a country" onChange={onChange}></input>
    </div>
  );
};

export default Search;
