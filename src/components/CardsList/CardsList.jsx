import { useSelector } from 'react-redux';
import { CardItem } from 'components/CardItem/CardItem';
import styles from './card-list.module.css';
import { selectIsLoading, selectUsers } from 'redux/selectors/selectors';

const CardsList = ({ displayedUsers, handleLoadMore, perPage }) => {
  const isLoading = useSelector(selectIsLoading);
  const users = useSelector(selectUsers);

  return (
    <div className={styles.container}>
      <ul className={styles.cardContainer}>
        <CardItem displayedUsers={displayedUsers} />
      </ul>
      {!isLoading && perPage < users.length && (
        <button
          type="button"
          className={styles.loadMoreBtn}
          onClick={handleLoadMore}
        >
          LOAD MORE
        </button>
      )}
    </div>
  );
};

export { CardsList };
