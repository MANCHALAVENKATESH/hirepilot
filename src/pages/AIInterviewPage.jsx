import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideocamIcon from "@mui/icons-material/Videocam";
import GppGoodIcon from "@mui/icons-material/GppGood";
import { useEffect, useMemo, useRef, useState } from "react";

export default function NonTechnicalAIInterviewPage() {
  const videoRef = useRef(null);
  const recognitionRef = useRef(null);

  const [interviewStarted, setInterviewStarted] = useState(false);
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [listening, setListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [responses, setResponses] = useState([]);
  const [violations, setViolations] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [interviewFinished, setInterviewFinished] = useState(false);

  const questions = useMemo(
    () => [
      "Tell me about yourself.",
      "Why do you want to work with our company?",
      "Describe a situation where you handled a conflict in a team.",
      "How do you manage pressure and deadlines?",
      "What is one of your strengths and one weakness you are improving?",
    ],
    []
  );

  const aiImage =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => (t <= 0 ? 0 : t - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      finishInterview();
    }
  }, [timeLeft]);

  useEffect(() => {
    let stream;
    navigator.mediaDevices
      ?.getUserMedia({ video: true, audio: true })
      .then((s) => {
        stream = s;
        if (videoRef.current) videoRef.current.srcObject = s;
      })
      .catch(() => console.log("Camera/mic blocked"));

    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    const handleBlur = () => setViolations((v) => v + 1);
    const handleVisibility = () => {
      if (document.hidden) setViolations((v) => v + 1);
    };

    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSpeechSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + " ";
      }
      setCurrentAnswer(transcript.trim());
    };

    recognitionRef.current = recognition;
  }, []);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const speakText = (text, callback) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;

    utterance.onstart = () => setAiSpeaking(true);
    utterance.onend = () => {
      setAiSpeaking(false);
      if (callback) callback();
    };

    window.speechSynthesis.speak(utterance);
  };

  const startInterview = () => {
    setInterviewStarted(true);
    speakText(
      `Welcome to your non technical interview. Let's begin. First question. ${questions[0]}`
    );
  };

  const startListening = () => {
    if (!recognitionRef.current) return;
    setCurrentAnswer("");
    recognitionRef.current.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  const nextQuestion = () => {
    const updatedResponses = [
      ...responses,
      {
        question: questions[currentIndex],
        answer: currentAnswer,
      },
    ];
    setResponses(updatedResponses);
    setCurrentAnswer("");

    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      speakText(`Next question. ${questions[nextIndex]}`);
    } else {
      finishInterview(updatedResponses);
    }
  };

  const finishInterview = (finalResponses = responses) => {
    if (!interviewFinished) {
      if (currentAnswer.trim() && finalResponses.length < questions.length) {
        finalResponses = [
          ...finalResponses,
          {
            question: questions[currentIndex],
            answer: currentAnswer,
          },
        ];
        setResponses(finalResponses);
      }
      setInterviewFinished(true);
      setListening(false);
      recognitionRef.current?.stop();
      speakText("Thank you. Your interview is now complete.");
    }
  };

  const progress =
    (responses.length / questions.length) * 100 +
    (currentAnswer.trim() ? 5 : 0);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F4F7FB", p: 2 }}>
      {/* HEADER */}
      <Paper
        sx={{
          p: 2,
          mb: 2,
          borderRadius: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(90deg, #ffffff 0%, #f7f8ff 100%)",
        }}
      >
        <Box>
          <Typography fontWeight={800} fontSize="1.7rem">
            AI Non-Technical Interview
          </Typography>
          <Typography color="gray">
            AI asks questions • Candidate responds by speaking
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Chip
            icon={<AccessTimeIcon />}
            label={`Time Left: ${formatTime(timeLeft)}`}
            sx={{
              fontWeight: 700,
              bgcolor: "#ede9fe",
              color: "#5b21b6",
              px: 1,
            }}
          />
          <Chip
            label={interviewFinished ? "Completed" : "In Progress"}
            color={interviewFinished ? "success" : "primary"}
          />
        </Box>
      </Paper>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1.6fr 0.9fr",
          gap: 2,
        }}
      >
        {/* LEFT: AI INTERVIEW PANEL */}
        <Paper
          sx={{
            p: 3,
            borderRadius: 4,
            minHeight: "82vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography fontWeight={800} fontSize="1.25rem">
              AI Interviewer
            </Typography>
            <Typography color="gray" mt={0.5}>
              Listen to the question carefully and answer clearly using your microphone.
            </Typography>

            <Box
              sx={{
                mt: 3,
                p: 3,
                borderRadius: 4,
                bgcolor: "#f8fafc",
                border: "1px solid #e5e7eb",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  mb: 2,
                }}
              >
                <Avatar
                  src={aiImage}
                  alt="AI Interviewer"
                  sx={{
                    width: 180,
                    height: 180,
                    border: "6px solid #e9d5ff",
                    boxShadow: aiSpeaking
                      ? "0 0 0 16px rgba(124,58,237,0.12)"
                      : "0 12px 28px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    right: 8,
                    bottom: 8,
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    bgcolor: aiSpeaking ? "#22c55e" : "#94a3b8",
                    border: "3px solid white",
                  }}
                />
              </Box>

              <Typography fontWeight={700} fontSize="1.15rem">
                Emma • AI Interviewer
              </Typography>
              <Typography color="gray" mt={0.5}>
                {aiSpeaking
                  ? "AI is asking the question..."
                  : listening
                  ? "Listening to your answer..."
                  : "Ready for your response"}
              </Typography>

              {!interviewStarted ? (
                <Button
                  variant="contained"
                  startIcon={<PlayArrowIcon />}
                  sx={{
                    mt: 3,
                    bgcolor: "#5B4CF0",
                    px: 4,
                    py: 1.2,
                    borderRadius: 3,
                    fontWeight: 700,
                  }}
                  onClick={startInterview}
                >
                  Start Interview
                </Button>
              ) : (
                <Box
                  mt={3}
                  display="flex"
                  gap={1.5}
                  flexWrap="wrap"
                  justifyContent="center"
                >
                  <Button
                    variant="outlined"
                    startIcon={<VolumeUpIcon />}
                    onClick={() => speakText(questions[currentIndex])}
                    disabled={aiSpeaking || interviewFinished}
                    sx={{ borderRadius: 3 }}
                  >
                    Replay Question
                  </Button>

                  <Button
                    variant="contained"
                    startIcon={<MicIcon />}
                    onClick={startListening}
                    disabled={!speechSupported || listening || interviewFinished}
                    sx={{ bgcolor: "#16a34a", borderRadius: 3 }}
                  >
                    Start Answer
                  </Button>

                  <Button
                    variant="contained"
                    startIcon={<StopIcon />}
                    onClick={stopListening}
                    disabled={!listening || interviewFinished}
                    sx={{ bgcolor: "#dc2626", borderRadius: 3 }}
                  >
                    Stop
                  </Button>
                </Box>
              )}
            </Box>

            {!speechSupported && (
              <Alert severity="warning" sx={{ mt: 2 }}>
                Speech recognition is not supported in this browser. Please use Chrome.
              </Alert>
            )}

            <Box mt={3}>
              <Typography fontWeight={700} mb={1}>
                Your Answer Transcript
              </Typography>
              <TextField
                multiline
                minRows={8}
                fullWidth
                placeholder="Your spoken answer will appear here..."
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                disabled={interviewFinished}
              />
            </Box>
          </Box>

          <Box mt={3}>
            <Button
              fullWidth
              variant="contained"
              onClick={nextQuestion}
              disabled={!interviewStarted || !currentAnswer.trim() || interviewFinished}
              sx={{
                bgcolor: "#5B4CF0",
                py: 1.4,
                borderRadius: 3,
                fontWeight: 700,
              }}
            >
              {currentIndex < questions.length - 1
                ? "Save Answer & Next Question"
                : "Finish Interview"}
            </Button>
          </Box>
        </Paper>

        {/* RIGHT: QUESTION + INFO PANEL */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Paper sx={{ p: 3, borderRadius: 4 }}>
            <Typography fontWeight={800}>Current Question</Typography>
            <Card
              sx={{
                mt: 2,
                borderRadius: 3,
                bgcolor: "#f8fafc",
                border: "1px solid #e5e7eb",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Chip
                  label={`Question ${currentIndex + 1} of ${questions.length}`}
                  color="primary"
                  size="small"
                />
                <Typography mt={2} fontWeight={700} fontSize="1.1rem">
                  {questions[currentIndex]}
                </Typography>
              </CardContent>
            </Card>

            <Typography mt={3} fontWeight={700}>
              Progress
            </Typography>
            <LinearProgress
              variant="determinate"
              value={Math.min(progress, 100)}
              sx={{ mt: 1.5, height: 10, borderRadius: 999 }}
            />
            <Typography mt={1} color="gray" fontSize="0.92rem">
              {responses.length} answered out of {questions.length}
            </Typography>
          </Paper>

          <Paper sx={{ p: 3, borderRadius: 4 }}>
            <Typography fontWeight={800}>Interview Instructions</Typography>
            <Box mt={2} color="gray" fontSize="0.95rem" lineHeight={1.8}>
              • Listen carefully to each question. <br />
              • Answer clearly and confidently. <br />
              • Keep your response relevant and concise. <br />
              • Use the microphone buttons to start and stop recording. <br />
              • You may replay the current question if needed.
            </Box>
          </Paper>

          <Paper sx={{ p: 3, borderRadius: 4 }}>
            <Typography fontWeight={800}>Live Proctoring</Typography>

            <Box
              sx={{
                mt: 2,
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "#e5e7eb",
              }}
            >
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>

            <Box mt={2} display="flex" flexDirection="column" gap={1}>
              <Chip
                icon={<VideocamIcon />}
                label="Camera Active"
                color="success"
                variant="outlined"
              />
              <Chip
                icon={<GppGoodIcon />}
                label={`Tab Switches: ${violations}`}
                color={violations > 2 ? "warning" : "default"}
                variant="outlined"
              />
            </Box>
          </Paper>

          {interviewFinished && (
            <Alert severity="success" sx={{ borderRadius: 3 }}>
              Interview completed successfully.
            </Alert>
          )}
        </Box>
      </Box>
    </Box>
  );
}