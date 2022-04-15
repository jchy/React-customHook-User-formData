import { useMerge } from "../CustomHook";

const Form = () => {
  const [data, setData] = useMerge();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const { username, email, password } = data;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, ...data });
    console.log(data);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default Form;
