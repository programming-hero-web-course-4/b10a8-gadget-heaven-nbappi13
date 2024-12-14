const ErrorPage = () => {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
          <Helmet>
              <title>404 - Page Not Found</title>
          </Helmet>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-lg">Oops! Page not found.</p>
      </div>
  );
};

export default ErrorPage;
