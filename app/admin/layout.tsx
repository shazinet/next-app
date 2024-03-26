import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="flex bg-slate-900 p-5 text-white mr-5">
        Admin Sidebar
      </aside>
      <div>Admin Content</div>
    </div>
  );
};

export default AdminLayout;
