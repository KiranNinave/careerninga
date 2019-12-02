import React from "react";
import { Row, Col, Button } from "react-bootstrap";

// apis
import { getBattlesByIdApis } from "../apis/battlesApis";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: null
    };
    this.isComponentMounted = true;
  }
  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  async componentDidMount() {
    this.fetchBattle();
  }

  fetchBattle = async () => {
    try {
      this.setState({ loading: true });
      const id = this.props.match.params.id;
      const response = await getBattlesByIdApis(id);
      this.setState({ data: response });
    } catch (err) {
      console.log(err);
    } finally {
      if (this.isComponentMounted) this.setState({ loading: false });
    }
  };

  render() {
    if (!this.state.data) return null;
    const {
      attacker_king,
      defender_king,
      name,
      attacker_commander,
      defender_commander,
      attacker_size,
      defender_size,
      major_capture,
      major_death
    } = this.state.data;
    return (
      <div className="detail-container">
        <h3 className="detail-title">{name}</h3>
        <Row>
          <Col xs={12} md={6} lg={6} className="detail">
            <div className="detail-col-1">
              <div className="detail-col-content">
                <div className="detail-col-img-1"></div>
                <h4 className="detail-col-title">{attacker_king}</h4>
                <h6 className="detail-col-subtitle">{attacker_commander}</h6>
              </div>
            </div>
            <div className="detail-col-footer-1">
              <div>
                <i className="fa fa-heart-o detail-col-footer-icon"></i>
                <span className="detail-col-footer-icon-text">
                  {attacker_size || "NA"}
                </span>
              </div>
              <div>
                <i className="fa fa-heart-o detail-col-footer-icon"></i>
                <span className="detail-col-footer-icon-text">
                  {major_capture || "NA"}
                </span>
              </div>
              <div>
                <i className="fa fa-heart-o detail-col-footer-icon"></i>
                <span className="detail-col-footer-icon-text">97 %</span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="detail">
            <div className="detail-col-2">
              <div className="detail-col-content">
                <div className="detail-col-img-2"></div>
                <h4 className="detail-col-title">{defender_king}</h4>
                <h6 className="detail-col-subtitle">
                  {defender_commander || "NA"}
                </h6>
              </div>
            </div>
            <div className="detail-col-footer-2">
              <div>
                <i className="fa fa-heart-o detail-col-footer-icon"></i>
                <span className="detail-col-footer-icon-text">
                  {defender_size || "NA"}
                </span>
              </div>
              <div>
                <i className="fa fa-heart-o detail-col-footer-icon"></i>
                <span className="detail-col-footer-icon-text">
                  {major_death || "NA"}
                </span>
              </div>
              <div>
                <i className="fa fa-heart-o detail-col-footer-icon"></i>
                <span className="detail-col-footer-icon-text">80 %</span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="detail-bottom">
          <Button variant="outline-info" className="detail-button">
            START FIGHT
          </Button>
        </div>
      </div>
    );
  }
}

export default Detail;
