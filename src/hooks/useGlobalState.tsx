import { useDispatch, useSelector } from "react-redux";
import { DataState } from "../interfaces";

export default function GlobalState() {
  const state = useSelector((state: DataState) => state);
  const dispatch = useDispatch();

  return {
    state,
    dispatch,
  };
}
