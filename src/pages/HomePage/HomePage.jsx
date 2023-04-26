import styles from './home-page.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to GoITbook!</h1>
      <p className={styles.description}>
        Welcome to our website! We are delighted to have you here. Our website
        is designed with you in mind, and we strive to make it as easy to use
        and navigate as possible. Whether you're looking for information on our
        users and services, or just browsing for ideas, we have something for
        everyone. We take pride in offering high-quality products and
        exceptional customer service, and we are committed to making your
        experience with us a positive one. Our team of experts is always here to
        answer any questions you may have and to help you find the perfect
        solution for your needs. Please feel free to browse our website and
        discover all that we have to offer. And if you have any feedback or
        suggestions for us, we would love to hear from you. Thank you for
        choosing us, and we look forward to serving you!
      </p>
    </div>
  );
};
