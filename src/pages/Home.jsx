import Header from '../components/ui/Header';
import Form from '../features/todos/components/Form';
import List from '../features/todos/components/List';
import Layout from '../components/ui/Layout';

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
