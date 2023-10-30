import { ChangeEvent, useEffect, useState } from "react";

import { TODO_ROUTE } from "constants/routes";
import useMainLayout from "hooks/useMainLayout";
import { useTranslation } from "react-i18next";

interface ITodo {
  id: string;
  title: string;
}

export const useData = () => {
  const { setConfig } = useMainLayout();
  const { t } = useTranslation();
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [isAddTodo, setIsAddTodo] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [selectedTodoId, setSelectedTodoId] = useState("");
  const [selectedTodoValue, setSelectedTodoValue] = useState("");

  const handleEditItem = (item: ITodo) => {
    setSelectedTodoId(item.id);
    setSelectedTodoValue(item.title);
  };

  const handleCancelEdit = () => {
    setSelectedTodoId("");
    setSelectedTodoValue("");
  };
  const createUniqueId = () => {
    return Date.now().toString(36);
  };
  const newTodoChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const editTodoChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTodoValue(e.target.value);
  };

  const handleAdd = (title: string) => {
    setTodo((prevState) => [...prevState, { id: createUniqueId(), title }]);
    setIsAddTodo(false);
    setNewTodo("");
  };

  const handleRemove = (id: string) => {
    setTodo((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleEdit = (id: string, title: string) => {
    setTodo((prevState) =>
      prevState.map((item) => (item.id === id ? { id, title } : item))
    );
    setSelectedTodoValue("");
    setSelectedTodoId("");
  };

  const handleCancelAdd = () => {
    setIsAddTodo(false);
    setNewTodo("");
  };

  useEffect(() => {
    setConfig({
      pageName: TODO_ROUTE,
      breadcrumbsItems: [
        {
          title: t("mainLayout.sidebar.todo"),
        },
      ],
    });
  }, []);

  return {
    todo,
    handleAdd,
    handleRemove,
    handleEdit,
    isAddTodo,
    setIsAddTodo,
    newTodoChangeHandler,
    newTodo,
    handleCancelAdd,
    selectedTodoId,
    selectedTodoValue,
    handleEditItem,
    handleCancelEdit,
    editTodoChangeHandler,
  };
};
