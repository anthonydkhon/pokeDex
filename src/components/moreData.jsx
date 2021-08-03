import React from "react";
import { Redirect, useLocation } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function MoreData (props) {
    const location = useLocation();
    if (!location.state) {
        return (<Redirect to="/"/>);
    }
    const { pokemon } = location.state;
    return (
        <div className="moreStats">
          <Card className="statCard">
            <CardImg className="pokeStatsImg" src={pokemon.img} alt={pokemon.name} />
                <CardBody>
                <CardTitle><h2>{pokemon.name}</h2></CardTitle>
                <CardSubtitle><strong>No.</strong> {pokemon.num}</CardSubtitle>
              <CardText>
                <strong>Type:</strong> {pokemon.type.join(" / ")}
                    <ul className="pokeStats">
                        <li>
                            <strong>Height:</strong> {pokemon.height}
                        </li>
                        <li>
                            <strong>Weight:</strong> {pokemon.weight}
                        </li>
                        <li>
                            <strong>Spawn Chances:</strong> {pokemon.spawn_chance}%
                        </li>
                        <li>
                            <strong>Avg. Spawns / 10,000:</strong> {pokemon.avg_spawns}
                        </li>
                        <li>
                            <strong>Weaknesses:</strong> {pokemon.weaknesses.join(", ")}
                        </li>
                    </ul>
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    };

export default MoreData;

