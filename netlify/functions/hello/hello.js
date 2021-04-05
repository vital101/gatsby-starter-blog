function getDate() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new Date());
    }, 150);
  });
}
const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `The date is ${getDate()}.` })
  };
}

module.exports = { handler }
