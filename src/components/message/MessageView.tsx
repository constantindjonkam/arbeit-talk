import { FC } from "react";
import { FiSend } from "react-icons/fi";
import Message from "./Message";
import MessageHead from "./MessageHead";

interface MessageViewProps {}

const MessageView: FC<MessageViewProps> = ({}) => {
  return (
    <div className="flex flex-col flex-[0.8] p-4  justify-between h-full">
      <div className="h-full flex flex-col justify-between overflow-y-auto items-end">
        <MessageHead name="Ariz Ahnaf" online={true} />
        <div className="flex flex-col gap-4 mb-4 px-[5%]">
          {[...Array(5)].map((d) => (
            <Message messageText="Hey! How have you been?" date="12:00" />
          ))}
        </div>
      </div>

      <div className="flex w-full justify-end items-center relative">
        <input
          type="text"
          placeholder="Type a message here"
          className="border border-dark-grey-border rounded-lg p-2 w-full dark:bg-dark-grey-input"
        />
        <FiSend className="absolute mr-2 w-10" />
      </div>
    </div>
  );
};

export default MessageView;
