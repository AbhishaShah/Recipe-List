import React, { Component } from "react";

class Recipe extends Component {
  render() {
    return (
      <div className="Recipe">
        <hr />
        <header>
          <h2>{this.props.name}</h2>
        </header>
        <IngredientList ingredients={this.props.ingredients} />
        <Steps step={this.props.steps} />
      </div>
    );
  }
}

Recipe.propTypes = {
  name: (props, PropName) =>
    typeof props[PropName] !== "string"
      ? new Error("Name must be a string")
      : props[PropName].length > 20
      ? new Error(`name is over 20 characters`)
      : null,
  ingredients: PropTypes.array.required,
  steps: PropTypes.array,
  totalSteps: PropTypes.number
};

Recipe.defaultProps = {
  name: "Recipes",
  Ingredients: [],
  steps: [],
  totalSteps: 0
};

export default Recipe;

function IngredientList(props) {
  return (
    <section>
      <h3>Ingredients</h3>
      {props.ingredients.map((ingredient, i) => (
        <ul key={i}>
          <li>
            {ingredient.name}
            <ul>
              <li> Quantity: {ingredient.amount} </li>
              <li> Measurement: {ingredient.measurement} </li>
            </ul>
          </li>
        </ul>
      ))}
    </section>
  );
}

function Steps(props) {
  return (
    <section>
      <h3>How to Make?</h3>
      <ol>
        {props.step.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
