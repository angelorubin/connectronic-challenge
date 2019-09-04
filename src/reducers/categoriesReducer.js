import { ADD_CATEGORY } from "../constants/actionTypes";

const INITIAL_STATE = {
  data: [
    {
      nome: "automovel",
      descricao: "categoria dos automoveis"
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

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD_CATEGORY) {
    console.log(action);
    return (state = {
      data: [...state.data, action.data],
      columns: state.columns
    });
  }
  return state;
};
