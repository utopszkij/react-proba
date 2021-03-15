const Greeting = ({ greeting = "Hello", name }) => {
  return (
    <h1>
      {greeting} {name}
    </h1>
  );
};

export default Greeting;
