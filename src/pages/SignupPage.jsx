import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppCard from "../components/ui/AppCard";
import AppButton from "../components/ui/AppButton";
import AppInput from "../components/ui/AppInput";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    role: "recruiter",
    workspace_name: "",
    password: "",
    confirm_password: "",
    agree: true,
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
    setMessage("");

    if (!formData.full_name.trim()) {
      setMessage("Full name is required");
      return;
    }

    if (!formData.email.trim()) {
      setMessage("Email is required");
      return;
    }

    if (!formData.workspace_name.trim()) {
      setMessage("Workspace name is required");
      return;
    }

    if (!formData.password.trim()) {
      setMessage("Password is required");
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setMessage("Passwords do not match");
      return;
    }

    if (!formData.agree) {
      setMessage("Please accept terms and conditions");
      return;
    }

    console.log(formData);

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/register/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Account created successfully");
        console.log(data);
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Server error");
      console.error(error);
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
        gridTemplateColumns: { xs: "1fr", lg: "1.08fr 0.92fr" },
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

        <Box sx={{ maxWidth: 540 }}>
          <Typography
            sx={{
              fontSize: "3.1rem",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#182033",
            }}
          >
            Build your recruiting workspace in minutes.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "#6F7B91",
              fontSize: "1.08rem",
              lineHeight: 1.8,
            }}
          >
            Create jobs, manage candidate pipelines, run assessments, and make
            faster hiring decisions with AI-assisted workflows.
          </Typography>
        </Box>

        <Box
          sx={{
            p: 3,
            border: "1px solid #E7EBF3",
            borderRadius: "24px",
            bgcolor: "rgba(255,255,255,0.72)",
            backdropFilter: "blur(8px)",
            maxWidth: 520,
          }}
        >
          <Typography
            sx={{ color: "#182033", fontWeight: 700, fontSize: "1.05rem" }}
          >
            Everything recruiters need in one place
          </Typography>
          <Typography sx={{ mt: 1.2, color: "#7B8598", fontSize: "0.98rem" }}>
            From sourcing and screening to assessments, interviews, analytics,
            and team collaboration — all organized in a single platform.
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
            maxWidth: 560,
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
            Create account
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#7B8598",
              fontSize: "1rem",
            }}
          >
            Set up your account and start managing hiring workflows.
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2.5,
            }}
          >
            <Box>
              <Typography
                sx={{
                  mb: 1.1,
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  color: "#6F7B91",
                }}
              >
                Full Name
              </Typography>
              <AppInput
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Riya Kapoor"
              />
            </Box>

            <Box>
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
                type="email"
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  mb: 1.1,
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  color: "#6F7B91",
                }}
              >
                Role
              </Typography>
              <AppInput
                select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <MenuItem value="recruiter">Recruiter</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="hiring_manager">Hiring Manager</MenuItem>
                <MenuItem value="interviewer">Interviewer</MenuItem>
              </AppInput>
            </Box>

            <Box>
              <Typography
                sx={{
                  mb: 1.1,
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  color: "#6F7B91",
                }}
              >
                Workspace Name
              </Typography>
              <AppInput
                name="workspace_name"
                value={formData.workspace_name}
                onChange={handleChange}
                placeholder="Acme Talent Team"
              />
            </Box>
          </Box>

          <Box
            sx={{
              mt: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2.5,
            }}
          >
            <Box>
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
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  mb: 1.1,
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  color: "#6F7B91",
                }}
              >
                Confirm Password
              </Typography>
              <AppInput
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="Confirm password"
              />
            </Box>
          </Box>

          {message && (
            <Typography
              sx={{
                mt: 2,
                color: message.toLowerCase().includes("success")
                  ? "#16A34A"
                  : "#DC2626",
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            >
              {message}
            </Typography>
          )}

          <Box sx={{ mt: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
              }
              label={
                <Typography
                  sx={{
                    color: "#7B8598",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  I agree to the terms of service and privacy policy.
                </Typography>
              }
            />
          </Box>

          <AppButton
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              mt: 2,
              width: "100%",
              height: 56,
              borderRadius: "18px",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            {loading ? "Creating..." : "Create Account"}
          </AppButton>

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
            Already have an account?{" "}
            <Box
              component={Link}
              to="/login"
              sx={{
                color: "#5B4CF0",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Sign in
            </Box>
          </Typography>
        </AppCard>
      </Box>
    </Box>
  );
}