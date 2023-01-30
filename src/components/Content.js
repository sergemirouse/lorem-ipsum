const Content = (props) => {
  console.log(props);

  return (
    <>
      <h1 className="Title">{props.name}</h1>
      <p className="Paragraph">{props.text}</p>
    </>
  );
};

export default Content;
