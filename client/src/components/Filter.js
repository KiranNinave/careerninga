import React from "react";
import ReactSearchBox from "react-search-box";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        "",
        "Whispering Wood",
        "Darry",
        "Winterfell",
        "Red Fork",
        "Mummer's Ford",
        "Duskendale",
        "Deepwood Motte",
        "Seagard",
        "Shield Islands",
        "Crag",
        "Raventree",
        "Ruby Ford",
        "Moat Cailin",
        "Storm's End",
        "Riverrun",
        "Stony Shore",
        "Oxcross",
        "King's Landing",
        "Harrenhal",
        "Saltpans",
        "Dragonstone",
        "Golden Tooth",
        "Torrhen's Square",
        "The Twins",
        "Green Fork",
        "Castle Black",
        "Ryamsport, Vinetown, Starfish Harbor"
      ],
      selectedLocation: "",
      types: ["", "ambush", "pitched battle", "siege", "razing"],
      selectedTypes: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingLeft: "10px",
            paddingRight: "10px"
          }}
        >
          <div>
            Location{" "}
            <select
              value={this.state.selectedLocation}
              name="selectedLocation"
              onChange={this.handleChange}
            >
              {this.state.locations.map(location => (
                <option key={location} value={location}>
                  {location ? location : "ALL"}
                </option>
              ))}
            </select>
          </div>
          <div>
            Type :{" "}
            <select
              value={this.state.selectedTypes}
              name="selectedTypes"
              onChange={this.handleChange}
            >
              {this.state.types.map(type => (
                <option key={type} value={type}>
                  {type ? type : "ALL"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <ReactSearchBox
              placeholder="Placeholder"
              value="Doe"
              data={[
                {
                  key: "john",
                  value: "John Doe"
                },
                {
                  key: "jane",
                  value: "Jane Doe"
                },
                {
                  key: "mary",
                  value: "Mary Phillips"
                },
                {
                  key: "robert",
                  value: "Robert"
                },
                {
                  key: "karius",
                  value: "Karius"
                }
              ]}
              callback={record => console.log(record)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
