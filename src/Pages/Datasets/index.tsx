import { Card, Col, Row, Tag } from "antd";
import React from "react";
import CreateDataset from "./components/CreateDataset";
import TotalCount from "./components/TotalCount";

interface DatasetsPageProps {}

const DatasetsPage: React.FC<DatasetsPageProps> = () => {
  return (
    <>
      <h2 className='text-gray-800 mb-1 mt-0'>数据集</h2>
      <TotalCount />
      <Row gutter={[16, 16]}>
        <CreateDataset />
        <Col lg={6} md={8} sm={12}>
          <Card className='cursor-pointer hover:shadow transition-all duration-300'>
            <h3 className='m-0'>SQL语句数据集</h3>
            <div className='mt-8 mb-2 flex gap-1 flex-wrap'>
              <Tag bordered={false} color='orange'>
                fine-tuning
              </Tag>
              <Tag bordered={false} color='geekblue'>
                300条数据
              </Tag>
            </div>
            <span className='text-xs text-gray-500'>上次编辑时间：12小时前</span>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DatasetsPage;
