import { FaUsers, FaRobot, FaMapLocationDot } from "react-icons/fa6";
import Card from "../../ui/Card";
import "./FeatureSection.css";

export default function FeatureSection() {
    return (
        <section className="feature-section">
            <Card>
                <div className="feature-icon collaborate">
                    <FaUsers />
                </div>
                <h3>Collaborate</h3>
                <p>Plan unforgettable trips together with friends and family in one shared workspace.</p>
            </Card>
             <Card>
                <div className="feature-icon ai">
                    <FaRobot />
                </div>
                <h3>AI Assistance</h3>
                <p>Receive intelligent travel suggestions, optimized itineraries and personalized recommendations.</p>
            </Card>
             <Card>
                <div className="feature-icon map">
                    <FaMapLocationDot />
                </div>
                <h3>Visualize</h3>
                <p>See your destinations, routes and activities on an interactive trip map.</p>
            </Card>
        </section>

    );
}