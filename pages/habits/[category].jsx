import * as Action from "actions";
import Button from "components/habits/Button";
import Input from "components/habits/Input";
import Title from "components/habits/Title";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Error from "components/habits/Error";
import { useEffect } from "react";
import AllHabits from "components/habits/allhabits";
import HabitHandle from "components/habits/HabitHandle";

export async function getServerSideProps(context) {
  const { category } = context.query;
  return {
    props: { category }, // will be passed to the page component as props
  };
}
export default function AddHabit({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        color="bg-gray-500"
        onClick={() => {
          router.back();
        }}
      >
        go back
      </Button>
      <Button
        onClick={() => {
          router.push(`/addhabit/${category}`);
        }}
      >
        add habit{" "}
      </Button>
      <AllHabits category={category} />
    </div>
  );
}
