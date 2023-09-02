import React, { useMemo } from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import { DashSideItems } from "@/utils/dashItems";

interface AutoBreadcrumbProps {}

const AutoBreadcrumb: React.FC<AutoBreadcrumbProps> = () => {
  const {pathname} = useLocation();

  const title = useMemo(() => {
    return DashSideItems.find((item) => item.key === pathname)?.label;
  }, [pathname]);
  return (
    <div className='px-4 py-3 bg-white'>
      <Breadcrumb
        items={[
          {
            href: "",
            title: "Turbo",
          },
          {
            title,
          },
        ]}
      />
    </div>
  );
};

export default AutoBreadcrumb;
