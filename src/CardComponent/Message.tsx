import React from 'react';

interface Props {
  message: string;
}

const Message:React.FC<Props> = ({message}) => {
  return (
    <div>{message}</div>
  );
};

export default Message;