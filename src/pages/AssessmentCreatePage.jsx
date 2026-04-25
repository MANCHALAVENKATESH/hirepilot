import { Box, Typography } from '@mui/material'
import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppBadge from '../components/ui/AppBadge'
import AppInput from '../components/ui/AppInput'
import AppButton from '../components/ui/AppButton'

function SectionTitle({ title }) {
  return (
    <Typography
      sx={{
        fontSize: '1.75rem',
        fontWeight: 700,
        color: '#182033',
      }}
    >
      {title}
    </Typography>
  )
}

function FieldLabel({ children }) {
  return (
    <Typography
      sx={{
        mb: 1.1,
        fontSize: '0.98rem',
        fontWeight: 700,
        color: '#6F7B91',
      }}
    >
      {children}
    </Typography>
  )
}

function SegButton({ label, active = false }) {
  return (
    <Box
      sx={{
        height: 54,
        minWidth: 160,
        px: 3,
        borderRadius: '18px',
        border: '1px solid',
        borderColor: active ? 'transparent' : '#E7EBF3',
        bgcolor: active ? '#EEF2FF' : '#fff',
        color: active ? '#5B4CF0' : '#6F7B91',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: active ? 700 : 500,
        fontSize: '1rem',
      }}
    >
      {label}
    </Box>
  )
}

function SummaryBlock({ title, children }) {
  return (
    <Box
      sx={{
        p: 2.8,
        border: '1px solid #E7EBF3',
        borderRadius: '22px',
        bgcolor: '#F8FAFD',
      }}
    >
      <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1.05rem' }}>
        {title}
      </Typography>
      {children}
    </Box>
  )
}

