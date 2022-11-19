import { createSlice, configureStore } from '@reduxjs/toolkit';

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        isSettingModalShow: false,
        setting: {
            isInfoCardShow : false
        }
    },
    reducers: {
        showSettingModal: (state) => {
            state.isSettingModalShow = true
        },
        hideSettingModal: (state) => {
            state.isSettingModalShow = false
        },
        changeSetting: (state, payload) => {
            console.log(state, payload)
            console.log({
                ...state.setting,
                ...payload
            })
            state.setting = {
                ...state.setting,
                ...payload
            }
            console.log({
                ...state.setting,
                ...payload
            })
        }
    }
})

export const {
    showSettingModal,
    hideSettingModal,
    changeSetting
} = globalSlice.actions

export default globalSlice.reducer;