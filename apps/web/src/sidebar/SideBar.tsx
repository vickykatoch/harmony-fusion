import { FC } from 'react';

export const SideBar: FC = () => {
  return (
    <div className="d-flex flex-column border-end border-1 border-secondary-subtle col-2">
      <div className="p-2">SideBar Item 1</div>
      <div className="p-2">SideBar Item 2</div>
      <div className="p-2">SideBar Item 3</div>
    </div>
  );
};
