import * as Action from "actions";
import Button from "components/habits/Button";
import Title from "components/habits/Title";
import Input from "components/habits/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Error from "components/habits/Error";
import { useEffect } from "react";

// getCategories
export default function Categories({}) {
  const [name, setName] = useState("");
  const { categories, error } = useSelector((state) => state.habits);
  const router = useRouter();
  console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!name) {
      dispatch(Action.getCategories());
    }
  }, [name]);

  const handleAdd = () => {
    dispatch(Action.addCategory(name));
    setName("");
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Title>categories: </Title>

        <ul className="flex flex-col">
          {categories.map((category) => (
            <li
              key={category.name}
              onClick={() => {
                dispatch(Action.updateChosenCategory(category.name));
                router.push(`/habits/${category.name}`);
              }}
              className="font-bold p-2 border-2 bg-gray-300 hover:bg-gray-500"
            >
              {category.name}
            </li>
          ))}
        </ul>
        <div>
          <Input
            name="category name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              dispatch(Action.updateError(""));
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
