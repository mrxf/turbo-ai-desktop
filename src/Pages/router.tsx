import { createBrowserRouter } from "react-router-dom";
import DataSets from "./Datasets";
import Prompts from "./Prompts";
import DashLayout from "../Components/Layout/DashLayout";
import KnowledgeBase from "./KnowledgeBase";
import Compare from "./Compare";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Prompts,
  },
  {
    path: "/dash",
    element: <DashLayout />,
    children: [
      {
        path: "/dash/datasets",
        Component: DataSets,
      },
      {
        path: "/dash/prompts",
        Component: Prompts,
      },
      {
        path: "/dash/knowledgebase",
        Component: KnowledgeBase,
      },
      {
        path: "/dash/compare",
        Component: Compare,
      },
    ],
  },
]);
