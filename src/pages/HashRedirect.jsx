import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function HashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === "#leaderboard") {
      navigate("/leaderboard");
    }
  }, [location, navigate]);

  return null;
}
