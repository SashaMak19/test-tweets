import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors/selectors';
import { fetchUsers } from 'redux/operations/operations';
import { CardsList } from 'components/CardsList/CardsList';
import { useNavigate } from 'react-router-dom';
import styles from './tweets-page.module.css';

export const TweetsPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [perPage, setPerPage] = useState(9);
  const navigate = useNavigate();
  const page = 1;

  const handleLoadMore = () => {
    setPerPage(perPage + 9);
    console.log(users);
  };

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const displayedUsers = users.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button
          onClick={() => navigate('/')}
          className={styles.btnBack}
          type="button"
        >
          Back
        </button>
      </div>

      <CardsList
        displayedUsers={displayedUsers}
        perPage={perPage}
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};
