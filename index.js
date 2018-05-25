function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line) {
  if (line === null) {
    return "There is nobody waiting to be served!";
  } else {
    return line.pop();
  }
}