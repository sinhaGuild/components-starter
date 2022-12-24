import { useRouteError } from "react-router-dom";
import { Container } from "../components";

export const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Container>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  );
};
