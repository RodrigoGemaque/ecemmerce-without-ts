// Components
import AdminComponent from '../../../../components/shared/AdminComponent';
import TitleAdminPanel from '../../../../components/shared/TitleAdminPanel';

import CategoryForm from '../../../../components/Admin/CategoryForm';
import withAuthAdmin from '../../../../components/withAuthAdmin';

// style
import { toast } from 'react-toastify';

// config
import { useRouter } from 'next/router';
import CategoriesService from '../../../../services/categories';


const New = () => {
  const router = useRouter();

  const handleSubmit = async ({ name }) => {
    try {
      await CategoriesService.create(name);
      toast.info('Categoria cadastrada com sucesso!');

      router.back();
    } catch (err) {
      toast.error('Ocorreu algum erro, tente novamente!');
      console.log(err);
    }
  }

  return (
    <AdminComponent>
      <TitleAdminPanel title="Adicionar Categoria" path="Dashboard > Categorias > Adicionar Categoria" />

      <CategoryForm handleSubmit={handleSubmit} action="Adicionar" />
    </AdminComponent>
  )
}

export default withAuthAdmin(New);