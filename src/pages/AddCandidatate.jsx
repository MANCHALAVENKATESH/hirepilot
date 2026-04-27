import { Box, Typography, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppShell from "../components/layout/AppShell";
import AppCard from "../components/ui/AppCard";
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

export default function AddCandidatePage() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [candidate, setCandidate] = useState({
    full_name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    summary: "",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeFilename, setResumeFilename] = useState("");
  const [extracting, setExtracting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (field, value) => {
    setCandidate((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleResumeUpload = async (file) => {
    if (!file) return;

    setResumeFile(file);
    setResumeFilename(file.name);
    setExtracting(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const res = await fetch(
        "http://localhost:5000/api/candidates/extract-resume",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();
      console.log(data)
      if (!res.ok) {
        throw new Error(data.error || "Failed to extract resume");
      }

      setCandidate({
        full_name: data.full_name || "",
        email: data.email || "",
        phone: data.phone || "",
        experience: data.experience || "",
        skills: Array.isArray(data.skills) ? data.skills.join(", ") : "",
        summary: data.summary || "",
      });

      setMessage("Resume extracted successfully. Please review the details.");
    } catch (err) {
      setMessage(err.message || "Resume extraction failed");
    } finally {
      setExtracting(false);
    }
  };

  const submitCandidate = async () => {
    setSaving(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("job_id", jobId);
      formData.append("full_name", candidate.full_name);
      formData.append("email", candidate.email);
      formData.append("phone", candidate.phone);
      formData.append("experience", candidate.experience);
      formData.append("skills", candidate.skills);
      formData.append("summary", candidate.summary);

      if (resumeFile) {
        formData.append("resume", resumeFile);
      }

      const res = await fetch("http://localhost:5000/api/candidates/create", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to save candidate");
      }

      navigate(`/candidateslist`);
    } catch (err) {
      setMessage(err.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  return (
    <AppShell>
      <Box sx={{ mb: 4 }}>
        <Typography sx={{ color: "#98A2B3", fontSize: "0.95rem", mb: 1 }}>
          Jobs / Candidates / Add
        </Typography>

        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: 700,
            lineHeight: 1.08,
            color: "#182033",
          }}
        >
          Add Candidate
        </Typography>

        <Typography sx={{ mt: 1.2, color: "#7B8598", fontSize: "1.1rem" }}>
          Upload resume and let AI extract candidate details automatically.
        </Typography>
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
          }}
        >
          {message}
        </Box>
      )}

      <AppCard sx={{ p: 4 }}>
        <Typography
          sx={{ fontSize: "1.7rem", fontWeight: 700, color: "#182033" }}
        >
          Candidate Details
        </Typography>

      <Box sx={{ mt: 3 }}>
  <FieldLabel>Resume Upload</FieldLabel>

  <Box
    sx={{
      mt: 1.5,
      p: 3,
      border: "2px dashed #D0D5DD",
      borderRadius: "18px",
      bgcolor: "#F8FAFD",
      transition: "0.2s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
      flexWrap: "wrap",
      "&:hover": {
        borderColor: "#5B4CF0",
        bgcolor: "#EEF2FF",
      },
    }}
  >
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          color: "#182033",
          fontSize: "1rem",
        }}
      >
        Upload Resume
      </Typography>

      <Typography
        sx={{
          mt: 0.6,
          fontSize: "0.92rem",
          color: "#7B8598",
        }}
      >
        PDF, DOC, DOCX (Max 5MB)
      </Typography>
    </Box>

    <input
      id="resume-upload"
      type="file"
      accept=".pdf,.doc,.docx"
      hidden
      onChange={(e) => handleResumeUpload(e.target.files[0])}
    />

    <label htmlFor="resume-upload">
      <AppButton
        component="span"
        sx={{
          minWidth: 130,
          height: 46,
          borderRadius: "14px",
          fontWeight: 700,
        }}
      >
        Choose File
      </AppButton>
    </label>
  </Box>

 {resumeFilename && (
  <Box
    sx={{
      mt: 2,
      px: 2,
      py: 1.4,
      borderRadius: "14px",
      bgcolor: "#ECFDF3",
      border: "1px solid #ABEFC6",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
    }}
  >
    <Typography
      sx={{
        color: "#067647",
        fontWeight: 600,
        fontSize: "0.95rem",
        wordBreak: "break-word",
      }}
    >
      Uploaded: {resumeFilename}
    </Typography>

    <Box
      onClick={() => {
        setResumeFile(null);
        setResumeFilename("");

        setCandidate({
          full_name: "",
          email: "",
          phone: "",
          experience: "",
          skills: "",
          summary: "",
        });

        const input = document.getElementById("resume-upload");
        if (input) input.value = "";
      }}
      sx={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        bgcolor: "#fff",
        border: "1px solid #D0D5DD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontWeight: 700,
        color: "#667085",
        transition: "0.2s ease",
        "&:hover": {
          bgcolor: "#FEE4E2",
          color: "#D92D20",
          borderColor: "#F97066",
        },
      }}
    >
      ✕
    </Box>
  </Box>
)}
</Box>
        <Box
          sx={{
            mt: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
          }}
        >
          <Box>
            <FieldLabel>Full Name</FieldLabel>
            <AppInput
              value={candidate.full_name}
              onChange={(e) => handleChange("full_name", e.target.value)}
            />
          </Box>

          <Box>
            <FieldLabel>Email</FieldLabel>
            <AppInput
              value={candidate.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Box>

          <Box>
            <FieldLabel>Phone</FieldLabel>
            <AppInput
              value={candidate.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </Box>

          <Box>
            <FieldLabel>Experience</FieldLabel>
            <AppInput
              value={candidate.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <FieldLabel>Skills</FieldLabel>
          <AppInput
            value={candidate.skills}
            onChange={(e) => handleChange("skills", e.target.value)}
            placeholder="React, Python, SQL"
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <FieldLabel>Candidate Summary</FieldLabel>
          <Box
            component="textarea"
            value={candidate.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
            sx={{
              width: "100%",
              minHeight: 180,
              border: "1px solid #E7EBF3",
              borderRadius: "22px",
              bgcolor: "#fff",
              p: 3,
              color: "#7B8598",
              fontSize: "1rem",
              lineHeight: 1.7,
              outline: "none",
              resize: "vertical",
              fontFamily: "inherit",
            }}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <AppButton
            onClick={submitCandidate}
            disabled={saving}
            sx={{
              minWidth: 180,
              height: 56,
              borderRadius: "18px",
              fontWeight: 700,
            }}
          >
            {saving ? "Saving..." : "Save Candidate"}
          </AppButton>
        </Box>
      </AppCard>
    </AppShell>
  );
}
