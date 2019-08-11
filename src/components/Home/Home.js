import React, { useEffect, useReducer } from "react";
import { Jumbotron, Button } from "reactstrap";

export const Home = () => {
  return (
    <Jumbotron>
      <h1 className="display-5">Olá, bem vindo(a) username!</h1>
      <p className="lead">
        This is a simple hero unit, a simple Jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <Button size="sm" color="primary">
          Learn More
        </Button>
      </p>
    </Jumbotron>
  );
};
