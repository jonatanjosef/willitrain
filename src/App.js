import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "1b725380d38519114003c2ee428a032e";

//Skapar min react component
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //Skapar en metod som hämtar APIn med min nyckel och deklarerar stad och land variabler som är kopplat till mitt form / input-fält
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric
    `);

    //Spara API-datan i en variabel med .json funktion
    const data = await api_call.json();

    //Ser så att värderna är korrekta och inte tomma
    if (city && country) {

      //Hämtar ut API-nycklarna
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });

    } else {

      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Can not be empty..."
      });
    }
  }

  //Renderar ut componenter
  render() {
    return (
      <div>
        <section>
          <div className="content-left">
            <div className="content-left__inner">
              <Titles />
              <Form getWeather={this.getWeather} />
            </div>
          </div>
          <div className="content-right">
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
