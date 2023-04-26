import { useSelector } from 'react-redux';
import { CardItem } from 'components/CardItem/CardItem';
import styles from './card-list.module.css';
import { selectIsLoading } from 'redux/selectors/selectors';

const CardsList = ({ displayedUsers, handleLoadMore }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={styles.container}>
      <ul className={styles.cardContainer}>
        <CardItem displayedUsers={displayedUsers} />
      </ul>
      {!isLoading && displayedUsers.length < 24 && (
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
