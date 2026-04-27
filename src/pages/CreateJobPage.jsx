import { Box, Typography, CircularProgress, MenuItem } from "@mui/material";
import { useState } from "react";
import AppShell from "../components/layout/AppShell";
import AppCard from "../components/ui/AppCard";
import AppBadge from "../components/ui/AppBadge";
import AppButton from "../components/ui/AppButton";
import AppInput from "../components/ui/AppInput";

function FieldLabel({ children }) {
  return (
    <Typography
      sx={{
        mb: 1.1,
        fontSize: "0.98rem",
        fontWeight: 700,
        color: "#6F7B91",
      }}
    >
      {children}
    </Typography>
  );
}

function SegButton({ label, active = false, onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        height: 52,
        minWidth: 150,
        px: 3,
        borderRadius: "18px",
        border: "1px solid",
        borderColor: active ? "transparent" : "#E7EBF3",
        bgcolor: active ? "#EEF2FF" : "#fff",
        color: active ? "#5B4CF0" : "#6F7B91",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: active ? 700 : 500,
        fontSize: "1rem",
        cursor: "pointer",
        transition: "0.2s ease",
      }}
    >
      {label}
    </Box>
  );
}

export default function CreateJobPage() {
  const [form, setForm] = useState({
    title: "",
    department: "",
    location: "",
    employmentType: "",
    experienceRange: "0–2 yrs",
    description: "",
    workflow: "Screening → Assessment → Interview → Offer",
    aiMatching: "Enabled for shortlist recommendations",
  });

  const [skills, setSkills] = useState([
    "React",
    "TypeScript",
    "Next.js",
    "System Design",
  ]);
  const [newSkill, setNewSkill] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const experienceOptions = ["0–2 yrs", "3–5 yrs", "4–6 yrs", "7+ yrs"];

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addSkill = () => {
    const trimmed = newSkill.trim();
    if (!trimmed) return;
    if (skills.includes(trimmed)) return;

    setSkills((prev) => [...prev, trimmed]);
    setNewSkill("");
  };

  const removeSkill = (skillToRemove) => {
    setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));
  };

  const validateForm = () => {
    if (!form.title.trim()) return "Job title is required";
    if (!form.department.trim()) return "Department is required";
    if (!form.location.trim()) return "Location is required";
    if (!form.employmentType.trim()) return "Employment type is required";
    if (!form.description.trim()) return "Job description is required";
    if (skills.length === 0) return "At least one skill is required";
    return "";
  };

  const submitJob = async (status) => {
    const error = validateForm();
    if (error) {
      setMessage(error);
      return;
    }

    setLoading(true);
    setMessage("");

    const payload = {
      ...form,
      skills,
      status, // "draft" or "published"
    };

    try {
      const endpoint =
        status === "draft"
          ? "http://localhost:5000/api/jobs/save-draft"
          : "http://localhost:5000/api/jobs/publish";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setMessage(
        status === "draft"
          ? "Job draft saved successfully."
          : "Job published successfully.",
      );
    } catch (err) {
      setMessage(err.message || "Failed to submit job");
    } finally {
      setLoading(false);
    }
  };

  const [generatingJD, setGeneratingJD] = useState(false);
  const generateJD = async () => {
    if (
      !form.title ||
      !form.department ||
      !form.location ||
      !form.employmentType
    ) {
      setMessage(
        "Please fill Job Title, Department, Location and Employment Type.",
      );
      return;
    }

    try {
      setGeneratingJD(true);
      setMessage("");

      const res = await fetch("http://localhost:5000/api/jobs/generate-jd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: form.title,
          department: form.department,
          location: form.location,
          employmentType: form.employmentType,
          experienceRange: form.experienceRange,
          skills: skills,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate JD");
      }

      handleChange("description", data.description);
      setMessage("Job Description generated successfully.");
    } catch (error) {
      setMessage(error.message || "Failed to generate JD");
    } finally {
      setGeneratingJD(false);
    }
  };

  return (
    <AppShell>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography sx={{ color: "#98A2B3", fontSize: "0.95rem", mb: 1 }}>
            Jobs / Create
          </Typography>

          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#182033",
            }}
          >
            Create Job
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: "#7B8598",
              fontSize: "1.1rem",
            }}
          >
            Add a new role and configure hiring workflow.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <AppButton
            variant="outlined"
            sx={{
              minWidth: 140,
              height: 58,
              borderRadius: "18px",
              fontWeight: 700,
            }}
            disabled={loading}
            onClick={() => submitJob("draft")}
          >
            {loading ? <CircularProgress size={20} /> : "Save Draft"}
          </AppButton>

          <AppButton
            sx={{
              minWidth: 160,
              height: 58,
              borderRadius: "18px",
              fontWeight: 700,
            }}
            disabled={loading}
            onClick={() => submitJob("published")}
          >
            {loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Publish Job"
            )}
          </AppButton>
        </Box>
      </Box>

      {message && (
        <Box
          sx={{
            mb: 3,
            px: 2,
            py: 1.5,
            borderRadius: "16px",
            bgcolor: "#F8FAFD",
            border: "1px solid #E7EBF3",
            color: "#182033",
            fontWeight: 500,
          }}
        >
          {message}
        </Box>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", xl: "1.75fr 0.6fr" },
          gap: 3,
          alignItems: "start",
        }}
      >
        <AppCard sx={{ p: 4 }}>
          <Typography
            sx={{ fontSize: "1.7rem", fontWeight: 700, color: "#182033" }}
          >
            Role Details
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 3,
            }}
          >
            <Box>
              <FieldLabel>Job Title</FieldLabel>
              <AppInput
                placeholder="Enter Job Title"
                value={form.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </Box>

            <Box>
              <FieldLabel>Department</FieldLabel>
              <AppInput
                placeholder="Enter Deparment"
                value={form.department}
                onChange={(e) => handleChange("department", e.target.value)}
              />
            </Box>

            <Box>
              <FieldLabel>Location</FieldLabel>
              <AppInput
                placeholder="Enter Location"
                value={form.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </Box>

            <Box>
              <FieldLabel>Employment Type</FieldLabel>
              <AppInput
                select
                placeholder="Select Employment Type"
                value={form.employmentType}
                onChange={(e) => handleChange("employmentType", e.target.value)}
              >
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
                <MenuItem value="Freelance">Freelance</MenuItem>
                <MenuItem value="Temporary">Temporary</MenuItem>
              </AppInput>
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <FieldLabel>Experience Range</FieldLabel>
            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              {experienceOptions.map((option) => (
                <SegButton
                  key={option}
                  label={option}
                  active={form.experienceRange === option}
                  onClick={() => handleChange("experienceRange", option)}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#182033" }}
            >
              Skills Required
            </Typography>

            <Box sx={{ mt: 2, display: "flex", gap: 1.2, flexWrap: "wrap" }}>
              {skills.map((skill) => (
                <Box
                  key={skill}
                  onClick={() => removeSkill(skill)}
                  sx={{ cursor: "pointer" }}
                >
                  <AppBadge label={`${skill} ×`} color="default" />
                </Box>
              ))}
            </Box>

            <Box sx={{ mt: 3, display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Box sx={{ flex: 1, minWidth: 220 }}>
                <AppInput
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill();
                    }
                  }}
                />
              </Box>
              <AppButton
                onClick={addSkill}
                sx={{
                  height: 56,
                  minWidth: 120,
                  borderRadius: "18px",
                  fontWeight: 700,
                }}
              >
                Add Skill
              </AppButton>
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#182033" }}
              >
                Job Description
              </Typography>

              <AppButton
                onClick={generateJD}
                disabled={generatingJD}
                sx={{
                  height: 48,
                  minWidth: 170,
                  borderRadius: "16px",
                  fontWeight: 700,
                }}
              >
                {generatingJD ? (
                  <CircularProgress size={22} color="inherit" />
                ) : (
                  "Generate JD"
                )}{" "}
              </AppButton>
            </Box>

            <Box
              component="textarea"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              sx={{
                mt: 3,
                minHeight: 220,
                width: "100%",
                border: "1px solid #E7EBF3",
                borderRadius: "22px",
                bgcolor: "#fff",
                p: 3,
                color: "#00050ec4",
                fontSize: "1rem",
                lineHeight: 1.7,
                outline: "none",
                resize: "vertical",
                fontFamily: "inherit",
              }}
            />
          </Box>

          <Box sx={{ mt: 5, borderTop: "1px solid #EEF1F6" }} />
        </AppCard>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <AppCard sx={{ p: 4 }}>
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#182033" }}
            >
              Hiring Setup
            </Typography>

            <Box
              sx={{
                mt: 3,
                p: 2.8,
                border: "1px solid #E7EBF3",
                borderRadius: "22px",
                bgcolor: "#F8FAFD",
              }}
            >
              <Typography sx={{ fontWeight: 700, color: "#182033" }}>
                Workflow
              </Typography>
              <Typography sx={{ mt: 1.2, color: "#7B8598" }}>
                {form.workflow}
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 2,
                p: 2.8,
                border: "1px solid #E7EBF3",
                borderRadius: "22px",
                bgcolor: "#F8FAFD",
              }}
            >
              <Typography sx={{ fontWeight: 700, color: "#182033" }}>
                AI Matching
              </Typography>
              <Typography sx={{ mt: 1.2, color: "#7B8598" }}>
                {form.aiMatching}
              </Typography>
            </Box>
          </AppCard>
        </Box>
      </Box>
    </AppShell>
  );
}
