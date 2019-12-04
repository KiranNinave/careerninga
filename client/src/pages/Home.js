import React from "react";

// styled compoents
import { Row, Col } from "react-bootstrap";

// apis
import { getBattelsApis } from "../apis/battlesApis";

// componets
import ListItem from "../components/ListItem";
import Filter from "../components/Filter";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    };
    this.isComponentMounted = true;
  }
  componentWillUnmount() {
    this.isComponentMounted = false;
  }
  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    try {
      this.setState({ loading: true });
      const response = await getBattelsApis();
      this.setState({ data: response });
    } catch (err) {
      console.log(err);
    } finally {
      if (this.isComponentMounted) this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div>
        <Filter />
        <Row style={{ justifyContent: "center" }}>
          {this.state.data.map((battle, index) => {
            return (
              <div key={index.toString()}>
                <Col>
                  <ListItem battle={battle}></ListItem>
                </Col>
              </div>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Home;
