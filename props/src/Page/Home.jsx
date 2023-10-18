import TodoList from "../components/TodoList";
const Home = () => {
  const todosArr = [
    {
      title: "Kinder zu Schule und Kita bringen",
      description: "Ich brauche dafür ein einhalb Stunde Zeit",
    },
    {
      title: "Untericht",
      description: "3 Stunde Zeit brauche ich dafür",
    },
    {
      title: "Aufgebn erledigen",
      description: "Abhängig davon Wie lang es Dauert. Ungefär 3 Stunde",
    },
    {
      title: "Kinder abholen",
      description: "Ich brauche dafür ein einhalb Stunde Zeit",
    },
    {
      title: "Abendessen Kochen",
      description: " Keine Ahnung!",
    },
    {
      title: "Kinder Zeit",
      description: "Mit dem Kinder Spielen, malen basteln lesen ....",
    },
    {
      title: "Picnic",
      description: " Lebensmittel von Picnic bestellen",
    },
  ];
  return (
    <>
      <h1>My todos</h1>
      <TodoList artikel={todosArr[0]} />
      <TodoList artikel={todosArr[1]} />
      <TodoList artikel={todosArr[2]} />
      <TodoList artikel={todosArr[3]} />
      <TodoList artikel={todosArr[4]} />
      <TodoList artikel={todosArr[5]} />
    </>
  );
};

export default Home;
