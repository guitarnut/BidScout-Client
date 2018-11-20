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
  }
}

export function handleInputChangeArray(event, context) {
  const target = event.target;
  const value = target.value.split(',');
  const name = target.name;

  console.log(target.value);

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
  }
}
