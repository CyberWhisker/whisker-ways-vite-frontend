import * as React from 'react';
import MediumModal from '../../../../components/MediumModal';
import { KeyboardArrowDown, Padding, Person, Share, TableBarSharp } from '@mui/icons-material';
import { Box, Divider, Typography, TextField, Button, Grid, AppBar, Tabs, Paper } from '@mui/material';

export default function CommentModal({data}) {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <Share onClick={() => setOpen(true)}/>
            <MediumModal isOpen={open} setOpen={setOpen}>
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    height: "100%",
                }}
                >
                    <Box sx={{
                        overflow: "hidden",
                        overflowY: "auto"
                    }}>
                        <Box sx={{padding: 1, display: 'flex', alignItems: 'center'}}>
                            <Box
                            sx={{
                                borderRadius: "50%",
                                overflow: "hidden",
                                width: 40,
                                height: 40,
                                marginRight: 2,
                                alignItems: 'center',
                                justifyItems: 'center',
                            }}
                            >
                                <Person sx={{width: '100%', height: '100%'}}/>
                            </Box>
                            <Typography color="primary.main">{data.name}</Typography>
                        </Box>

                        <Divider/>
                        {data.description && (
                            <Typography sx={{padding: 2}}>{data.description}</Typography>
                        )}
                        {data.image && (
                            <Box sx={{ height: 400}}>
                                <Divider/>
                                <img
                                src={`/petImg/${data.image}`}
                                alt="No Image"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                                />
                            </Box>
                        )}
                        <Divider/>
                        <CommentList/>
                    </Box>
                    <CommentForm/>
                </Box>
            </MediumModal>
        </div>
    );
}

function CommentForm() {
    const [comment, setComment] = React.useState(""); 
    function handleChange(e) {
        setComment(e.target.value)
    }
    return (
        <Box sx={{padding: 2, display: "flex", alignItems: 'center', gap: 2}}>
            <Box
            sx={{
                borderRadius: "50%",
                overflow: "hidden",
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyItems: 'center',
            }}
            >
                <Person sx={{width: '100%', height: '100%'}}/>
            </Box>
            <TextField
            id="comment"
            label="Enter Text"
            value={comment}
            onChange={handleChange}
            sx={{width: "100%"}}
            size='small'
            />
            <Button variant='contained'>Comment</Button>
        </Box>
    )
}

function CommentList({id}) {
    const commentData = [
        {
            id: 1,
            name: "Test Name",
            comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident labore libero, possimus suscipit omnis impedit corporis consectetur facilis? Nihil aliquam accusamus quos id. Error, cupiditate aspernatur. Consequatur tenetur sed nihil!"
        },
        {
            id: 1,
            name: "Test 2 Name",
            comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident labore libero, possimus suscipit omnis impedit corporis consectetur facilis? Nihil aliquam accusamus quos id. Error, cupiditate aspernatur. Consequatur tenetur sed nihil!"
        },
    ]
    return (
        <Box sx={{padding: 2}}>
            <Typography>Comments<KeyboardArrowDown/>:</Typography>
            <Box 
            sx={{
                paddingY: 1, 
                paddingX: 5, 
            }}>
                {commentData.map((item, index) => (
                    <Grid key={index} container spacing={1} sx={{mt: 1}}>
                        <Grid item >
                            <Box
                            sx={{
                                borderRadius: "50%",
                                overflow: "hidden",
                                width: 30,
                                height: 30,
                                alignItems: 'center',
                                justifyItems: 'center',
                            }}
                            >
                                <Person sx={{width: '100%', height: '100%'}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={11}>
                            <Paper sx={{padding: 2, borderRadius: 2}}>
                                <Typography fontWeight="bold" color="primary.main">
                                    {item.name}
                                </Typography>
                                <Typography>
                                    {item.comment}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </Box>
    )
}