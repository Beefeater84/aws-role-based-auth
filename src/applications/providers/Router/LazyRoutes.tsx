import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

interface LazyRoutesProps {
    children?: React.ReactNode;
}

export default function LazyRoutes({ children }: LazyRoutesProps) {
    return <Suspense fallback={<div>Loading...</div>}>{children || <Outlet />}</Suspense>;
}
