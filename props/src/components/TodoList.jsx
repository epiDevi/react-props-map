const Todo = (props) => {
  return (
    <>
      <ul>
        <li>
          {props.artikel.title}
          <ul>
            <li>
              <h4>Description: </h4>
              {props.artikel.description}
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Todo;
