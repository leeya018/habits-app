import { addCategory, getCategories, updateError } from "actions";
import Button from "components/habits/Button";
import Title from "components/habits/Title";
import Input from "components/habits/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Error from "components/habits/Error";
import { useEffect } from "react";

// export default function getServerSideProps(){
//     const res =
//     return {
//         props : {categories}
//     }
// }

// getCategories
export default function Category({}) {
  const [name, setName] = useState("");
  const { categories, error } = useSelector((state) => state.habits);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleAdd = () => {
    dispatch(addCategory(name));
    setName("");

    // setName("");
  };
  const handleCategoryClick = (name) => {
    router.push(`/addhabit/${name}`);
    // setName("");
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Title>categories: </Title>
        <ul className="flex flex-col">
          {categories.map((name) => (
            <li
              key={name}
              onClick={() => handleCategoryClick(name)}
              className="font-bold p-2 border-2 bg-gray-300 hover:bg-gray-500"
            >
              {name}
            </li>
          ))}
        </ul>
        <div>
          <Input
            name="category name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              dispatch(updateError(""));
            }}
          />
          <Button onClick={handleAdd}>add</Button>
        </div>
        <Error>{error}</Error>
        {/* <div>{JSON.stringify(categories)}</div> */}
      </div>
    </div>
  );
}
