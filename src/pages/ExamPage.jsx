import { Box, Typography } from '@mui/material'
import AppCard from '../components/ui/AppCard'
import AppBadge from '../components/ui/AppBadge'
import AppInput from '../components/ui/AppInput'
import AppButton from '../components/ui/AppButton'

export default function AssessmentPlayerPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#F5F7FB',
        p: 2,
      }}
    >
      <AppCard
        sx={{
          px: 4,
          py: 3,
          mb: 3,
          borderRadius: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 3,
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#182033',
              lineHeight: 1.1,
            }}
          >
            Frontend Technical Assessment
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: '1rem',
              color: '#7B8598',
            }}
          >
            Question 2 of 5
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <AppButton
            variant="outlined"
            sx={{
              minWidth: 128,
              height: 50,
              borderRadius: '16px',
              fontWeight: 700,
            }}
          >
            Python 3
          </AppButton>

          <AppBadge label="Saved" color="success" />
          <AppBadge label="Proctored" color="warning" />
          <AppBadge label="42:18 left" color="purple" />

          <AppButton
            sx={{
              minWidth: 140,
              height: 50,
              borderRadius: '16px',
              fontWeight: 700,
            }}
          >
            Submit
          </AppButton>
        </Box>
      </AppCard>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            xl: '360px 1fr 290px',
          },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <AppCard sx={{ p: 4 }}>
          <Typography
            sx={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: '#182033',
            }}
          >
            Problem
          </Typography>

          <Typography
            sx={{
              mt: 4,
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#182033',
            }}
          >
            Detect duplicate candidate IDs
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: '#7B8598',
              fontSize: '1rem',
              lineHeight: 1.7,
            }}
          >
            Given a list of candidate IDs, return all duplicate values.
            Aim for linear time complexity if possible.
          </Typography>

          <Box sx={{ mt: 5 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: '#182033' }}>
              Example
            </Typography>

            <Box
              sx={{
                mt: 2,
                p: 3,
                border: '1px solid #E7EBF3',
                borderRadius: '22px',
                bgcolor: '#F8FAFD',
              }}
            >
              <Typography sx={{ color: '#7B8598', fontSize: '1rem' }}>
                Input: [1, 2, 3, 2, 4, 5, 1]
              </Typography>
              <Typography sx={{ mt: 2, color: '#7B8598', fontSize: '1rem' }}>
                Output: [1, 2]
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 5 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: '#182033' }}>
              Constraints
            </Typography>
            <Typography sx={{ mt: 2, color: '#7B8598', fontSize: '1rem' }}>
              1 ≤ n ≤ 100000
            </Typography>
            <Typography sx={{ mt: 1, color: '#7B8598', fontSize: '1rem' }}>
              IDs are integers
            </Typography>
          </Box>

          <Box sx={{ mt: 6 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: '#182033' }}>
              AI Explanation Prompt
            </Typography>

            <Box
              sx={{
                mt: 2,
                p: 3,
                border: '1px solid #D9E0FF',
                borderRadius: '22px',
                bgcolor: '#EEF2FF',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#5B4CF0',
                }}
              >
                Describe your approach before submission
              </Typography>

              <Typography
                sx={{
                  mt: 1.4,
                  fontSize: '0.98rem',
                  color: '#6B74C9',
                  lineHeight: 1.6,
                }}
              >
                Explain why your solution works and mention time complexity.
              </Typography>

              <Box sx={{ mt: 2.5 }}>
                <AppButton
                  variant="outlined"
                  sx={{
                    height: 42,
                    minHeight: 42,
                    minWidth: 128,
                    borderRadius: '999px',
                    color: '#5B4CF0',
                    borderColor: '#BFCBFF',
                    backgroundColor: '#fff',
                    fontWeight: 700,
                  }}
                >
                  Open prompt
                </AppButton>
              </Box>
            </Box>
          </Box>
        </AppCard>

        <AppCard sx={{ p: 3 }}>
          <Box
            sx={{
              overflow: 'hidden',
              borderRadius: '24px',
              bgcolor: '#12192B',
            }}
          >
            <Box
              sx={{
                px: 3,
                py: 2,
                borderBottom: '1px solid #1F2940',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ color: '#E5E7EB', fontSize: '1rem' }}>main.py</Typography>
              <Typography sx={{ color: '#8C95A8', fontSize: '0.95rem' }}>
                Auto-save on
              </Typography>
            </Box>

            <Box
              component="pre"
              sx={{
                m: 0,
                minHeight: 620,
                px: 4,
                py: 4,
                color: '#C8D1E4',
                fontSize: '1rem',
                lineHeight: 2,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                whiteSpace: 'pre-wrap',
              }}
            >
{`def find_duplicates(ids):
    seen = set()
    duplicates = set()

    for item in ids:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)

    return list(duplicates)`}
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography
              sx={{
                fontSize: '1.55rem',
                fontWeight: 700,
                color: '#182033',
              }}
            >
              Output
            </Typography>

            <Box
              sx={{
                mt: 2,
                p: 3,
                border: '1px solid #E7EBF3',
                borderRadius: '22px',
                bgcolor: '#F8FAFD',
              }}
            >
              <Typography sx={{ color: '#6F7B91', fontSize: '1rem' }}>Run result</Typography>
              <Typography
                sx={{
                  mt: 1.8,
                  color: '#16A34A',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                }}
              >
                All visible test cases passed.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <AppButton
                variant="outlined"
                sx={{
                  minWidth: 150,
                  height: 52,
                  borderRadius: '18px',
                  fontWeight: 700,
                }}
              >
                Run Code
              </AppButton>

              <AppButton
                variant="outlined"
                sx={{
                  minWidth: 150,
                  height: 52,
                  borderRadius: '18px',
                  fontWeight: 700,
                }}
              >
                Save Draft
              </AppButton>
            </Box>

            <AppButton
              sx={{
                minWidth: 170,
                height: 52,
                borderRadius: '18px',
                fontWeight: 700,
              }}
            >
              Submit Final
            </AppButton>
          </Box>
        </AppCard>

        <AppCard sx={{ p: 4 }}>
          <Typography
            sx={{
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#182033',
            }}
          >
            Tests
          </Typography>

          <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              sx={{
                p: 2.5,
                border: '1px solid #E7EBF3',
                borderRadius: '22px',
                bgcolor: '#F8FAFD',
              }}
            >
              <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1rem' }}>
                Sample 1
              </Typography>
              <Typography sx={{ mt: 1.2, color: '#7B8598', fontSize: '0.98rem' }}>
                Input [1,2,2,4]
              </Typography>
              <Typography sx={{ mt: 1, color: '#22C55E', fontSize: '0.98rem' }}>
                Output [2]
              </Typography>
            </Box>

            <Box
              sx={{
                p: 2.5,
                border: '1px solid #E7EBF3',
                borderRadius: '22px',
                bgcolor: '#F8FAFD',
              }}
            >
              <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1rem' }}>
                Sample 2
              </Typography>
              <Typography sx={{ mt: 1.2, color: '#7B8598', fontSize: '0.98rem' }}>
                Input [5,5,5]
              </Typography>
              <Typography sx={{ mt: 1, color: '#22C55E', fontSize: '0.98rem' }}>
                Output [5]
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              mt: 4,
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#182033',
            }}
          >
            Integrity
          </Typography>

          <Box
            sx={{
              mt: 3,
              p: 2.8,
              border: '1px solid #E7EBF3',
              borderRadius: '22px',
              bgcolor: '#F8FAFD',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography sx={{ fontSize: '0.98rem', color: '#4B5565' }}>
                Camera active
              </Typography>
              <Typography sx={{ fontSize: '0.98rem', color: '#4B5565' }}>
                Tab switches: 0
              </Typography>
              <Typography sx={{ fontSize: '0.98rem', color: '#4B5565' }}>
                Copy blocked
              </Typography>
              <Typography sx={{ fontSize: '0.98rem', color: '#4B5565' }}>
                Single face detected
              </Typography>
            </Box>
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
              Note
            </Typography>

            <Typography
              sx={{
                mt: 1.3,
                color: '#7B8598',
                fontSize: '0.98rem',
                lineHeight: 1.6,
              }}
            >
              Hidden test cases run after final submission.
            </Typography>
          </Box>
        </AppCard>
      </Box>
    </Box>
  )
}