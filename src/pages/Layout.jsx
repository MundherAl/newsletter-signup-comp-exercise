import React from "react";

export default function Page({ children }) {
    return (
        <div className="h-screen w-screen">
            <div className="flex h-full justify-center items-center">
                {children}
            </div>
        </div>
    );
}