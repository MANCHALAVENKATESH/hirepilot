import { Box, Typography } from '@mui/material'
import TuneRoundedIcon from '@mui/icons-material/TuneRounded'
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded'
import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppBadge from '../components/ui/AppBadge'
import AppButton from '../components/ui/AppButton'
import SearchBar from '../components/ui/SearchBar'
import ProgressBar from '../components/ui/ProgressBar'


const filters = ['All', 'AI Recommended', 'Flagged', 'Assessment Due']

const stages = [
  {
    title: 'Applied',
    count: 28,
    candidates: [
      {
        name: 'Aarav Sharma',
        meta: 'React • 4 yrs',
        badge: '89% match',
        badgeColor: 'success',
      },
      {
        name: 'Priya Singh',
        meta: 'UI • JS • 3 yrs',
        badge: 'Review',
        badgeColor: 'warning',
      },
    ],
  },
  {
    title: 'Screening',
    count: 17,
    candidates: [
      {
        name: 'Neha Kapoor',
        meta: 'Screen complete',
        badge: 'AI selected',
        badgeColor: 'brand',
        selected: true,
        helper: 'Click to preview',
      },
      {
        name: 'Rahul Verma',
        meta: 'Pending approval',
        badge: 'Pending',
        badgeColor: 'warning',
      },
    ],
  },
  {
    title: 'Assessment',
    count: 10,
    candidates: [
      {
        name: 'Isha Patel',
        meta: 'Code submitted',
        badge: '88',
        badgeColor: 'success',
        extraAlert: true,
        subtext: 'Flagged activity',
      },
      {
        name: 'Rohit Jain',
        meta: 'Assessment sent',
        badge: 'Due',
        badgeColor: 'purple',
      },
    ],
  },
  {
    title: 'Interview',
    count: 5,
    candidates: [
      {
        name: 'Kabir Mehta',
        meta: 'Panel round',
        badge: 'Strong fit',
        badgeColor: 'success',
      },
    ],
  },
  {
    title: 'Offer',
    count: 2,
    candidates: [
      {
        name: 'Ananya Das',
        meta: 'Offer sent',
        badge: 'Offer',
        badgeColor: 'brand',
      },
    ],
  },
]

function FilterChip({ label, active = false }) {
  return (
    <Box
      sx={{
        height: 48,
        minWidth: 126,
        px: 3,
        borderRadius: '18px',
        border: '1px solid',
        borderColor: active ? 'transparent' : '#E7EBF3',
        bgcolor: active ? '#EEF2FF' : '#fff',
        color: active ? '#5B4CF0' : '#182033',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: active ? 700 : 600,
        fontSize: '0.98rem',
      }}
    >
      {label}
    </Box>
  )
}

function PipelineCandidateCard({ candidate }) {
  return (
    <Box
      sx={{
        border: '1.5px solid',
        borderColor: candidate.selected ? '#6A5AF9' : '#E7EBF3',
        bgcolor: '#fff',
        borderRadius: '22px',
        px: 2.2,
        py: 2,
        boxShadow: candidate.selected ? '0 4px 14px rgba(91,76,240,0.08)' : 'none',
      }}
    >
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight: 700,
          color: '#182033',
        }}
      >
        {candidate.name}
      </Typography>

      <Typography
        sx={{
          mt: 0.5,
          fontSize: '0.95rem',
          color: '#7B8598',
        }}
      >
        {candidate.meta}
      </Typography>

      <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
        <AppBadge label={candidate.badge} color={candidate.badgeColor} />
        {candidate.extraAlert && (
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: '999px',
              bgcolor: '#FDE2E2',
              color: '#EF4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
            }}
          >
            !
          </Box>
        )}
      </Box>

      {candidate.subtext && (
        <Typography
          sx={{
            mt: 1.1,
            fontSize: '0.94rem',
            color: '#7B8598',
          }}
        >
          {candidate.subtext}
        </Typography>
      )}

      {candidate.helper && (
        <Typography
          sx={{
            mt: 1.1,
            fontSize: '0.94rem',
            color: '#7B8598',
          }}
        >
          {candidate.helper}
        </Typography>
      )}
    </Box>
  )
}

function StageColumn({ stage }) {
  return (
    <Box
      sx={{
        minWidth: 215,
        border: '1px solid #E7EBF3',
        bgcolor: '#F8FAFD',
        borderRadius: '24px',
        p: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, mb: 2 }}>
        <Typography
          sx={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#182033',
          }}
        >
          {stage.title}
        </Typography>

        <Box
          sx={{
            minWidth: 38,
            height: 34,
            px: 1.2,
            borderRadius: '999px',
            bgcolor: '#EEF1F6',
            color: '#98A2B3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.92rem',
          }}
        >
          {stage.count}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {stage.candidates.map((candidate) => (
          <PipelineCandidateCard key={candidate.name} candidate={candidate} />
        ))}
      </Box>
    </Box>
  )
}

