import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDummyList } from 'src/api/demo';

function HomePage() {
  const { data } = useDummyList();

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Typography variant="h1" component="h2">
        Home Page
      </Typography>

      <Button color="primary" variant="contained">
        Test Button
      </Button>
      <ul>
        {data?.map(({ title, id }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
