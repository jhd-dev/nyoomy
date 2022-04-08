import type { FC } from 'react';
import React from 'react';
import { Add as AddIcon } from '@mui/icons-material';
import {
    CircularProgress,
    Fab,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useMyChatsQuery } from '@nyoomy/graphql';

const ChatPage: FC = () => {
    const { data, loading, error } = useMyChatsQuery({
        variables: { excludeArchived: false },
    });

    if (error) return <div>Error.</div>;
    return (
        <Box>
            <List sx={{ width: '24em' }}>
                {loading ? (
                    <CircularProgress />
                ) : (
                    data?.myChats.map((chat) => (
                        <ListItem key={chat.id}>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText
                                primary="username"
                                secondary="Previous message"
                            />
                        </ListItem>
                    ))
                )}
            </List>
            <Fab color="primary">
                <AddIcon />
            </Fab>
        </Box>
    );
};

export default ChatPage;
