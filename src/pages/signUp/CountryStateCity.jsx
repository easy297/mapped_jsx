import { City, Country, State } from "country-state-city";
import { useEffect, useState } from "react";
import Selector from "./Selector";

const CountryStateCity = () => {
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  return (
    <section className="grid selection:text-white selection:bg-cyan-950">
      <div>
        <div className="flex gap-3 rounded-lg p-8">
          <div>
            <p className="text-signUp text-lg font-semibold">Country :</p>
            <Selector
              data={countryData}
              selected={country}
              setSelected={setCountry}
            />
          </div>
          {state && (
            <div>
              <p className="text-signUp text-lg font-semibold">State :</p>
              <Selector
                data={stateData}
                selected={state}
                setSelected={setState}
              />
            </div>
          )}
          {city && (
            <div>
              <p className="text-signUp text-lg font-semibold">City :</p>
              <Selector data={cityData} selected={city} setSelected={setCity} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryStateCity;
