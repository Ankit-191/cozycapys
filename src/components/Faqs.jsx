import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Faqs = () => {
  return (
    <>
      <section className="bg_orange_100 py-5 bg_faqs position-relative">
        <Container className="pt-5">
          <h4 className="ff_cherry fw-normal fs_5xl clr_white faq_shadow text-center pt-5">
            FAQ’s
          </h4>
          <Accordion className="mt-5 pt-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Q1. What is Cozy Capys?</Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-bold fs_xxl clr_black opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Q2. How does Cozy Capys give back to wildlife conservation?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-bold fs_xxl clr_black opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Q3. What kind of community events does Cozy Capys host?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-bold fs_xxl clr_black opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Q4. How can I stay updated on Cozy Capys news and announcements?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-bold fs_xxl clr_black opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Q5. How can I adopt my Cozy Capy?
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_balsamiq fw-bold fs_xxl clr_black opacity_07 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default Faqs;
