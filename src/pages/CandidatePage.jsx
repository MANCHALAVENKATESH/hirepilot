import { Box, Typography } from '@mui/material'
import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppBadge from '../components/ui/AppBadge'
import AppButton from '../components/ui/AppButton'
import SearchBar from '../components/ui/SearchBar'
import ProgressBar from '../components/ui/ProgressBar'


function TabPill({ label, active = false }) {
  return (
    <Box
      sx={{
        minWidth: 126,
        height: 46,
        px: 3,
        borderRadius: '999px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: active ? '#EEF2FF' : 'transparent',
        color: active ? '#5B4CF0' : '#7B8598',
        fontWeight: active ? 700 : 500,
        fontSize: '0.98rem',
      }}
    >
      {label}
    </Box>
  )
}

function InfoRow({ label, value, valueColor = '#182033' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 2,
      }}
    >
      <Typography sx={{ color: '#7B8598', fontSize: '0.98rem' }}>{label}</Typography>
      <Typography
        sx={{
          color: valueColor,
          fontSize: '1rem',
          fontWeight: 700,
          textAlign: 'right',
        }}
      >
        {value}
      </Typography>
    </Box>
  )
}

export default function CandidateDetailPage() {
  return (
    <AppShell>
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            color: '#98A2B3',
            fontSize: '0.95rem',
            mb: 1,
          }}
        >
          Candidates / Senior Frontend Engineer
        </Typography>

        <Typography
          sx={{
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: 1.08,
            color: '#182033',
          }}
        >
          Neha Kapoor
        </Typography>

        <Typography
          sx={{
            mt: 1.2,
            color: '#7B8598',
            fontSize: '1.1rem',
          }}
        >
          Senior Frontend Engineer applicant • Bangalore • 4 years experience
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            xl: '1.85fr 0.55fr',
          },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AppCard
            sx={{
              px: 4,
              py: 3.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 3,
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              <Box
                sx={{
                  width: 68,
                  height: 68,
                  borderRadius: '999px',
                  bgcolor: '#E3E7FF',
                  color: '#5B4CF0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.7rem',
                }}
              >
                NK
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#182033',
                  }}
                >
                  Screening Complete
                </Typography>

                <Typography
                  sx={{
                    mt: 0.6,
                    color: '#7B8598',
                    fontSize: '1.05rem',
                  }}
                >
                  Ready for technical evaluation
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <AppButton
                variant="outlined"
                sx={{
                  minWidth: 132,
                  height: 54,
                  borderRadius: '18px',
                  fontWeight: 700,
                }}
              >
                Reject
              </AppButton>

              <AppButton
                sx={{
                  minWidth: 190,
                  height: 54,
                  borderRadius: '18px',
                  fontWeight: 700,
                }}
              >
                Send Assessment
              </AppButton>
            </Box>
          </AppCard>

          <AppCard sx={{ px: 3, py: 1.8 }}>
            <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap' }}>
              <TabPill label="Overview" active />
              <TabPill label="Resume" />
              <TabPill label="Screening" />
              <TabPill label="Assessment" />
              <TabPill label="Timeline" />
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
              Fit Summary
            </Typography>

            <Box
              sx={{
                mt: 3,
                border: '1px solid #E7EBF3',
                borderRadius: '24px',
                bgcolor: '#F8FAFD',
                p: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#182033',
                }}
              >
                AI evaluation
              </Typography>

              <Typography
                sx={{
                  mt: 1.3,
                  color: '#7B8598',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                }}
              >
                Candidate matches the role strongly based on frontend skill overlap,
                relevant experience, and quality of screening responses.
              </Typography>

              <Box sx={{ mt: 2.2 }}>
                <AppBadge label="91% match" color="success" />
              </Box>
            </Box>

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
              <Box
                sx={{
                  border: '1px solid #E7EBF3',
                  borderRadius: '24px',
                  bgcolor: '#F8FAFD',
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#182033',
                  }}
                >
                  Experience Snapshot
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ color: '#7B8598', fontSize: '0.98rem' }}>
                    Current Role
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#182033',
                    }}
                  >
                    Frontend Engineer at PixelStack
                  </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ color: '#7B8598', fontSize: '0.98rem' }}>
                    Experience
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: '#182033',
                    }}
                  >
                    4 years
                  </Typography>
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ color: '#7B8598', fontSize: '0.98rem' }}>
                    Core Skills
                  </Typography>

                  <Box sx={{ mt: 1.5, display: 'flex', gap: 1.2, flexWrap: 'wrap' }}>
                    <AppBadge label="React" color="default" />
                    <AppBadge label="TypeScript" color="default" />
                    <AppBadge label="Next.js" color="default" />
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  border: '1px solid #E7EBF3',
                  borderRadius: '24px',
                  bgcolor: '#F8FAFD',
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#182033',
                  }}
                >
                  Evaluation Snapshot
                </Typography>

                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2.2 }}>
                  <InfoRow label="Screening" value="Completed • 84" />
                  <InfoRow label="Coding Assessment" value="Not sent" />
                  <InfoRow label="Risk Status" value="Low" valueColor="#16A34A" />
                  <InfoRow label="Suggested Next Step" value="Technical assessment" />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 3,
                border: '1px solid #E7EBF3',
                borderRadius: '24px',
                bgcolor: '#F8FAFD',
                p: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#182033',
                }}
              >
                Recent Activity
              </Typography>

              <Box sx={{ mt: 2.5 }}>
                <Typography sx={{ color: '#182033', fontSize: '1rem' }}>
                  Resume parsed and matched to Senior Frontend Engineer
                </Typography>
                <Typography sx={{ mt: 0.6, color: '#7B8598', fontSize: '0.96rem' }}>
                  Today, 10:18 AM
                </Typography>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography sx={{ color: '#182033', fontSize: '1rem' }}>
                  AI screening completed successfully
                </Typography>
                <Typography sx={{ mt: 0.6, color: '#7B8598', fontSize: '0.96rem' }}>
                  Today, 12:42 PM
                </Typography>
              </Box>
            </Box>
          </AppCard>
        </Box>

        <AppCard sx={{ p: 4 }}>
          <Typography
            sx={{
              fontSize: '1.65rem',
              fontWeight: 700,
              color: '#182033',
            }}
          >
            Decision
          </Typography>

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
              Recommendation
            </Typography>
            <Typography
              sx={{
                mt: 1.1,
                fontWeight: 700,
                color: '#16A34A',
                fontSize: '1.45rem',
                lineHeight: 1.3,
              }}
            >
              Advance to technical test
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 3,
              p: 2.8,
              border: '1px solid #E7EBF3',
              borderRadius: '22px',
              bgcolor: '#F8FAFD',
            }}
          >
            <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1.05rem' }}>
              Hiring Criteria
            </Typography>

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
              <li>Required skills matched</li>
              <li>Screening cleared</li>
              <li>Assessment pending</li>
            </Box>
          </Box>

          <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <AppButton
              sx={{
                height: 58,
                borderRadius: '18px',
                fontWeight: 700,
              }}
            >
              Move Stage
            </AppButton>

            <AppButton
              variant="outlined"
              sx={{
                height: 58,
                borderRadius: '18px',
                fontWeight: 700,
              }}
            >
              Send Assessment
            </AppButton>

            <AppButton
              variant="outlined"
              sx={{
                height: 58,
                borderRadius: '18px',
                fontWeight: 700,
              }}
            >
              Reject
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
              Recruiter Note
            </Typography>

            <Typography
              sx={{
                mt: 1.3,
                color: '#7B8598',
                fontSize: '0.98rem',
                lineHeight: 1.6,
              }}
            >
              Strong frontend fit. Good communication. Send coding assessment next.
            </Typography>

            <Box sx={{ mt: 2.5 }}>
              <AppButton
                variant="outlined"
                sx={{
                  height: 44,
                  minWidth: 92,
                  minHeight: 44,
                  borderRadius: '999px',
                  fontWeight: 700,
                }}
              >
                Edit
              </AppButton>
            </Box>
          </Box>
        </AppCard>
      </Box>
    </AppShell>
  )
}