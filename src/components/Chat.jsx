import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoName from '../assets/img/no-name.jpeg'
import Shuzo from '../assets/img/shuzo.jpg';

const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat_row' : 'p-chat_reverse';

  return (
    <>
        <ListItem className={classes}>
            <ListItemAvatar>
              {isQuestion ? (
                <Avatar alt="icon" src={Shuzo} />
              ) : (
                <Avatar alt="icon" src={NoName} />
              )}
            </ListItemAvatar>
          <div className="p-chat_text">
            {props.text}
          </div>
        </ListItem>
    </>
  )
}

export default Chat