import {
  Avatar,
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useMemo, useRef, useState } from "react";
import Editor from "@monaco-editor/react";

export default function AssessmentPlayerPage() {
  const videoRef = useRef(null);
  const recognitionRef = useRef(null);

  const [startOpen, setStartOpen] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);

  const [code, setCode] = useState(`def solve(arr):
    seen = set()
    dupes = set()
    for x in arr:
        if x in seen:
            dupes.add(x)
        else:
            seen.add(x)
    return sorted(list(dupes))
`);

  const [approach, setApproach] = useState("");
  const [approachFeedback, setApproachFeedback] = useState("");
  const [approachApproved, setApproachApproved] = useState(false);
  const [checkingApproach, setCheckingApproach] = useState(false);

  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [listening, setListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);

  const [matchFeedback, setMatchFeedback] = useState("");
  const [matchScore, setMatchScore] = useState(null);
  const [checkingMatch, setCheckingMatch] = useState(false);

  const [output, setOutput] = useState("");
  const [score, setScore] = useState(0);
  const [violations, setViolations] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60);

  const [pyodide, setPyodide] = useState(null);
  const [engineLoading, setEngineLoading] = useState(true);
  const [engineError, setEngineError] = useState("");
  const [running, setRunning] = useState(false);

  const [testResults, setTestResults] = useState([]);

  const testCases = useMemo(
    () => [
      { input: [1, 2, 2, 4], expected: [2] },
      { input: [5, 5, 5], expected: [5] },
      { input: [1, 2, 3], expected: [] },
      { input: [9, 1, 9, 2, 3, 2], expected: [2, 9] },
    ],
    []
  );

  const problem = `
Find Duplicate Numbers

Given an array of integers, return the duplicate values from the array.
Each duplicate value should appear only once in the output.
`;

  const aiIntro =
    "Welcome to the technical assessment. Please explain your approach to solve the duplicate numbers problem before you begin coding.";

  // ---------------- TIMER ----------------
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 0) return 0;
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;
  };

  // ---------------- PYODIDE ----------------
  useEffect(() => {
    let cancelled = false;

    const loadEngine = async () => {
      try {
        setEngineLoading(true);
        setEngineError("");

        if (!window.loadPyodide) {
          const script = document.createElement("script");
          script.src =
            "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
          script.async = true;
          document.body.appendChild(script);

          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
          });
        }

        const py = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",
        });

        if (!cancelled) {
          setPyodide(py);
          setEngineLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setEngineError("Failed to load Python engine.");
          setEngineLoading(false);
        }
      }
    };

    loadEngine();
    return () => {
      cancelled = true;
    };
  }, []);

  // ---------------- CAMERA ----------------
  useEffect(() => {
    let stream;
    navigator.mediaDevices
      ?.getUserMedia({ video: true, audio: true })
      .then((s) => {
        stream = s;
        if (videoRef.current) {
          videoRef.current.srcObject = s;
        }
      })
      .catch(() => console.log("Camera/mic blocked"));

    return () => {
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  // ---------------- ANTI-CHEAT ----------------
  useEffect(() => {
    const handleBlur = () => setViolations((v) => v + 1);
    const handleCopy = (e) => {
      e.preventDefault();
      setViolations((v) => v + 1);
    };
    const handleVisibility = () => {
      if (document.hidden) setViolations((v) => v + 1);
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("copy", handleCopy);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("copy", handleCopy);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // ---------------- SPEECH SUPPORT ----------------
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
      setApproach(transcript.trim());
    };

    recognitionRef.current = recognition;
  }, []);

  // ---------------- SPEAK AI ----------------
  const speakText = (text) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.onstart = () => setAiSpeaking(true);
    utterance.onend = () => setAiSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const startInterviewFlow = () => {
    setStartOpen(true);
    setInterviewStarted(true);
    setTimeout(() => {
      speakText(aiIntro);
    }, 400);
  };

  const startListening = () => {
    if (!recognitionRef.current) return;
    setApproach("");
    recognitionRef.current.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
  };

  // ---------------- SIMPLE JSON SCORE PARSER ----------------
  const extractScoreFromResult = (result) => {
    try {
      const cleaned = result
        ?.replace(/```json/g, "")
        ?.replace(/```/g, "")
        ?.trim();

      const parsed = JSON.parse(cleaned || "{}");
      return Number(parsed.score || 0);
    } catch {
      return 0;
    }
  };

  // ---------------- HELPERS ----------------
  const normalizeArray = (arr) => {
    if (!Array.isArray(arr)) return arr;
    return [...arr].sort((a, b) => a - b);
  };

  const arraysEqual = (a, b) =>
    JSON.stringify(normalizeArray(a)) === JSON.stringify(normalizeArray(b));

  // ---------------- AI APPROACH CHECK ----------------
  const checkApproachWithAI = async () => {
    if (!approach.trim()) return;

    setCheckingApproach(true);
    setApproachFeedback("");

    try {
      const res = await fetch("http://localhost:5000/api/evaluate-approach", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problem,
          testCases,
          approach,
        }),
      });

      const data = await res.json();
      const aiScore = extractScoreFromResult(data.result);

      if (aiScore > 6) {
        setApproachApproved(true);
        setApproachFeedback(`Approved. Score: ${aiScore}/10`);
        speakText("Your approach is approved. You can now start coding.");
        setTimeout(() => setStartOpen(false), 1000);
      } else {
        setApproachApproved(false);
        setApproachFeedback(`Not approved. Score: ${aiScore}/10`);
        speakText("Your approach needs improvement. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setApproachApproved(false);
      setApproachFeedback("Failed to evaluate approach.");
    } finally {
      setCheckingApproach(false);
    }
  };

  // ---------------- AI MATCH CHECK ----------------
  const checkApproachCodeMatch = async () => {
    setCheckingMatch(true);
    setMatchFeedback("");

    try {
      const res = await fetch("http://localhost:5000/api/evaluate-code-match", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problem,
          testCases,
          approach,
          code,
        }),
      });

      const data = await res.json();

      const cleaned = data.result
        ?.replace(/```json/g, "")
        ?.replace(/```/g, "")
        ?.trim();

      const parsed = JSON.parse(cleaned || "{}");

      setMatchScore(parsed.matchScore ?? 0);
      setMatchFeedback(parsed.feedback || "No feedback available.");
    } catch (err) {
      console.error(err);
      setMatchFeedback("Failed to evaluate approach/code consistency.");
      setMatchScore(null);
    } finally {
      setCheckingMatch(false);
    }
  };

  // ---------------- PYTHON EXECUTION ----------------
  const executePythonSolve = async (arr) => {
    if (!pyodide) throw new Error("Python engine not loaded");

    const arrJson = JSON.stringify(arr);

    const wrappedCode = `
import json

${code}

if "solve" not in globals():
    raise Exception("Function 'solve(arr)' is not defined")

_result = solve(json.loads('''${arrJson}'''))
print(json.dumps(_result))
`;

    let stdout = [];
    pyodide.setStdout({
      batched: (msg) => stdout.push(msg),
    });

    pyodide.setStderr({
      batched: (msg) => stdout.push(msg),
    });

    await pyodide.runPythonAsync(wrappedCode);

    const text = stdout.join("\n").trim();

    try {
      return JSON.parse(text.split("\n").pop());
    } catch {
      throw new Error(`Non-JSON output from solve(arr): ${text}`);
    }
  };

  // ---------------- RUN TESTS ----------------
  const runTests = async () => {
    if (!approachApproved) {
      setOutput("Please complete the spoken AI interview first.");
      return;
    }

    if (!pyodide || engineLoading || running) return;

    setRunning(true);
    setOutput("Running tests...\n");
    setTestResults([]);

    try {
      let passCount = 0;
      let resultText = "Running tests...\n\n";
      const results = [];

      for (let i = 0; i < testCases.length; i++) {
        const test = testCases[i];

        try {
          const actual = await executePythonSolve(test.input);
          const passed = arraysEqual(actual, test.expected);

          if (passed) passCount++;

          results.push({
            id: i + 1,
            input: test.input,
            expected: test.expected,
            actual,
            passed,
            error: "",
          });

          resultText += `Test ${i + 1}: ${passed ? "PASSED" : "FAILED"}\n`;
          resultText += `Expected: ${JSON.stringify(test.expected)}\n`;
          resultText += `Actual: ${JSON.stringify(actual)}\n\n`;
        } catch (err) {
          results.push({
            id: i + 1,
            input: test.input,
            expected: test.expected,
            actual: null,
            passed: false,
            error: err.message || "Runtime error",
          });

          resultText += `Test ${i + 1}: FAILED\n`;
          resultText += `Expected: ${JSON.stringify(test.expected)}\n`;
          resultText += `Actual: Runtime Error\n`;
          resultText += `Error: ${err.message || "Runtime error"}\n\n`;
        }
      }

      const finalScore = Math.round((passCount / testCases.length) * 100);
      setScore(finalScore);
      setTestResults(results);
      setOutput(resultText + `Score: ${finalScore}%`);

      await checkApproachCodeMatch();
    } catch (err) {
      setOutput(`Error running tests\n${err.message || ""}`);
    } finally {
      setRunning(false);
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F5F7FB", p: 2 }}>
      <Paper
        sx={{
          p: 2,
          mb: 2,
          borderRadius: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography fontWeight={700} fontSize="1.6rem">
            Technical Assessment
          </Typography>
          <Typography color="gray">
            Voice-first AI interview + IDE evaluation
          </Typography>
        </Box>

        <Box sx={{ textAlign: "right" }}>
          <Typography fontWeight={700} color="#5B4CF0">
            ⏱ {formatTime(timeLeft)}
          </Typography>
          <Typography color="gray">Score: {score}%</Typography>
        </Box>
      </Paper>

      {!interviewStarted && (
        <Paper
          sx={{
            mb: 2,
            p: 3,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography fontWeight={700} fontSize="1.2rem">
            Start AI Interview
          </Typography>
          <Typography color="gray" mt={1}>
            Click start to open the AI avatar modal. You will explain your
            approach by speaking.
          </Typography>

          <Button
            variant="contained"
            startIcon={<PlayArrowIcon />}
            sx={{ mt: 2, bgcolor: "#5B4CF0" }}
            onClick={startInterviewFlow}
          >
            Start
          </Button>
        </Paper>
      )}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "360px 1fr 320px",
          gap: 2,
        }}
      >
        {/* LEFT */}
        <Paper sx={{ p: 3, borderRadius: 3 }}>
          <Typography fontWeight={700}>Problem</Typography>

          <Typography mt={2} fontWeight={600}>
            Find Duplicate Numbers
          </Typography>

          <Typography mt={1.5} color="gray">
            Return duplicate values from array in O(n). Each duplicate appears
            only once.
          </Typography>

          <Typography mt={3} fontWeight={700}>
            Test Cases
          </Typography>

          {testCases.map((t, i) => (
            <Box
              key={i}
              sx={{
                mt: 1.5,
                p: 2,
                borderRadius: 2,
                bgcolor: "#F8FAFD",
                border: "1px solid #E7EBF3",
              }}
            >
              <Typography>Input: {JSON.stringify(t.input)}</Typography>
              <Typography color="green">
                Expected: {JSON.stringify(t.expected)}
              </Typography>
            </Box>
          ))}
        </Paper>

        {/* CENTER */}
        <Paper sx={{ overflow: "hidden", borderRadius: 2 }}>
          <Box
            sx={{
              px: 2,
              py: 1.2,
              bgcolor: "#111827",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography fontWeight={600}>Python IDE</Typography>
            <Chip
              size="small"
              label={
                engineLoading
                  ? "Loading engine"
                  : engineError
                  ? "Engine failed"
                  : "Engine ready"
              }
              color={
                engineLoading ? "warning" : engineError ? "error" : "success"
              }
            />
          </Box>

          <Box
            sx={{ bgcolor: "#0f172a", opacity: approachApproved ? 1 : 0.45 }}
          >
            <Editor
              height="500px"
              language="python"
              theme="vs-dark"
              value={code}
              onChange={(v) => approachApproved && setCode(v || "")}
              options={{
                fontSize: 15,
                minimap: { enabled: false },
                wordWrap: "on",
                readOnly: !approachApproved,
              }}
            />
          </Box>

          <Box sx={{ p: 2 }}>
            {!approachApproved && (
              <Alert severity="info" sx={{ mb: 2 }}>
                Complete the AI voice interview first to unlock the editor.
              </Alert>
            )}

            <Button
              variant="contained"
              onClick={runTests}
              disabled={
                !approachApproved || engineLoading || !!engineError || running
              }
              sx={{ bgcolor: "#5B4CF0" }}
            >
              {running ? "Running..." : "Run Tests"}
            </Button>

            <Box
              sx={{
                mt: 2,
                p: 2,
                bgcolor: "#0f172a",
                color: "#22c55e",
                borderRadius: 2,
                minHeight: 140,
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
              }}
            >
              {output || "Console output will appear here..."}
            </Box>

            {testResults.length > 0 && (
              <Box mt={2}>
                <Typography fontWeight={700} mb={1}>
                  Detailed Results
                </Typography>

                {testResults.map((r) => (
                  <Paper key={r.id} sx={{ p: 2, mb: 1.5, borderRadius: 2 }}>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography fontWeight={700}>Test {r.id}</Typography>
                      <Chip
                        size="small"
                        label={r.passed ? "PASSED" : "FAILED"}
                        color={r.passed ? "success" : "error"}
                      />
                    </Box>

                    <Typography>
                      <strong>Input:</strong> {JSON.stringify(r.input)}
                    </Typography>
                    <Typography color="green">
                      <strong>Expected Output:</strong>{" "}
                      {JSON.stringify(r.expected)}
                    </Typography>
                    <Typography color="#1d4ed8">
                      <strong>Actual Output:</strong>{" "}
                      {r.actual !== null
                        ? JSON.stringify(r.actual)
                        : "Runtime Error"}
                    </Typography>

                    {r.error && (
                      <Typography color="error">
                        <strong>Error:</strong> {r.error}
                      </Typography>
                    )}
                  </Paper>
                ))}
              </Box>
            )}

            {matchFeedback && (
              <Alert
                severity={matchScore >= 70 ? "success" : "warning"}
                sx={{ mt: 2 }}
              >
                <Typography fontWeight={700}>
                  Approach vs Code Match: {matchScore ?? 0}%
                </Typography>
                <Typography>{matchFeedback}</Typography>
              </Alert>
            )}
          </Box>
        </Paper>

        {/* RIGHT */}
        <Paper sx={{ p: 2, borderRadius: 3 }}>
          <Typography fontWeight={700}>Live Proctoring</Typography>

          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: 10,
              marginTop: 10,
              background: "#ddd",
              minHeight: 180,
              objectFit: "cover",
            }}
          />

          <Box mt={2} color="gray" fontSize="0.92rem">
            ✔ Camera Active <br />
            ✔ Tab Switches: {violations} <br />
            ✔ Copy Disabled <br />
            ✔ Voice Interview Enabled
          </Box>
        </Paper>
      </Box>

      {/* MODAL */}
      <Dialog open={startOpen} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" alignItems="center" gap={1.5}>
            <Avatar sx={{ bgcolor: "#5B4CF0", width: 52, height: 52 }}>
              <SmartToyIcon />
            </Avatar>
            <Box>
              <Typography fontWeight={700}>AI Interviewer</Typography>
              <Typography variant="body2" color="gray">
                Please explain your approach by speaking
              </Typography>
            </Box>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
              sx={{
                width: 110,
                height: 110,
                bgcolor: aiSpeaking ? "#7C3AED" : "#5B4CF0",
                mb: 2,
              }}
            >
              <SmartToyIcon sx={{ fontSize: 58 }} />
            </Avatar>

            <Typography textAlign="center" fontWeight={700}>
              {aiSpeaking
                ? "AI is speaking..."
                : listening
                ? "Listening to your response..."
                : "Press the mic and explain your approach"}
            </Typography>

            <Typography mt={1} textAlign="center" color="gray">
              {aiIntro}
            </Typography>

            {!speechSupported && (
              <Alert severity="warning" sx={{ mt: 2, width: "100%" }}>
                Speech recognition is not supported in this browser. Please use
                Chrome.
              </Alert>
            )}

            <Box mt={3} display="flex" gap={1.5} flexWrap="wrap">
              <Button
                variant="outlined"
                onClick={() => speakText(aiIntro)}
                disabled={aiSpeaking}
              >
                Replay AI Prompt
              </Button>

              <Button
                variant="contained"
                startIcon={<MicIcon />}
                onClick={startListening}
                disabled={!speechSupported || listening}
                sx={{ bgcolor: "#16a34a" }}
              >
                Start Speaking
              </Button>

              <Button
                variant="contained"
                startIcon={<StopIcon />}
                onClick={stopListening}
                disabled={!listening}
                sx={{ bgcolor: "#dc2626" }}
              >
                Stop
              </Button>
            </Box>

            <TextField
              label="Detected Speech Transcript"
              multiline
              minRows={6}
              fullWidth
              value={approach}
              onChange={(e) => setApproach(e.target.value)}
              sx={{ mt: 3 }}
            />

            <Button
              fullWidth
              variant="contained"
              onClick={checkApproachWithAI}
              disabled={checkingApproach || !approach.trim()}
              sx={{ mt: 2, bgcolor: "#5B4CF0" }}
            >
              {checkingApproach ? "Checking..." : "Submit Approach to DeepSeek"}
            </Button>

            {checkingApproach && <CircularProgress size={24} sx={{ mt: 2 }} />}

            {approachFeedback && (
              <Alert
                severity={approachApproved ? "success" : "warning"}
                sx={{ mt: 2, width: "100%" }}
              >
                {approachFeedback}
              </Alert>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}