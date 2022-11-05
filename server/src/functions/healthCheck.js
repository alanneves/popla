export const lambda = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Ok!',
    })
  };
}
