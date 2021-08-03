import React from 'react';
import { useState, useEffect } from "react";
import {
  Card, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../App.css';
import moreData from "./moreData"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function Pokemon(props) {

  return (
    <Router>
    <div className="Pokemon-list align-items-start">
        {props.pokemon.map((pokemon) => (
            <Col sm={12} md ={4} lg={2}>
      <Card className="pokecard">
        <CardImg className="pokeimg" src={pokemon.img} alt={pokemon.name} />
        <CardBody>
          <CardTitle>{pokemon.name}</CardTitle>
          <CardSubtitle>No. {pokemon.num}</CardSubtitle>
          <CardText>
            Type: {pokemon.type.join(" / ")}
          </CardText>
          <Link to={{
            pathname: moreData,
            state: {pokemon}
          }}>
            <Button>More Data</Button>
          </Link>
        </CardBody>
      </Card>
      </Col>
        ))}
    </div>
    </Router>
    );
}


export default Pokemon;
