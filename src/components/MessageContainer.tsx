import { FC } from "react";

interface MessageContainerProps {}

const MessageContainer: FC<MessageContainerProps> = ({}) => {
  return (
    <div className="text-center">
      <h1 className="text-white">Welcome To Arbeit Talk</h1>
      <p className="text-sky-400/100">The quick brown fox...</p>
    </div>
  );
};

export default MessageContainer;
