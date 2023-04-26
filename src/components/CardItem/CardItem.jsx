import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from 'redux/selectors/selectors';
import { updateUsers } from 'redux/operations/operations';
import styles from './card-item.module.css';
import logo from '../../images/logo.png';
import picture from '../../images/picture.png';
import line from '../../images/line.png';

export const CardItem = ({ displayedUsers }) => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  const handleClick = async ({ id, index, follow }) => {
    try {
      const arrQtyFollowers = users.map(({ followers }) => followers);
      if (!follow) {
        const followers = arrQtyFollowers[index] + 1;
        await dispatch(updateUsers({ id, followers, follow: true }));
        console.log('hello increment');
      } else {
        const followers = arrQtyFollowers[index] - 1;
        await dispatch(updateUsers({ id, followers, follow: false }));
        console.log('hello decrement');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return displayedUsers.map(
    ({ id, avatar, user, tweets, followers, follow }, index) => (
      <li className={styles.cardItem} key={index}>
        <img className={styles.logo} src={logo} alt="goit" />

        <img className={styles.picture} src={picture} alt="homeImage" />
        <img className={styles.line} src={line} alt="rectangle" />
        <img className={styles.avatar} src={avatar} alt={user} />
        <div className={styles.textWrapp}>
          <p className={styles.tweets}>{Math.floor(tweets / 100)} TWEETS</p>
          <p className={styles.followers}>
            {(followers / 1000).toFixed(3)} FOLLOWERS
          </p>
        </div>
        <button
          className={`${styles.followingBtn} ${follow && styles.active}`}
          type="button"
          onClick={() => handleClick({ id, index, follow })}
        >
          {follow ? 'FOLLOWING' : 'FOLLOW'}
        </button>
      </li>
    )
  );
};

// export const CardItem = ({ cards, handleClick }) => {
//   return cards.map(({ id, avatar, user, tweets, followers }, index) => (
//     <li key={id}>
//       <img src={avatar} alt={user} />
//       <h2>{user}</h2>
//       <p>{Math.floor(tweets / 100)} TWEETS</p>
//       <p>{(followers / 1000).toFixed(3)} FOLLOWERS</p>
//       <button type="button" onClick={() => handleClick(index, id)}>
//         FOLLOW
//       </button>
//     </li>
//   ));
// };
