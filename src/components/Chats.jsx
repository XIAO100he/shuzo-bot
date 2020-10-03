import React from 'react';
import List from '@material-ui/core/List';
import { Chat } from './index';

const Chats = () => {
  return (
    <List className="p-chats">
      <Chat />
    </List>
  )
}

export default Chats