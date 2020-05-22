const hello = async (ctx) => {
  const { name } = ctx.params;
  ctx.response.body = `<h1>Hello, ${name}</h1>`;
};

export default hello;
