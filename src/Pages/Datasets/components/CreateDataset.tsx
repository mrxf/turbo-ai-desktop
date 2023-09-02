"use client";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Select, Space } from "antd";
import React, { useState } from "react";

interface CreateDatasetProps {}

const CreateDataset: React.FC<CreateDatasetProps> = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <Col lg={6} md={8} sm={12}>
        <div
          className='h-full border cursor-pointer border-gray-100 border-solid rounded-lg bg-slate-50 flex items-center justify-center group'
          onClick={() => setShowModal(true)}
        >
          <div className='text-gray-400 flex gap-1 group-hover:scale-105 transition-all duration-300'>
            <PlusCircleOutlined />
            增加数据集
          </div>
        </div>
      </Col>
      <Modal
        title='添加数据集'
        open={showModal}
        footer={false}
        destroyOnClose
        maskClosable={false}
        onCancel={() => setShowModal(false)}
        width={420}
      >
        <Form className='mt-6' labelCol={{ span: 6 }} wrapperCol={{ span: 17 }}>
          <Form.Item
            label='数据集名称'
            name='name'
            rules={[
              {
                required: true,
                message: "必须输入数据集名称",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label='分类' name='type'>
            <Select
              options={[
                {
                  label: "fine tuning",
                  value: "fine-tuning",
                },
                {
                  label: "语料",
                  value: "nlp",
                },
              ]}
            />
          </Form.Item>
          <div className='flex justify-end gap-2 mr-4'>
            <Button size='small' type='link'>
              取消
            </Button>
            <Button htmlType="submit" className='px-4' size='small' type='primary'>
              <div className='px-2'>保存</div>
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default CreateDataset;
