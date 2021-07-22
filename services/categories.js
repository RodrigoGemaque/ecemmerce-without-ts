import api from './api';
// criação da interface que será retornada pela listagem de categorias da api.
// por padrão sempre será um array do recurso mas um objeto meta, contendo os dados para a páginação

const CategoriesService = {
  // função que irá realizar o fetch das categorias
  // recebemos a url do SWR e apenas retornamos os dados da reposta para ficar mais fácil a tratativa pelo componente de listagem
  index: (url) => {
    return api.get(url).then(response => response.data);
  },

  // função para a crição de uma nova categoria
  create: (name) => {
    return api.post('/admin/v1/categories', { category: { name } });
  },

  // função para a atualização da categoria
  update: ({id, name}) => {
    return api.put(`/admin/v1/categories/${id}`, { category: { name } });
  },

  // função para remoção de uma categoria
  delete: (id) => {
    return api.delete(`/admin/v1/categories/${id}`);
  }
}

export default CategoriesService;