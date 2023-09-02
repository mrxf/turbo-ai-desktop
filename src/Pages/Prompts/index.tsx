import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

interface PromptsProps {
  
}

const Prompts: React.FC<PromptsProps> = () => {
  return (
    <div>
      Prompts
      <Link to="/dash/datasets">DataSets</Link>
    </div>
  );
};

export default Prompts;