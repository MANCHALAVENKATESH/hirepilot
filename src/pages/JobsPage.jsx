import { Box, Typography } from '@mui/material'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppBadge from '../components/ui/AppBadge'
import AppButton from '../components/ui/AppButton'
import SearchBar from '../components/ui/SearchBar'
import ProgressBar from '../components/ui/ProgressBar'


const jobs = [
  {
    title: 'Senior Frontend Engineer',
    location: 'Bangalore',
    type: 'Full-time',
    applicants: 89,
    shortlisted: 14,
    topMatches: 6,
    status: 'Healthy',
    statusColor: 'success',
    progress: 66,
    progressFill: '#5B4CF0',
    progressTrack: '#E8EEFF',
  },
  {
    title: 'Backend Developer',
    location: 'Remote',
    type: 'Full-time',
    applicants: 72,
    shortlisted: 8,
    topMatches: 3,
    status: 'Watch',
    statusColor: 'warning',
    progress: 52,
    progressFill: '#E58A00',
    progressTrack: '#FFF1BF',
  },
  {
    title: 'Campus Hiring - SDE',
    location: 'India',
    type: 'Graduate',
    applicants: 340,
    shortlisted: 26,
    topMatches: 12,
    status: 'Risk',
    statusColor: 'danger',
    progress: 38,
    progressFill: '#EF2F2F',
    progressTrack: '#FDE2E2',
  },
  {
    title: 'Product Designer',
    location: 'Hybrid',
    type: 'Full-time',
    applicants: 41,
    shortlisted: 9,
    topMatches: 4,
    status: 'On track',
    statusColor: 'success',
    progress: 61,
    progressFill: '#5B4CF0',
    progressTrack: '#E8EEFF',
  },
]

function JobRow({ job }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '2fr 1.2fr 1fr 1fr auto',
        gap: 2,
        py: 3,
        borderTop: '1px solid #EEF1F6',
        alignItems: 'start',
      }}
    >
      <Box>
        <Typography sx={{ fontSize: '1.08rem', fontWeight: 700, color: '#182033' }}>
          {job.title}
        </Typography>
        <Typography sx={{ mt: 0.8, color: '#7B8598', fontSize: '0.95rem' }}>
          {job.location} • {job.type}
        </Typography>
      </Box>

      <Box>
        <ProgressBar
          value={job.progress}
          fill={job.progressFill}
          track={job.progressTrack}
          sx={{ mb: 1.2 }}
        />
        <Typography sx={{ color: '#7B8598', fontSize: '0.95rem' }}>
          {job.applicants} applicants • {job.shortlisted} shortlisted
        </Typography>
      </Box>

      <Box>
        <Typography sx={{ fontSize: '1rem', color: '#182033', mb: 1.2 }}>
          {job.topMatches} strong
        </Typography>
        <AppBadge label={job.status} color={job.statusColor} />
      </Box>

      <Box>
        <Typography sx={{ fontSize: '1rem', color: '#182033', mb: 1.2 }}>
          Open pipeline
        </Typography>
        <AppButton
          variant="outlined"
          sx={{
            height: 40,
            minHeight: 40,
            borderRadius: '999px',
            px: 2.5,
            fontSize: '0.95rem',
            color: '#5B4CF0',
          }}
        >
          Open role
        </AppButton>
      </Box>

      <Box>
        <AppButton
          variant="outlined"
          sx={{
            minWidth: 44,
            width: 44,
            height: 40,
            minHeight: 40,
            p: 0,
            borderRadius: '999px',
          }}
        >
          <MoreHorizRoundedIcon sx={{ fontSize: 20 }} />
        </AppButton>
      </Box>
    </Box>
  )
}

export default function JobsPage() {
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
          <Typography sx={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1.08, color: '#182033' }}>
            Jobs
          </Typography>
          <Typography sx={{ mt: 1.2, color: '#7B8598', fontSize: '1.1rem' }}>
            Manage open roles, track hiring activity, and review job health.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <SearchBar placeholder="Search jobs..." sx={{ width: 300 }} />
          <AppButton
            sx={{
              minWidth: 170,
              height: 58,
              borderRadius: '18px',
              fontWeight: 700,
            }}
            startIcon={<AddRoundedIcon />}
          >
            Create Job
          </AppButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', xl: '1.7fr 0.8fr' },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <AppCard sx={{ p: 4 }}>
          <Typography sx={{ fontSize: '1.55rem', fontWeight: 700, color: '#182033' }}>
            Active roles
          </Typography>
          <Typography sx={{ mt: 0.5, color: '#7B8598', fontSize: '0.98rem' }}>
            Roles currently in motion with hiring progress and next actions.
          </Typography>

          <Box sx={{ mt: 3.5, borderTop: '1px solid #EEF1F6' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '2fr 1.2fr 1fr 1fr auto',
                gap: 2,
                py: 2,
                color: '#98A2B3',
                fontSize: '0.82rem',
                fontWeight: 800,
                letterSpacing: '0.02em',
              }}
            >
              <Box>ROLE</Box>
              <Box>PIPELINE</Box>
              <Box>TOP MATCHES</Box>
              <Box>NEXT ACTION</Box>
              <Box />
            </Box>

            {jobs.map((job) => (
              <JobRow key={job.title} job={job} />
            ))}
          </Box>
        </AppCard>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.55rem', fontWeight: 700, color: '#182033' }}>
              Job summary
            </Typography>
            <Typography sx={{ mt: 0.5, color: '#7B8598', fontSize: '0.98rem' }}>
              Overview of current openings and activity
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ p: 2.5, border: '1px solid #E7EBF3', borderRadius: '22px', bgcolor: '#F8FAFD' }}>
                <Typography sx={{ color: '#7B8598', fontSize: '0.95rem' }}>
                  Total open roles
                </Typography>
                <Typography sx={{ mt: 1, fontSize: '2rem', fontWeight: 700, color: '#182033' }}>
                  12
                </Typography>
              </Box>

              <Box sx={{ p: 2.5, border: '1px solid #E7EBF3', borderRadius: '22px', bgcolor: '#F8FAFD' }}>
                <Typography sx={{ color: '#7B8598', fontSize: '0.95rem' }}>
                  Total applicants
                </Typography>
                <Typography sx={{ mt: 1, fontSize: '2rem', fontWeight: 700, color: '#182033' }}>
                  542
                </Typography>
              </Box>

              <Box sx={{ p: 2.5, border: '1px solid #E7EBF3', borderRadius: '22px', bgcolor: '#F8FAFD' }}>
                <Typography sx={{ color: '#7B8598', fontSize: '0.95rem' }}>
                  Assessment pending
                </Typography>
                <Typography sx={{ mt: 1, fontSize: '2rem', fontWeight: 700, color: '#182033' }}>
                  21
                </Typography>
              </Box>
            </Box>
          </AppCard>
        </Box>
      </Box>
    </AppShell>
  )
}
