// 101-iterateThroughObject.js
export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }

  // Remove the trailing '|'
  return result.slice(0, -2);
}
