import { useEffect } from "react";
import { useMerge } from "../CustomHook";

const MyData = () => {
  const [data, setData] = useMerge();
  useEffect(() => {
    setData({
      ...data,
      ...{ username: "masai", email: "masai@mail.com", password: "abc@123" }
    });
  }, []);
  return (
    <>
      <div>
        <h2>{data.username}</h2>
        <h2>{data.email}</h2>
        <h2>{data.password}</h2>
      </div>
    </>
  );
};
export default MyData;
