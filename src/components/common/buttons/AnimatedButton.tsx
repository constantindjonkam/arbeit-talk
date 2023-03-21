import { FC, ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ children }) => {
  return (
    <button className="relative overflow-hidden rounded-sm group">
      <div className="flex items-center gap-2 btn-outlined relative z-10">{children}</div>
      <div className="absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-linear duration-300 bg-gray-100 dark:bg-dark-blue left-0 top-0" />
    </button>
  );
};

export default AnimatedButton;
