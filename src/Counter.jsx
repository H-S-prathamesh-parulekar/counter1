import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-xl w-80 shadow-lg mt-10 mx-auto">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        className="border p-2 rounded w-20 text-center"
      />
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment(step))}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement(step))}
          className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600"
        >
          -
        </button>
      </div>
    </div>
  );
}
