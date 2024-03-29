import { FC } from "react";
import Avatar from "../common/Avatar";

interface DiscussionProps {
  message: string;
  online: boolean;
}

const Discussion: FC<DiscussionProps> = ({ message, online }) => {
  return (
    <div className="flex justify-between bg-white dark:bg-dark-blue p-2 mb-4 rounded-md">
      <div className="flex items-center">
        <Avatar
          alt="pp"
          url="data:image/jpeg;base64,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"
          online={online}
          className="mr-2"
        />
        <div>
          <p className="font-bold text-dark-moon dark:text-light-moon">Ariz Ahnaf</p>
          <p className="text-sm text-dark-grey-text dark:text-light-text">{message}</p>
        </div>
      </div>
      <p className="text-xs text-dark-grey-text dark:text-light-text">12:21pm</p>
    </div>
  );
};

export default Discussion;
