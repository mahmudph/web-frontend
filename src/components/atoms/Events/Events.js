import React from "react";
import s from "./Events.module.scss";
import Article from "components/Article/Article";
import { EventsData } from "event_data/index";
import { Container, Row, Col } from "reactstrap";
import Title from "components/Title/Title";

class Events extends React.Component {
  render() {
    return (
      <div id={s["events"]}>
        <div className={s["acara"]}>
          <Container className={`${s["themedContainer"]} ${s["title"]}`} fluid>
            <div>
              <Title subtitle="Acara diwaktu dekat" title="Kegiatan Patal" />
            </div>
            <Row className={`${s["cp"]} ${s["col"]}`}>
              {EventsData.content.map((data, index) => {
                return (
                  <Col xs="12" md="4" sm="4" key={index}>
                    <Article
                      img={data.image_url}
                      title={data.title}
                      url={data.registration_url}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Events;
