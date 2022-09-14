import {CgList} from 'react-icons/cg';
import {RiDeleteBinFill} from 'react-icons/ri';
import {FaCheck} from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({todo, deleteTodo, toggleTodo}) {
    return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
        <CgList className={styles.todoIcon} />
        <div className={styles.todoText}>{todo.text}</div>
        <RiDeleteBinFill className={styles.deleteIcon} onClick= {() => deleteTodo(todo.id)} />
        <FaCheck className={styles.checkIcon} onClick= {() => toggleTodo(todo.id)} />
    </div>
    ) 
}

export default Todo;