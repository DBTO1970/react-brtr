import { LISTINGS } from "../shared/listings";
import { MEMBERS } from "../shared/members";

export const initialState = {
    listings: LISTINGS,
    members: MEMBERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};