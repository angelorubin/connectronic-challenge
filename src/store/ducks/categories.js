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
 * Actions
 */
export const Creators = {
  createCategory: category => ({
    type: Types.CREATE,
    category
  }),
  deleteCategory: id => ({
    type: Types.DELETE,
    id
  })
};

/**
 * Reducers
 */
export const INITIAL_STATE = {
  categories: [
    {
      id: 1,
      nome: "test 1",
      descricao: "test 1"
    },
    {
      id: 2,
      nome: "test 2",
      descricao: "test 2"
    }
  ],
  columns: [
    { title: "ID", field: "id" },
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
  if (action.type === Types.DELETE) {
    console.log(action.id);
    const stateFilteredById = state.categories.filter(
      categorie => action.id !== categorie.id
    );

    return (state = {
      categories: [...stateFilteredById],
      columns: state.columns
    });
  }
  return state;
};
