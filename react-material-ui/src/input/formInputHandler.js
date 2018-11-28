export function handleInput(event) {
  let name = event.target.name;
  let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

  if (typeof value !== 'boolean' && value.indexOf(',') !== -1) {
    value = value.split(',');
  }
  this.setState({
    [name]: value
  })
}

export function handleInputMultiSelect(event) {
  const target = event.target;
  const name = target.name;
  const value = target.value;

  let currentState = this.state[name];
  if (this.state[name].indexOf(value) === -1) {
    currentState.push(value);
  } else {
    currentState.splice(this.state[name].indexOf(value), 1);
  }

  this.setState({
    [name]: currentState
  })
}
