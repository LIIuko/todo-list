import React, {useEffect, useRef, useState} from 'react';
import TodoForm from "../components/TodoForm";
import {ITodo} from "../interfaces";
import TodoList from "../components/TodoList";


const Home: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>(() => {
        // return JSON.parse(localStorage.getItem('todos') || "[]") as ITodo[]; TODO
        return []
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
        }

        const regex = /\W/g // TODO
        if(regex.test(title)){
            throw "Includes special symbols"
        }

        setTodos(prev => [newTodo, ...prev]);

        if(todos.length >= 10){  // TODO
            throw "Too much"
        }
    }

        const toggleHandler = (id: number) => {
        setTodos(prev =>
            prev.map(todo => {
                if (todo.id === id) {
                    todo.completed = true;
                }
                return todo;
            }))
    }

    const removeHandler = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <React.Fragment>
            <TodoForm onAdd={addHandler}/>
            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}/>
        </React.Fragment>
    );
};

export default Home;