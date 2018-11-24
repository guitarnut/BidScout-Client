function getNestedKey(prop, keys, index) {
  prop = prop[keys[index]];
  if (index === keys.length - 1) {
    return prop;
  } else {
    index++;
    return getNestedKey(prop, keys, index);
  }
}

export function handleInputChange(event, context) {
  const target = event.target;
  const name = target.name;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let keys = name.split('.');

  if (keys.length === 1) {
    context.setState({
      [name]: value
    });
  } else {
    let nestedProperty = {...context.state[keys[0]]};
  let targetProp = getNestedKey(nestedProperty, keys, 1);
    if (keys.length === 2) {
      nestedProperty[keys[1]] = value;
    } else if (keys.length === 3) {
      nestedProperty[keys[1]][keys[2]] = value;
    }

    context.setState({
      [keys[0]]: nestedProperty
    });
  }

}

export function handleInputChangeMulti(event, context) {
  const target = event.target;
  const name = target.name;
  let value = target.type === 'checkbox' ? target.checked : target.value;
  let keys = name.split('.');

  if (keys.length === 1) {
    if (context.state[name].indexOf(value) === -1) {
      context.state[name].push(value);
    }
  } else {
    let nestedProperty = {...context.state[keys[0]]};
    let targetProp = getNestedKey(nestedProperty, keys, 1);
    if (targetProp.indexOf(value) === -1) {
      targetProp.push(value);
    }
    value = nestedProperty;
  }
  context.setState({
    [keys[0]]: value
  });
}

export function removeInputChangeMulti(event, context) {
  const target = event.target;
  const name = target.name;
  let value = target.type === 'checkbox' ? target.checked : target.value.toString();
  let keys = name.split('.');

  if (keys.length === 1) {
    if (context.state[name].indexOf(value) !== -1) {
      context.state[name].splice(context.state[name].indexOf(value), 1);
    }
  } else {
    let nestedProperty = {...context.state[keys[0]]};
    let targetProp = getNestedKey(nestedProperty, keys, 1);
    if (targetProp.indexOf(value) !== -1) {
      targetProp.splice(targetProp.indexOf(value), 1);
    }
    value = nestedProperty;
  }
  context.setState({
    [keys[0]]: value
  });
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
  } else {
    let nestedProperty = {...context.state[keys[0]]};
    if (keys.length === 2) {
      nestedProperty[keys[1]] = value;
    } else if (keys.length === 3) {
      nestedProperty[keys[1]] = {...context.state[keys[1]]};
      nestedProperty[keys[1]][keys[2]] = value;
    }
    context.setState({
      [keys[0]]: nestedProperty
    });
  }

}
