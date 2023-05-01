import React from "react";
import Todo from "components/Todo";

export default function TodoList({ todo, toggleTodo }) {
  // JS Array.map()方法,map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值;map() 方法按照原始数组元素顺序依次处理元素。
  // 语法:array.map(function(currentValue,index,arr), thisValue)
  // 语法含必需的元素时,array.map(function(currentValue))

  /* 箭头函数,
  let fun = function(name){
    return `hello ${name} !`
  } 
  
  let fun =(name)=>{return `hello ${name} !`}
  */
  return todo.map((todo) => {
    return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
  });
}
