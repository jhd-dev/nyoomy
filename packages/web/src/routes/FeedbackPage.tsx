import type { FC, FormEvent } from 'react';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import type { SendFeedbackMutation } from '@nyoomy/graphql';
import { useMeQuery, useSendFeedbackMutation } from '@nyoomy/graphql';

enum FeedbackType {
    REVIEW = 'REVIEW',
    FEATURE_SUGGESTION = 'FEATURE_SUGGESTION',
    PROBLEM_REPORT = 'PROBLEM_REPORT',
    OTHER = 'OTHER',
}

const maxRating = 5;
const ratingScalar = 2;

export const FeedbackPage: FC = () => {
    const { data } = useMeQuery();
    const [sendFeedback, { loading }] = useSendFeedbackMutation();

    const [feedbackType, setFeedbackType] = useState<string>('');
    const [details, setDetails] = useState<string>('');
    const [rating, setRating] = useState<number | null>(null);
    const [succeeded, setSucceeded] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await sendFeedback({
            variables: {
                input: {
                    purpose: feedbackType,
                    details,
                    rating:
                        typeof rating === 'number'
                            ? rating * ratingScalar
                            : undefined,
                    maxRating,
                },
            },
            onCompleted(response: SendFeedbackMutation) {
                if (response.sendFeedback?.success) {
                    setFeedbackType('');
                    setDetails('');
                    setRating(null);
                    setSucceeded(true);
                }
            },
        });
    };

    return (
        <Box sx={{ minWidth: 300, m: 4 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
                <Typography variant="h2" sx={{ mb: 4 }}>
                    Feedback
                </Typography>
                <Stack spacing={2}>
                    <FormControl sx={{ minWidth: 100 }}>
                        <InputLabel id="feedback-purpose-select-label">
                            Feedback Type
                        </InputLabel>
                        <Select
                            labelId="feedback-purpose-select-label"
                            id="feedback-purpose-select"
                            name="feedback-type"
                            value={feedbackType}
                            onChange={(e) => setFeedbackType(e.target.value)}
                            required
                            sx={(theme) => ({
                                color: theme.palette.text.secondary,
                                textAlign: 'left',
                                width: '50%',
                            })}
                        >
                            <MenuItem value={FeedbackType.REVIEW}>
                                Review
                            </MenuItem>
                            <MenuItem value={FeedbackType.FEATURE_SUGGESTION}>
                                Feature Suggestion
                            </MenuItem>
                            <MenuItem value={FeedbackType.PROBLEM_REPORT}>
                                Problem Report
                            </MenuItem>
                            <MenuItem value={FeedbackType.OTHER}>
                                Other
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        name="details"
                        label="Details"
                        multiline
                        minRows={4}
                        required
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                    <div>
                        <Typography component="legend">
                            How would you rate your experience with Nyoomy?
                        </Typography>
                        <Rating
                            name="rating"
                            precision={0.5}
                            max={maxRating}
                            getLabelText={(value: number) =>
                                `${String(value)}/${maxRating} ${
                                    value === 1 ? 'star' : 'stars'
                                }`
                            }
                            value={rating}
                            onChange={(_e, value) => setRating(value)}
                        />
                    </div>
                    <Toolbar sx={{ m: 0, p: 0, flexDirection: 'row-reverse' }}>
                        <Tooltip title="Submit feedback">
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                endIcon={<SendIcon />}
                                loading={loading}
                                loadingPosition="end"
                                disabled={loading}
                            >
                                {loading ? 'Sending' : 'Submit'}
                            </LoadingButton>
                        </Tooltip>
                    </Toolbar>
                </Stack>
            </Box>
            {succeeded && (
                <Alert severity="success">
                    <AlertTitle>Feedback Received!</AlertTitle>
                    Thank you very much for your insight!
                </Alert>
            )}
        </Box>
    );
};
