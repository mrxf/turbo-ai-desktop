import {
  DatabaseOutlined,
  ReconciliationOutlined,
  MergeCellsOutlined,
  BlockOutlined,
} from "@ant-design/icons";

export const DashSideItems = [
  {
    label: "数据集",
    key: "/dash/datasets",
    icon: <DatabaseOutlined />,
  },
  {
    label: "Prompts",
    key: "/dash/prompts",
    icon: <ReconciliationOutlined />,
  },
  {
    label: "知识库",
    key: "/dash/knowledgebase",
    icon: <BlockOutlined />,
  },
  {
    label: "效果测试",
    key: "/dash/compare",
    icon: <MergeCellsOutlined />,
  },
];
