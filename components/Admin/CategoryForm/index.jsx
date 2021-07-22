// styles
import { Form } from 'react-bootstrap';
import { faGhost, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../../../styles/AdminPanel.module.css';

//Components
import StyledButton from '../../../components/shared/StyledButton';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { clearCategoryToEdit } from '../../../store/modules/admin/category/reducer';

// Config
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';






const CategoryForm = ({ handleSubmit, action = 'Adicionar' }) => {
  const [name, setName] = useState('');

  // aqui obetmos a categoria que estiver armazenada na store do redux para podermos pegar os dados para edição
  const category = useSelector(state => state.category);

  const dispatch = useDispatch();

  // checando se a categoria não é vazia e se o a url contem a palavra Edit para setar o valor do nome para a edição.
  useEffect(() => {
    if(category && router.pathname.includes('Edit')) {
      setName(category.name);
    }
  }, [category]);

  const router = useRouter();

  // quando o form for submetido, prevenimos a operação normal do form que seria dar um refresh na página e chamamos o método que foi recebido por parâmetro enviando um objeto do tipo Category
  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    // como o id não é um campo visível, pegamos o mesmo da categoria que foi armazenada na store do redux, se a mesma for nula, nulo / undefined é retornado (?., evita termos que faze um if para realizar uma checagem)
    await handleSubmit({ id: category?.id, name });
  }

  return (
    <div className={styles.admin_panel}>
      <Form className={styles.new_form} onSubmit={handleFormSubmit, action = 'Adicionar'}>
        <Form.Label>Nome</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Digite o nome da categoria" 
            className={styles.secundary_input} 
            value={name}
            onChange={
                (evt) => 
                    setName(evt.target.value)
            }
            required
            />

        <div className={styles.details_button}>
            <StyledButton 
                icon={faGhost} 
                action={action} 
                type_button="blue" 
                type="submit"
            />

            <StyledButton 
                icon={faTimes} 
                action={"Cancelar"} 
                type_button="red" 
                onClick={() => {
                  // limpando a categoria para edição quando a edição é cancelada para não enviar o id caso seja um cadastro para não dar erro de chave primária
                  dispatch(clearCategoryToEdit());
                  router.back();
                }}
            />
        </div>
      </Form>
    </div>
  )
}

export default CategoryForm;