import type { ReactNode } from "react";
import "./AuthLayout.css";

type AuthLayoutProps = {
    children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="auth-layout">
            <div className="auth-left">
                <div className="auth-brand">

                    <h2>Trip<span>Mate</span></h2>

                    <p>
                        AI-powered collaborative travel planning
                        for unforgettable journeys.
                    </p>

                </div>

            </div>

            <div className="auth-right">

                {children}

            </div>
        </div>
    );
}