export default function AssessmentCreatePage() {
  return (
    <AppShell>
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 3,
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Typography
            sx={{
              color: '#98A2B3',
              fontSize: '0.95rem',
              mb: 1,
            }}
          >
            Assessments / Create
          </Typography>

          <Typography
            sx={{
              fontSize: '3rem',
              fontWeight: 700,
              lineHeight: 1.08,
              color: '#182033',
            }}
          >
            Create Assessment
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: '#7B8598',
              fontSize: '1.1rem',
            }}
          >
            Build a technical evaluation for shortlisted candidates.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <AppButton
            variant="outlined"
            sx={{
              minWidth: 142,
              height: 58,
              borderRadius: '18px',
              fontWeight: 700,
            }}
          >
            Preview
          </AppButton>

          <AppButton
            sx={{
              minWidth: 160,
              height: 58,
              borderRadius: '18px',
              fontWeight: 700,
            }}
          >
            Publish
          </AppButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            xl: '1.8fr 0.6fr',
          },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <AppCard sx={{ p: 4 }}>
          <SectionTitle title="Basics" />

          <Box
            sx={{
              mt: 3,
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '1fr 1fr',
              },
              gap: 3,
            }}
          >
            <Box>
              <FieldLabel>Assessment Name</FieldLabel>
              <AppInput defaultValue="Frontend Technical Screen" />
            </Box>

            <Box>
              <FieldLabel>Role</FieldLabel>
              <AppInput defaultValue="Senior Frontend Engineer" />
            </Box>

            <Box>
              <FieldLabel>Difficulty</FieldLabel>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                <SegButton label="Easy" />
                <SegButton label="Medium" active />
                <SegButton label="Hard" />
              </Box>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: '1fr 1fr',
                },
                gap: 3,
              }}
            >
              <Box>
                <FieldLabel>Duration</FieldLabel>
                <AppInput defaultValue="60 minutes" />
              </Box>

              <Box>
                <FieldLabel>Questions</FieldLabel>
                <AppInput defaultValue="5 total" />
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 5, borderTop: '1px solid #EEF1F6' }} />

          <Box sx={{ mt: 4 }}>
            <SectionTitle title="Question Setup" />
          </Box>

          <Box sx={{ mt: 3 }}>
            <FieldLabel>Question Types</FieldLabel>
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              <SegButton label="Coding" active />
              <SegButton label="MCQ" />
              <SegButton label="Subjective" />
            </Box>
          </Box>

          <Box
            sx={{
              mt: 4,
              border: '1px solid #E7EBF3',
              borderRadius: '24px',
              bgcolor: '#F8FAFD',
              p: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#182033',
                }}
              >
                AI Question Generation
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: '#7B8598',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                }}
              >
                Generate coding questions, explanation prompts, and expected
                evaluation criteria from the job description.
              </Typography>
            </Box>

            <AppButton
              sx={{
                minWidth: 220,
                height: 52,
                borderRadius: '18px',
                fontWeight: 700,
              }}
            >
              Generate with AI
            </AppButton>
          </Box>

          <Box
            sx={{
              mt: 4,
              border: '1px solid #E7EBF3',
              borderRadius: '24px',
              bgcolor: '#fff',
              p: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#182033',
                }}
              >
                Question 1 — Coding Problem
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: '#7B8598',
                  fontSize: '1rem',
                }}
              >
                Build a function to detect duplicate candidate entries efficiently.
              </Typography>
            </Box>

            <AppButton
              variant="outlined"
              sx={{
                minWidth: 118,
                height: 46,
                minHeight: 46,
                borderRadius: '999px',
                fontWeight: 700,
              }}
            >
              Edit
            </AppButton>
          </Box>

          <Box
            sx={{
              mt: 3,
              border: '1px dashed #D9DFEA',
              borderRadius: '24px',
              bgcolor: '#fff',
              px: 3,
              py: 4,
              color: '#7B8598',
              fontSize: '1rem',
            }}
          >
            + Add another question
          </Box>

          <Box sx={{ mt: 5, borderTop: '1px solid #EEF1F6' }} />

          <Box sx={{ mt: 4 }}>
            <SectionTitle title="Proctoring & Rules" />
          </Box>
        </AppCard>

        <AppCard sx={{ p: 4 }}>
          <Typography
            sx={{
              fontSize: '1.65rem',
              fontWeight: 700,
              color: '#182033',
            }}
          >
            Assessment Summary
          </Typography>

          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <SummaryBlock title="Configured For">
              <Typography
                sx={{
                  mt: 1.5,
                  fontWeight: 700,
                  color: '#182033',
                  fontSize: '1.45rem',
                  lineHeight: 1.3,
                }}
              >
                Senior Frontend Engineer
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: '#7B8598',
                  fontSize: '0.98rem',
                }}
              >
                Medium difficulty • 60 mins • 5 questions
              </Typography>
            </SummaryBlock>

            <SummaryBlock title="Delivery">
              <Typography
                sx={{
                  mt: 1.2,
                  color: '#7B8598',
                  fontSize: '0.98rem',
                }}
              >
                Send after shortlist approval
              </Typography>

              <Box sx={{ mt: 1.6 }}>
                <AppBadge label="Auto-send" color="success" />
              </Box>
            </SummaryBlock>

            <SummaryBlock title="Integrity Settings">
              <Box
                component="ul"
                sx={{
                  mt: 2,
                  mb: 0,
                  pl: 2.5,
                  color: '#4B5565',
                  '& li': {
                    mb: 1.2,
                    fontSize: '0.98rem',
                  },
                }}
              >
                <li>Webcam monitoring</li>
                <li>Tab switch detection</li>
                <li>Copy/paste blocking</li>
                <li>Multiple face detection</li>
              </Box>
            </SummaryBlock>
          </Box>

          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <AppButton
              sx={{
                height: 58,
                borderRadius: '18px',
                fontWeight: 700,
              }}
            >
              Publish
            </AppButton>

            <AppButton
              variant="outlined"
              sx={{
                height: 58,
                borderRadius: '18px',
                fontWeight: 700,
              }}
            >
              Save Draft
            </AppButton>
          </Box>

          <Box
            sx={{
              mt: 4,
              p: 2.8,
              border: '1px solid #E7EBF3',
              borderRadius: '22px',
              bgcolor: '#F8FAFD',
            }}
          >
            <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1.05rem' }}>
              Guidance
            </Typography>

            <Typography
              sx={{
                mt: 1.3,
                color: '#7B8598',
                fontSize: '0.98rem',
                lineHeight: 1.6,
              }}
            >
              Keep question count low for better completion rates.
            </Typography>
          </Box>
        </AppCard>
      </Box>
    </AppShell>
  )
}