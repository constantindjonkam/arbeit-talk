import { FC } from "react";
import DiscussionList from "./message/DiscussionList";
import MessageView from "./message/MessageView";

interface MessageContainerProps {}

const MessageContainer: FC<MessageContainerProps> = ({}) => {
  return (
    <div className="flex p-4 h-[calc(100vh-56px)]">
      <DiscussionList />
      <MessageView />
    </div>
  );
};

export default MessageContainer;