export default function PipelinePage() {
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
          Jobs / Frontend Engineering
        </Typography>

        <Box
          sx={{
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
                fontSize: '3rem',
                fontWeight: 700,
                lineHeight: 1.08,
                color: '#182033',
              }}
            >
              Senior Frontend Engineer
            </Typography>

            <Typography
              sx={{
                mt: 1.2,
                color: '#7B8598',
                fontSize: '1.1rem',
              }}
            >
              89 applicants • Bangalore • 4–6 years • custom hiring stages
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <SearchBar placeholder="Search candidate" sx={{ width: 260 }} />

            <AppButton
              variant="outlined"
              startIcon={<TuneRoundedIcon />}
              sx={{
                minWidth: 126,
                height: 58,
                borderRadius: '18px',
              }}
            >
              Filter
            </AppButton>

            <AppButton
              variant="outlined"
              startIcon={<CompareArrowsRoundedIcon />}
              sx={{
                minWidth: 126,
                height: 58,
                borderRadius: '18px',
              }}
            >
              Compare
            </AppButton>

            <AppButton
              sx={{
                minWidth: 182,
                height: 58,
                borderRadius: '18px',
                fontWeight: 700,
              }}
            >
              Bulk Actions
            </AppButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 3 }}>
        {filters.map((filter, index) => (
          <FilterChip key={filter} label={filter} active={index === 1} />
        ))}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            xl: '1.8fr 0.55fr',
          },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <AppCard sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, minmax(215px, 1fr))',
              gap: 2,
              overflowX: 'auto',
              pb: 1,
            }}
          >
            {stages.map((stage) => (
              <StageColumn key={stage.title} stage={stage} />
            ))}
          </Box>
        </AppCard>

        <AppCard sx={{ p: 4 }}>
          <Typography
            sx={{
              fontSize: '1.55rem',
              fontWeight: 700,
              color: '#182033',
            }}
          >
            Candidate Preview
          </Typography>

          <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2.2 }}>
            <Box
              sx={{
                width: 74,
                height: 74,
                borderRadius: '999px',
                bgcolor: '#E3E7FF',
                color: '#5B4CF0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1.9rem',
              }}
            >
              NK
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: '1.65rem',
                  fontWeight: 700,
                  color: '#182033',
                }}
              >
                Neha Kapoor
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  color: '#7B8598',
                  fontSize: '1rem',
                }}
              >
                Frontend • Bangalore
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            <AppBadge label="91% match" color="success" />
          </Box>

          <Box
            sx={{
              mt: 4,
              p: 2.5,
              border: '1px solid #E7EBF3',
              borderRadius: '22px',
              bgcolor: '#F8FAFD',
            }}
          >
            <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1rem' }}>
              AI recommendation
            </Typography>
            <Typography sx={{ mt: 1, color: '#7B8598', fontSize: '0.98rem' }}>
              Strong communication, relevant frontend experience.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              p: 2.5,
              border: '1px solid #E7EBF3',
              borderRadius: '22px',
              bgcolor: '#F8FAFD',
            }}
          >
            <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1rem' }}>
              Screening
            </Typography>
            <Typography sx={{ mt: 1, color: '#7B8598', fontSize: '0.98rem' }}>
              Completed • Score 84
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              p: 2.5,
              border: '1px solid #E7EBF3',
              borderRadius: '22px',
              bgcolor: '#F8FAFD',
            }}
          >
            <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1rem' }}>
              Assessment
            </Typography>
            <Typography sx={{ mt: 1, color: '#7B8598', fontSize: '0.98rem' }}>
              Not sent yet
            </Typography>
          </Box>

          <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <AppButton
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
              Move to Next Stage
            </AppButton>

            <AppButton
              variant="outlined"
              sx={{
                height: 58,
                borderRadius: '18px',
                fontWeight: 700,
              }}
            >
              Open Full Profile
            </AppButton>
          </Box>

          <Box
            sx={{
              mt: 4,
              p: 2.5,
              border: '1px solid #E7EBF3',
              borderRadius: '22px',
              bgcolor: '#F8FAFD',
            }}
          >
            <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1rem' }}>
              Quick note
            </Typography>
            <Typography sx={{ mt: 1, color: '#7B8598', fontSize: '0.98rem' }}>
              Use compare mode to review top frontend candidates.
            </Typography>
          </Box>
        </AppCard>
      </Box>
    </AppShell>
  )
}