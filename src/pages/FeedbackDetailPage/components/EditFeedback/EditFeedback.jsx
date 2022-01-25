import { EditForm } from './components/EditForm';
import { GoBackBtn } from '../../../../components/GoBackBtn';
import styles from './_editFeedback.module.scss';

export const EditFeedback = ({ productRequest, setIsEditing, isEditing }) => {
  const goBack = () => setIsEditing(false);

  // const handleEditSubmit = () => setIsEditing(false);

  return (
    <>
      <GoBackBtn styles={styles} goBack={goBack} />
      <EditForm productRequest={productRequest} />
    </>
  );
};
