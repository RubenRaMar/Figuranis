import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <h1>Page not found</h1>
      <img
        src="/images/pagenotfound.webp"
        alt="Mr Satan hiding under a stone-shaped tarpaulin while the presenter searches for him"
        width="320"
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
