import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WriteState {
    title: string;
    body: string;
    postId?: number;
    [state: string]: any;
}

export interface ChangeFieldWritePayload {
    key: 'title' | 'body';
    value: string;
}
const initialState: WriteState = {
    title: '',
    body: ''
};

const writeSlice = createSlice({
    name: 'write',
    initialState,
    reducers: {
        changeWriteField: (state: WriteState, action: PayloadAction<ChangeFieldWritePayload>) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
        setPost: (state: WriteState, action: PayloadAction<WriteState>) => {
            state.title = action.payload.title;
            state.body = action.payload.body;
            state.postId = action.payload.postId;
        },
        initiallize: () => initialState
    }
});

export const { changeWriteField, initiallize, setPost } = writeSlice.actions;
export default writeSlice;
