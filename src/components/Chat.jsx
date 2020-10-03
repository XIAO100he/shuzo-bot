import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png';
import Shuzo from '../assets/img/shuzo.jpg';

const Chat = () => {
  return (
    <>
        <ListItem className="p-chat_row">
            <ListItemAvatar>
              <Avatar alt="icon" src={NoProfile} />
              <Avatar alt="icon" src={Shuzo} />
            </ListItemAvatar>
            <div className="p-chat_text"></div>
        </ListItem>
        <ListItem className="p-chat_reverse">
          <ListItemAvatar>
            <Avatar alt="icon" src={NoProfile} />
            <Avatar alt="icon" src={Shuzo} />
          </ListItemAvatar>
          <div className="p-chat_text"></div>
        </ListItem>
    </>
  )
}

export default Chat