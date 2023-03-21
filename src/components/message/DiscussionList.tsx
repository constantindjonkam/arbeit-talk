import { FC } from "react";
import { BsArchive } from "react-icons/bs";
import AnimatedButton from "../common/buttons/AnimatedButton";
import Discussion from "./Discussion";

interface DiscussionListProps {}

const DiscussionList: FC<DiscussionListProps> = ({}) => {
  const messages = [
    "Please schedule an interview",
    "what's up?",
    "You so lame",
    "Keep working. Keep ur head up!",
    "Keep working. Keep ur head up!",
    "Keep working. Keep ur head up!",
    "Keep working. Keep ur head up!",
    "Keep working. Keep ur head up!",
    "Keep working. Keep ur head up!",
  ];

  return (
    <div className="h-full overflow-y-auto py-4 px-2 flex-[0.2] bg-light-grey-bg dark:bg-dark-grey-bg">
      <div className="flex items-center justify-between mb-4">
        <p className="font-bold">Messages</p>
        <AnimatedButton>
          <BsArchive />
          <p className="text-sm text-dark-grey">Archive Chats</p>
        </AnimatedButton>
      </div>
      {messages.map((message, index) => (
        <Discussion key={index} message={message} online={true} />
      ))}
    </div>
  );
};

export default DiscussionList;
