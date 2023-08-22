import React, {useRef} from 'react';

interface TodoFromProps {
    onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFromProps> = ({onAdd}) => {

    const inputTask = useRef<HTMLInputElement>(null)

    const inputHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            onAdd(inputTask.current!.value);
            inputTask.current!.value = '';
        }
    }

    return (
        <div className="input-field">
            <input onKeyPress={inputHandler} ref={inputTask} type="text" id="title" placeholder="Введите задачу"/>
            <label htmlFor="title" className="active">Введите задачу</label>
        </div>
    );
};

export default TodoForm;