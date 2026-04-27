import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppShell from "../components/layout/AppShell";
import AppCard from "../components/ui/AppCard";
import AppButton from "../components/ui/AppButton";
import AppBadge from "../components/ui/AppBadge";

function CandidateTile({ candidate }) {
  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #E7EBF3",
        borderRadius: "22px",
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#182033" }}>
            {candidate.full_name}
          </Typography>
          <Typography sx={{ mt: 0.6, color: "#7B8598" }}>
            {candidate.email} • {candidate.phone}
          </Typography>
          <Typography sx={{ mt: 0.6, color: "#7B8598" }}>
            Experience: {candidate.experience || "-"}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <AppBadge label={`ATS ${candidate.ats_score || 0}%`} color="default" />
          <AppBadge label={`Match ${candidate.match_score || 0}%`} color="default" />
          <AppBadge
            label={candidate.recommendation || "Suitable"}
            color="default"
          />
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography sx={{ color: "#6F7B91", fontWeight: 700, mb: 1 }}>
          Skills
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {(candidate.skills || []).map((skill, idx) => (
            <AppBadge key={idx} label={skill} color="default" />
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography sx={{ color: "#6F7B91", fontWeight: 700, mb: 1 }}>
          Resume
        </Typography>
        <Typography sx={{ color: "#7B8598" }}>
          {candidate.resume_filename || "No file uploaded"}
        </Typography>
      </Box>

      {candidate.summary && (
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ color: "#6F7B91", fontWeight: 700, mb: 1 }}>
            Summary
          </Typography>
          <Typography sx={{ color: "#7B8598", lineHeight: 1.7 }}>
            {candidate.summary}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default function CandidateListPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCandidates = async () => {
    try {
      const [jobRes, candidatesRes] = await Promise.all([
        fetch(`http://localhost:5000/api/jobs/${jobId}`),
        fetch(`http://localhost:5000/api/jobs/${jobId}/candidates`),
      ]);

      const jobData = await jobRes.json();
      const candidateData = await candidatesRes.json();

      setJob(jobData);
      setCandidates(candidateData || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, [jobId]);

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
            Jobs / Candidates
          </Typography>

          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#182033",
            }}
          >
            Candidates
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: "#7B8598",
              fontSize: "1.1rem",
            }}
          >
            {job ? `Profiles matched for ${job.title}` : "Loading job..."}
          </Typography>
        </Box>

        <AppButton
          sx={{
            minWidth: 180,
            height: 58,
            borderRadius: "18px",
            fontWeight: 700,
          }}
          onClick={() => navigate(`/addcandidate`)}
        >
          Add Candidate
        </AppButton>
      </Box>

      {loading ? (
        <AppCard sx={{ p: 4 }}>
          <Typography>Loading candidates...</Typography>
        </AppCard>
      ) : candidates.length === 0 ? (
        <AppCard sx={{ p: 5, textAlign: "center" }}>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#182033" }}>
            No Candidates Yet
          </Typography>
          <Typography sx={{ mt: 1.2, color: "#7B8598" }}>
            Add candidate profiles for this job. Uploaded resumes can be parsed automatically.
          </Typography>

          <AppButton
            sx={{
              mt: 3,
              minWidth: 180,
              height: 56,
              borderRadius: "18px",
              fontWeight: 700,
            }}
            onClick={() => navigate(`/addcandidate`)}
          >
            Add Candidate
          </AppButton>
        </AppCard>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {candidates.map((candidate) => (
            <CandidateTile key={candidate.id} candidate={candidate} />
          ))}
        </Box>
      )}
    </AppShell>
  );
}