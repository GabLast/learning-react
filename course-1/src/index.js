import React from "react";
import ReactDom from "react-dom/client";
import { Component6 } from "./Component6";
import Component7, { Otro } from "./Component7";
import Props, { Funcionv2, Funcionv3 } from "./Props";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Clase } from "./ComponenteClase";
import { Post } from "./Posts";

const root = ReactDom.createRoot(document.getElementById("root"));

function Component() {
  return (
    <>
      <h1>test</h1>
      <p>aaaa</p>
    </>
  );
}

function Component2() {
  let test = "text";
  return <h3>{test}</h3>;
}

function Component3() {
  const test = true;

  return <h1> {test ? "is true" : "is false"}</h1>;
}

function Component4() {
  const user = {
    name: "name",
    lastname: "last name",
  };

  //   return <h1> {JSON.stringify(user)}</h1>;
  return (
    <>
      <h1>{user.name}</h1>
      <h1>{user.lastname}</h1>
    </>
  );
}

function Component5() {
  function add(x, y) {
    return x + y;
  }

  return <h1> {add(1, 1)}</h1>;
}

const handlerChange = (event) => {
  alert("nice");
};

const userList = [
  {
    id: 1,
    name: "user 1",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "user 2",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "user 3",
    image: "https://robohash.org/user3",
  },
];

root.render(
  <>
    <Component />
    <Component />
    <Component2 />
    <Component3 />
    <Component4 />
    <Component5 />
    <Component6 />
    <Component7 />
    <Otro />
    <Props title="data title" />
    <Props body="data body" />
    <Props footer="data footer" />
    <Funcionv2 title="data titlev2" />
    <Funcionv3
      name="Nombre"
      value={1234}
      isTrue={false}
      contacts={["mail", "123"]}
      direccion={{ street: "c/7", city: "la vega" }}
      unaFuncion={function () {
        alert("papa frita");
      }}
    />
    <Button caption="Click" />
    <TaskCard ready={true} />
    <TaskCard ready={false} />
    <Clase />
    <input
      onChange={function (event) {
        alert(event.target.value);
      }}
    ></input>
    <input
      onChange={(event) => {
        alert(event.target.value);
      }}
    ></input>
    <input onChange={handlerChange} />
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("send data");
      }}
    >
      <button type="submit">Send</button>
    </form>
    <Post />
    
    {userList.map((it) => {
      return (
        <div key={it.id}>
          <h1>{JSON.stringify(it)}</h1>
          <img src={it.image}/>
        </div>
      );
    })}
  </>
);
