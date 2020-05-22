import user from '../model/user';

const insertUser = async (ctx) => {
  const { name, age } = ctx.request.body;

  const res = await user.create({ name, age });
  ctx.body = res;
};

const queryAllUser = async (ctx) => {
  const res = await user.findAll();
  ctx.body = res;
};

const updateUser = async (ctx) => {
  const { id, name, age } = ctx.request.body;

  const res = await user.update({ name, age }, { where: { id } });
  ctx.body = res;
};

const deleteUser = async (ctx) => {
  const { id } = ctx.request.body;

  const res = await user.destroy({ where: { id } });
  ctx.body = res;
};

export { insertUser, queryAllUser, updateUser, deleteUser };
