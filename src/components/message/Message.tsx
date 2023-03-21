import { FC } from "react";

interface MessageProps {
  messageText: string;
  date: string;
}

const Message: FC<MessageProps> = ({ messageText, date }) => {
  return (
    <div className="rounded-full p-2 bg-light-grey-bg dark:bg-dark-grey-bg">
      <p className="text-dark-moon dark:text-light-text">{messageText}</p>
    </div>
  );
};

export default Message;
