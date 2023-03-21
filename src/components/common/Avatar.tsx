import { FC } from "react";

interface AvatarProps {
  url: string;
  alt: string;
  online: boolean;
  className?: string;
}

const Avatar: FC<AvatarProps> = (props) => {
  const { url, alt, online, className } = props;

  return (
    <div className={`relative ${className}`}>
      <img src={url} alt={alt} className="rounded-full max-w-[48px]" />
      {online && <div className="absolute rounded-full w-2 h-2 bg-green-400 bottom-1 right-1" />}
    </div>
  );
};

export default Avatar;
