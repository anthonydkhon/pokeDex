import React from 'react';
import { useState, useEffect } from "react";
import {
  Card, Col, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../App.css';

function Pokemon(props) {

  return (
    <div className="Pokemon-list align-items-start">
        {props.pokemon.map((pokemon) => (
            <Col sm={12} md ={4} lg={2}>
      <Card className="pokecard">
        <CardImg className="pokeimg" src={pokemon.img} alt={pokemon.name} />
        <CardBody>
          <CardTitle>{pokemon.name}</CardTitle>
          <CardSubtitle>No. {pokemon.num}</CardSubtitle>
          <CardText>
            Type: {pokemon.type[0]}
          </CardText>
          <Button>More Data</Button>
        </CardBody>
      </Card>
      </Col>
        ))}
    </div>
    );
}


export default Pokemon;
