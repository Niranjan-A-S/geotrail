import { FC, memo } from "react";

export const Footer: FC = memo(() => (
    <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl text-xs text-muted-foreground">
            &copy; 2024 Niranjan A S. All rights reserved.
        </div>
    </footer>
))