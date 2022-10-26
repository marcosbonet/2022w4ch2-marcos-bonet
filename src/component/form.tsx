import { SyntheticEvent, useState } from "react";
type User = {
  name: string;
  lastname: string;
  age: number;
  birthdate: string;
  gender: string;
  email: string;
  isOk: boolean;
};

export function Form() {
  const user: User = {
    name: "",
    lastname: "",
    age: 0,
    birthdate: "",
    gender: "",
    email: "",
    isOk: false,
  };
  const [form, setForm] = useState(user);

  const handlerSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
  };

  const handleForm = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    setForm({
      ...form,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value,
    });
  };

  const [counter, setCounter] = useState(0);

  const handlerCounter = (value: number) => {
    setCounter(counter + value);
  };
  return (
    <form onSubmit={handlerSubmit}>
      <h2>Personal Data</h2>
      <legend>Personal Data</legend>
      <div>
        <legend>Name</legend>
        <input
          type="text"
          name="name"
          placeholder="Insert first name"
          value={form.name}
          onInput={handleForm}
          required
        />
      </div>
      <div>
        <legend>Last Name</legend>
        <input
          type="text"
          name="lastName"
          placeholder="Insert last name"
          value={form.lastname}
          onInput={handleForm}
        />
      </div>
      <div>
        <input
          type="text"
          name="age"
          placeholder="What is your age?"
          value={form.age}
          onInput={handleForm}
        />
      </div>
      <div>
        <legend>BirthDate</legend>
        <input
          type="date"
          name="birthdate"
          value={form.birthdate}
          onInput={handleForm}
        />
      </div>
      <div>
        <legend>Gender</legend>
        <label>
          <input
            type="radio"
            name="gender"
            value={"Female"}
            checked={form.gender === "Female"}
            onChange={handleForm}
          />{" "}
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value={"Male"}
            checked={form.gender === "Male"}
            onChange={handleForm}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value={"Other"}
            checked={form.gender === "Other"}
            onChange={handleForm}
          />{" "}
          Other
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value={"Prefer"}
            checked={form.gender === "Prefer"}
            onChange={handleForm}
          />{" "}
          Prefer
        </label>
      </div>
      <div>
        <legend>Email</legend>
        <input
          type="email"
          name="email"
          value={form.email}
          onInput={handleForm}
          placeholder="Email"
        />
      </div>
      <div>
        <label>
          <input type="checkbox" name="isOk" /> Estoy de acuerdo ...
        </label>
      </div>
      <div>
        <button
          type="submit"
          onClick={() => {
            handlerCounter(+1);
          }}
        >
          Next
        </button>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
