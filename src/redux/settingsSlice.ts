import {createSlice} from '@reduxjs/toolkit';
import ISettings from '../interfaces/ISettings';

export type SettingsState = {
  value: ISettings;
};

const initialState: SettingsState = {
  value: {} as ISettings,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState,
  reducers: {
    setSettings: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setSettings} = settingsSlice.actions;
export default settingsSlice.reducer;
