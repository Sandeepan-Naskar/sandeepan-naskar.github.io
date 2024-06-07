import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
      <Card.Body className="card-body">
        <Card.Title style={{ fontFamily: "Times New Roman, Times, serif", marginTop:"-15px" }}><b>{props.title}</b><hr style={{ color: "white" }} /></Card.Title>
        <Card.Text style={{ textAlign: "center", fontSize: "0.8em" }}>
          {props.description}
        </Card.Text>
        <div>
          <Button variant="primary" href={props.ghLink} target="_blank" style={{ width: "150px"}}>
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.reportLink && (
            <Button
              variant="primary"
              href={props.reportLink}
              target="_blank"
              style={{ marginLeft: "10px", width: "150px"}}
            >
              <CgWebsite /> &nbsp;
              {"Report"}
            </Button>
          )}
                  {!props.isBlog && props.paperLink && (
            <Button
              variant="primary"
              href={props.paperLink}
              target="_blank"
              style={{ marginLeft: "10px", width: "150px"}}
            >
              <CgWebsite /> &nbsp;
              {"Ref. Paper"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
