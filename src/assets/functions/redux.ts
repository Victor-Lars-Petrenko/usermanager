import { CaseReducer, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { Users } from "../../redux/store.types";

export const pending: CaseReducer<Users> = state => {
  state.isLoading = true;
  state.error = null;
};

export const rejected: CaseReducer<
  Users,
  PayloadAction<
    string | undefined,
    string,
    {
      arg: void;
      requestId: string;
      requestStatus: "rejected";
      aborted: boolean;
      condition: boolean;
    } & (
      | {
          rejectedWithValue: true;
        }
      | ({ rejectedWithValue: false } & {})
    ),
    SerializedError
  >
> = (state, { payload, error }) => {
  state.isLoading = false;
  state.error = payload || error.message || "Unknown error occurred";
};
