import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { geoAPI_url, geoAPIOptions } from "../../api.js";

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    // function to help search for city names that user types
    const loadOptions = (inputValue) => {
        return fetch(
          `
            ${geoAPI_url}?namePrefix=${inputValue}&minPopulation=1000000`,
          geoAPIOptions
        )
          .then((response) => response.json())
          .then((response) => {
            return {
              options: response.data.map((city) => {
                return {
                  value: `${city.latitude}, ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          })
          .catch((err) => console.error(err));
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <AsyncPaginate 
            placeholder = "Search for city"
            debounceTimeout = {600} //stopping the user from spamming to search city
            value = {search}
            onChange = {handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;