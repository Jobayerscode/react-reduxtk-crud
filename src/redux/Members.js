import { createSlice } from "@reduxjs/toolkit";

import { MembersData } from "./Data";

export const memberSlice = createSlice({
  name: "members",
  initialState: { value: MembersData },
  reducers: {
    addMember: (state, action) => {
      state.value.push(action.payload);
    },

    deleteMember: (state, action) => {
      state.value = state.value.filter(
        (member) => member.id !== action.payload.id
      );
    },

    updateMemberImg: (state, action) => {
      state.value.map((member) => {
        if (member.id === action.payload.id) {
          member.img = action.payload.img;
        }
      });
    },
  },
});

export const { addMember, deleteMember, updateMemberImg } = memberSlice.actions;
export default memberSlice.reducer;
