import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppCard from "../components/ui/AppCard";
import AppButton from "../components/ui/AppButton";
import AppInput from "../components/ui/AppInput";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setMessage("");
      console.log(formData);

      const response = await fetch("http://localhost:5000/register/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setMessage("Login successful");

        // save token if backend sends token
        console.log(data)
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F5F7FB",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "1.1fr 0.9fr" },
      }}
    >
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          p: 6,
          background:
            "linear-gradient(135deg, #EEF2FF 0%, #F5F7FB 45%, #E8EEFF 100%)",
          borderRight: "1px solid #E7EBF3",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "2.3rem",
              fontWeight: 800,
              color: "#182033",
            }}
          >
            HirePilot
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "inline-flex",
              px: 2.4,
              py: 1,
              bgcolor: "#EEF2FF",
              color: "#5B4CF0",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "0.95rem",
            }}
          >
            AI Recruiting OS
          </Box>
        </Box>

        <Box sx={{ maxWidth: 520 }}>
          <Typography
            sx={{
              fontSize: "3.2rem",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#182033",
            }}
          >
            Hire faster with intelligent recruiting workflows.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#6F7B91",
              fontSize: "1.08rem",
              lineHeight: 1.8,
            }}
          >
            Manage jobs, assess candidates, monitor pipeline health, and
            collaborate with your hiring team from one unified workspace.
          </Typography>
        </Box>

        <Box
          sx={{
            p: 3,
            border: "1px solid #E7EBF3",
            borderRadius: "24px",
            bgcolor: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(8px)",
            maxWidth: 500,
          }}
        >
          <Typography
            sx={{ color: "#182033", fontWeight: 700, fontSize: "1.05rem" }}
          >
            Trusted by modern recruiting teams
          </Typography>
          <Typography sx={{ mt: 1.2, color: "#7B8598", fontSize: "0.98rem" }}>
            Centralize sourcing, screening, assessments, interviews, and hiring
            decisions with AI support at every stage.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <AppCard
          sx={{
            width: "100%",
            maxWidth: 520,
            p: 4,
            borderRadius: "30px",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#182033",
            }}
          >
            Welcome back
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#7B8598",
              fontSize: "1rem",
            }}
          >
            Sign in to continue to your recruiting workspace.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography
              sx={{
                mb: 1.1,
                fontSize: "0.98rem",
                fontWeight: 700,
                color: "#6F7B91",
              }}
            >
              Work Email
            </Typography>
            <AppInput
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                mb: 1.1,
                fontSize: "0.98rem",
                fontWeight: 700,
                color: "#6F7B91",
              }}
            >
              Password
            </Typography>
            <AppInput
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
            />
          </Box>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
              }
              label="Remember me"
            />

            <Typography
              component={Link}
              to="/"
              sx={{
                color: "#5B4CF0",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Forgot password?
            </Typography>
          </Box>

          <AppButton
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              mt: 3,
              width: "100%",
              height: 56,
              borderRadius: "18px",
            }}
          >
            {loading ? "Signing In..." : "Sign In"}
          </AppButton>

          {message && (
            <Typography
              sx={{
                mt: 2,
                textAlign: "center",
                color: "#5B4CF0",
              }}
            >
              {message}
            </Typography>
          )}

          <Box
            sx={{
              mt: 3,
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ height: 1, bgcolor: "#E7EBF3" }} />
            <Typography sx={{ color: "#98A2B3", fontSize: "0.92rem" }}>
              or
            </Typography>
            <Box sx={{ height: 1, bgcolor: "#E7EBF3" }} />
          </Box>

          <AppButton
            variant="outlined"
            sx={{
              mt: 3,
              width: "100%",
              height: 56,
              borderRadius: "18px",
              fontWeight: 700,
            }}
          >
            Continue with Google
          </AppButton>

          <Typography
            sx={{
              mt: 3,
              color: "#7B8598",
              fontSize: "0.95rem",
              textAlign: "center",
            }}
          >
            Don’t have an account?{" "}
            <Box
              component={Link}
              to="/signup"
              sx={{
                color: "#5B4CF0",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Signup Now
            </Box>
          </Typography>
        </AppCard>
      </Box>
    </Box>
  );
}
