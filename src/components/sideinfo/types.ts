import React from "react";

export interface ISideInfo {
    open: boolean,
    position?: "top_left" | "top_right" | "bottom_right" | "bottom_left",
    children?: React.ReactNode
}