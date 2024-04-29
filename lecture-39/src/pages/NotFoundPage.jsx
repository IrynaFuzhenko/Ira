import {useRouteError} from 'react-router-dom';

const NotFoundPage = () => {
  const error = useRouteError();

  return <Container>
    <h1>404 Error</h1>
    <h2>{error.statusText}</h2>
    <p>in progress...</p>
    <p>{error.error.message}</p>
  </Container>
}
export default NotFoundPage;