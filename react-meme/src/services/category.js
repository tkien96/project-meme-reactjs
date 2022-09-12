import { api } from './api';

const categoryService = {
  getList() {
    return api.call().get('/categories/index.php', {});
  }
}

export default categoryService;