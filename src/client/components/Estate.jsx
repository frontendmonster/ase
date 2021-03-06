import React from 'react';
import {
  Col,
  Panel,
  ListGroup,
  ListGroupItem,
  Glyphicon,
  Image,
  Button
} from 'react-bootstrap';

const Estate = props => (
  <Col sm={6} xs={12} md={3}>
    <Panel>
      <Panel.Heading>
        <Glyphicon glyph="home" /> {props.estate.title}
      </Panel.Heading>
      <Panel.Body>
        <Image
          className="estate-image"
          responsive
          thumbnail
          src={props.estate.image_url}
          alt=""
        />
      </Panel.Body>
      <ListGroup className="rtl-list-group">
        { (props.estate.pre != undefined) && (
          <ListGroupItem>رهن: {props.estate.pre} ریال</ListGroupItem>
        )}
        {props.estate.rent != undefined && (
          <ListGroupItem>اجاره: {props.estate.rent} ریال</ListGroupItem>
        )}
        {props.estate.price != undefined && (
          <ListGroupItem>قیمت: {props.estate.price} ریال</ListGroupItem>
        )}
        <ListGroupItem>
          <Button bsStyle="primary">اطلاعات بیشتر</Button>
          <Button bsStyle="link" onClick={props.onDelete.bind(this, props.estate._id)}>حذف</Button>
        </ListGroupItem>
      </ListGroup>
    </Panel>
  </Col>
);

export default Estate;
