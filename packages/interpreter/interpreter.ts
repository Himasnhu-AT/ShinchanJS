export function convertToTs(shinchanCode: string): string {
  const lines = shinchanCode.split('\n');

  if (lines[0] !== 'hola' || lines[lines.length - 1] !== 'bye') {
    throw new Error('Invalid Shinchan code. Code must start with "hola" and end with "bye".');
  }

  const tsCode = lines.slice(1, -1).map(line => {
    const match = line.match(/^bhok\("(.*)"\);$/);
    if (match) {
      return `console.log("${match[1]}");`;
    } else {
      throw new Error(`Invalid Shinchan code: ${line}`);
    }
  }).join('\n');

  return tsCode;
}