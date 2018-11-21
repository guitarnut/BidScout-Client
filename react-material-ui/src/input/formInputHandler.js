export function handleInputChange(event, context) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  let keys = name.split('.');
  if (keys.length === 1) {
    context.setState({
      [name]: value
    });
  } else if (keys.length === 2) {
    let nestedProperty = {...context.state[keys[0]]};
    nestedProperty[keys[1]] = value;
    context.setState({
      [keys[0]]: nestedProperty
    });
  } else if (keys.length === 3) {
    let nestedProperty = {...context.state[keys[0]]};
    nestedProperty[keys[1]] = {...context.state[keys[1]]};
    nestedProperty[keys[1]][keys[2]] = value;
    context.setState({
      [keys[0]]: nestedProperty
    });
  }
}

export function handleInputChangeArray(event, context) {
  const target = event.target;
  const value = target.value.split(',');
  const name = target.name;

  let keys = name.split('.');
  if (keys.length === 1) {
    context.setState({
      [name]: value
    });
  } else if (keys.length === 2) {
    let nestedProperty = {...context.state[keys[0]]};
    nestedProperty[keys[1]] = value;
    context.setState({
      [keys[0]]: nestedProperty
    });
  } else if (keys.length === 3) {
    let nestedProperty = {...context.state[keys[0]]};
    nestedProperty[keys[1]] = {...context.state[keys[1]]};
    nestedProperty[keys[1]][keys[2]] = value;
    context.setState({
      [keys[0]]: nestedProperty
    });
  }
}
