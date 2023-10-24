// import Skeleton from "@material-ui/lab/Skeleton";
import React, { useEffect, useState } from "react";

import { isCancel } from "./axios.config";

const LoadAPI = React.memo(
  ({ payload, functionApi, children, responseSanitize = (res) => res }) => {
    const [state, setState] = useState({ loading: true, data: undefined });

    useEffect(() => {
      let unMounted = false;

      setState({ loading: true });
      functionApi(payload)
        .then((res) => {
          !unMounted &&
            setState &&
            setState({ loading: false, data: responseSanitize(res) });
        })
        .catch((error) => {
          !isCancel(error) && console.error(error);
          !unMounted &&
            setState &&
            setState({ data: undefined, loading: false });
        });

      return () => {
        unMounted = true;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [payload]);

    return state.loading
      ? children(undefined, state.loading)
      : children(state.data, false);
  }
);
export default LoadAPI;
