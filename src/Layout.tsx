import { useState, useId, type FormEvent } from "react";
import { Person } from "./config/Person";
import z from "zod";
import { zfd } from "zod-form-data";

const schema = zfd.formData({
  first_name: zfd.text(),
  middle_name: zfd.text(z.string().optional()),
  last_name: zfd.text(),
  dob: zfd.text(),
  dod: zfd.text(z.string().optional()),
  gender: z.enum(["M", "F"]),
});

export const Layout = () => {
  const [people, setPeople] = useState<Array<Person>>([]);
  const addPId = useId();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formRef = e.target as HTMLFormElement;
    const formData = new FormData(formRef);
    const newPerson = schema.parse(formData);
    console.log(newPerson);
    // setPeople((allPeople) => [...allPeople, new Person()]);
    formRef.reset();
  };

  return (
    <div className="layout">
      <header>Family Tree</header>
      <main className="page">
        <h2>People</h2>
        <hr />
        <form className="form" autoComplete="off" onSubmit={handleSubmit}>
          <div className="fieldgroup">
            <label htmlFor={`${addPId}-first_name`}>First Name</label>
            <input
              type="text"
              name="first_name"
              id={`${addPId}-first_name`}
              required
            />
          </div>
          <div className="fieldgroup">
            <label htmlFor={`${addPId}-middle_name`}>Middle Name</label>
            <input
              type="text"
              name="middle_name"
              id={`${addPId}-middle_name`}
            />
          </div>
          <div className="fieldgroup">
            <label htmlFor={`${addPId}-last_name`}>Last Name</label>
            <input
              type="text"
              name="last_name"
              id={`${addPId}-last_name`}
              required
            />
          </div>
          <div className="fieldgroup">
            <label htmlFor={`${addPId}-gender`}>Gender</label>
            <select name="gender" required>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="fieldgroup">
            <label htmlFor={`${addPId}-dob`}>Date Of Birth</label>
            <input type="date" name="dob" id={`${addPId}-dob`} required />
          </div>
          <div className="fieldgroup">
            <label htmlFor={`${addPId}-dod`}>Date Of Death</label>
            <input type="date" name="dod" id={`${addPId}-dod`} />
          </div>
          <div className="spanFull">
            <button>Add Person</button>
          </div>
        </form>
        {people.map((person) => (
          <p key={person.id}>{person.first_name}</p>
        ))}
      </main>
      <footer>Footer</footer>
    </div>
  );
};
