import React from "react";

interface TotalCountProps {}

const TotalCount: React.FC<TotalCountProps> = () => {
  return <div className='text-gray-500 mb-4'>5个数据集，2000条数据</div>;
};

export default TotalCount;
