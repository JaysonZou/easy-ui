import { useState, ReactNode } from 'react';

interface CollapseProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
}

export const Collapse: React.FC<CollapseProps> = ({ title, children, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);

  const toggle = () => setOpen(!open);

  return (
    <div className="collapse-container border border-gray-300 rounded-md overflow-hidden">
      <div
        className="collapse-header bg-gray-100 p-4 cursor-pointer flex items-center justify-between"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="collapse-content"
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            toggle();
          }
        }}
      >
        <span className="font-semibold">{title}</span>
        <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          {/* You can replace this with an icon if you have one */}
          {open ? '▲' : '▼'}
        </span>
      </div>
      <div
        id="collapse-content"
        className={`collapse-content transition-all duration-300 ease-in-out ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ overflow: 'hidden' }}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
