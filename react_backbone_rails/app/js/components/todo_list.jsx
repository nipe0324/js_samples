import TodoItem from './todo_item';

export default class TodoList extends React.Component {
  render() {
    let todoItems = this.props.todos.map((todo)=> {
      return (
        <TodoItem key={todo.id} todo={todo}/>
      );
    });
    return (
      <section className="main">
        <section className="main">
          <ul className="todo-list">
            {todoItems}
          </ul>
        </section>
      </section>
    );
  }
}
