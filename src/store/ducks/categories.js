/**
 * Types
 */

export const Types = {
  CREATE: "CREATE",
  RETRIEVE: "RETRIEVE",
  UPDATE: "UPDATE",
  DELETE: "DELETE"
};

/**
 * Reducers
 */

export const INITIAL_STATE = {
  categories: [
    {
      nome: "manoela gonzalez rubin",
      descricao: "filhinha do meu coração"
    },
    {
      nome: "motocicleta",
      descricao: "categoria das motocicletas"
    },
    {
      nome: "caminhão",
      descricao: "categoria dos caminhões"
    }
  ],
  columns: [
    { title: "Nome", field: "nome" },
    { title: "Descrição", field: "descricao" }
  ]
};

export const categories = (state = INITIAL_STATE, action) => {
  if (action.type === Types.CREATE) {
    return (state = {
      categories: [...state.categories, action.category],
      columns: state.columns
    });
  }
  return state;
};

/**
 * Actions
 */

export const Creators = {
  createCategory: category => ({
    type: Types.CREATE,
    payload: {
      category
    }
  })
};
