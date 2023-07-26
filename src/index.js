import React from "react";
import ReactDom from "react-dom"
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClint = new QueryClient();

ReactDom.render(<QueryClientProvider client={queryClint}>
<App/>
</QueryClientProvider>,document.getElementById("root"))