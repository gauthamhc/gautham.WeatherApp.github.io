import React, { useEffect, useState } from "react";

const Tempapp = () => {
  // const API_key = "b011dddbe6d7e70e60089fbbf4ecbc87";
  const [city, setCity] = useState(null);
  console.log(city);
  const [search, setSearch] = useState("Bengaluru");

  const cityName = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b011dddbe6d7e70e60089fbbf4ecbc87`;
      const response = await fetch(url);
      const data = await response.json();
      setCity(data.main);
      // console.log(setCity);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            className="inputField"
            type="search"
            value={search}
            onChange={cityName}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view">{search}</i>
              </h2>
              <h3 className="temp">{city.temp}&deg;cel</h3>
              <h4 className="tempmin_max">
                {" "}
                Min : {city.temp_min}&deg; cel | Max : {city.temp_max}&deg; cel{" "}
              </h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
