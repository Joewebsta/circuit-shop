import React from "react";
import { IconCpu } from "@tabler/icons-react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-14">
        <IconCpu />
        <h1 className="text-2xl font-bold text-center">Circuit Shop</h1>
      </div>
    </div>
  );
};

export default Header;
