import { Box, Typography } from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppBadge from '../components/ui/AppBadge'
import AppButton from '../components/ui/AppButton'
import SearchBar from '../components/ui/SearchBar'
import ProgressBar from '../components/ui/ProgressBar'
import PageHeader from '../components/ui/PageHeader'
import { jobs, priorityActions, topCandidates } from '../data/dashboardData'

function getProgressFill(role) {
  if (role === 'Backend Developer') return '#E58A00'
  if (role === 'Campus Hiring - SDE') return '#EF2F2F'
  return '#5B4CF0'
}

function getProgressTrack(role) {
  if (role === 'Backend Developer') return '#FFF1BF'
  if (role === 'Campus Hiring - SDE') return '#FDE2E2'
  return '#E8EEFF'
}

function ActionCard({ item }) {
  return (
    <Box>
      <AppCard sx={{ p: 3.2, borderRadius: '24px' }}>
        <Box mb={2.2}>
          <AppBadge
            label={item.count}
            color={item.countColor}
            sx={{
              height: 46,
              '& .MuiChip-label': {
                px: 2.2,
                fontSize: '1.05rem',
              },
            }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#182033',
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: '#7B8598',
            fontSize: '0.95rem',
            lineHeight: 1.35,
          }}
        >
          {item.subtitle}
        </Typography>
      </AppCard>

      <Box sx={{ mt: 1.5, ml: 2 }}>
        <AppBadge
          label={item.cta}
          color={item.countColor}
          sx={{
            height: 34,
            backgroundColor:
              item.countColor === 'danger'
                ? '#FDE2E2'
                : item.countColor === 'warning'
                ? '#FFF1BF'
                : item.countColor === 'success'
                ? '#DDF8E7'
                : '#E9EEFF',
          }}
        />
      </Box>
    </Box>
  )
}

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader
        title="Dashboard"
        subtitle="Track hiring progress, candidate movement, and next actions."
        right={
          <>
            <SearchBar
              placeholder="Search jobs, candidates..."
              sx={{ width: 310 }}
            />

            <AppButton
              variant="outlined"
              sx={{
                minWidth: 64,
                width: 64,
                height: 58,
                borderRadius: '18px',
                p: 0,
              }}
            >
              <NotificationsNoneOutlinedIcon sx={{ color: '#5B4CF0' }} />
            </AppButton>

            <AppButton
              sx={{
                minWidth: 182,
                height: 58,
                borderRadius: '18px',
                fontSize: '1rem',
                fontWeight: 700,
              }}
            >
              Create Job
            </AppButton>
          </>
        }
      />

      <Typography
        sx={{
          mb: 2,
          fontSize: '1.1rem',
          fontWeight: 700,
          color: '#182033',
        }}
      >
        Priority actions
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(4, 1fr)',
          },
          gap: 2.5,
          mb: 4,
        }}
      >
        {priorityActions.map((item) => (
          <ActionCard key={item.title} item={item} />
        ))}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            xl: '1.9fr 1fr',
          },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <AppCard sx={{ p: 4 }}>
          <Typography
            sx={{
              fontSize: '1.55rem',
              fontWeight: 700,
              color: '#182033',
            }}
          >
            Active jobs
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              color: '#7B8598',
              fontSize: '0.98rem',
            }}
          >
            Roles currently in motion with candidate progress and next actions.
          </Typography>

          <Box
            sx={{
              mt: 3.5,
              borderTop: '1px solid #EEF1F6',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '2fr 1.25fr 1fr 1fr',
                gap: 2,
                px: 0,
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
            </Box>

            {jobs.map((job, index) => (
              <Box
                key={job.role}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1.25fr 1fr 1fr',
                  gap: 2,
                  py: 3,
                  borderTop: index === 0 ? '1px solid #EEF1F6' : '1px solid #EEF1F6',
                  alignItems: 'start',
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: '#182033',
                    }}
                  >
                    {job.role}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.8,
                      color: '#7B8598',
                      fontSize: '0.95rem',
                    }}
                  >
                    {job.location} • {job.exp}
                  </Typography>
                </Box>

                <Box>
                  <ProgressBar
                    value={job.pipeline}
                    fill={getProgressFill(job.role)}
                    track={getProgressTrack(job.role)}
                    sx={{ mb: 1.2 }}
                  />
                  <Typography
                    sx={{
                      color: '#7B8598',
                      fontSize: '0.95rem',
                    }}
                  >
                    {job.pipelineText}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      color: '#182033',
                      mb: 1.2,
                    }}
                  >
                    {job.topMatches}
                  </Typography>
                  <AppBadge label={job.health} color={job.healthColor} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      color: '#182033',
                      mb: 1.2,
                    }}
                  >
                    {job.nextAction}
                  </Typography>

                  <AppButton
                    variant="outlined"
                    sx={{
                      height: 40,
                      minHeight: 40,
                      borderRadius: '999px',
                      px: 2.5,
                      fontSize: '0.95rem',
                      color:
                        job.button === 'Notify' || job.button === 'Open analysis'
                          ? '#182033'
                          : '#5B4CF0',
                    }}
                  >
                    {job.button}
                  </AppButton>
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              mt: 3,
              border: '1px solid #E7EBF3',
              backgroundColor: '#F8FAFD',
              borderRadius: '26px',
              px: 3,
              py: 2.4,
            }}
          >
            <Typography
              sx={{
                color: '#182033',
                fontWeight: 700,
                fontSize: '0.98rem',
              }}
            >
              Tip
            </Typography>
            <Typography
              sx={{
                mt: 0.8,
                color: '#7B8598',
                fontSize: '0.98rem',
              }}
            >
              Use AI shortlist filters to review high-match candidates faster for technical roles.
            </Typography>
          </Box>
        </AppCard>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AppCard sx={{ p: 4 }}>
            <Typography
              sx={{
                fontSize: '1.55rem',
                fontWeight: 700,
                color: '#182033',
              }}
            >
              Top candidates
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                color: '#7B8598',
                fontSize: '0.98rem',
              }}
            >
              Recommended profiles across active openings
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2.2 }}>
              {topCandidates.map((candidate) => (
                <Box
                  key={candidate.name}
                  sx={{
                    border: '1px solid #E7EBF3',
                    backgroundColor: '#F8FAFD',
                    borderRadius: '24px',
                    px: 3,
                    py: 2.2,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 2,
                  }}
                >
                  <Box>
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
                        mt: 0.6,
                        color: '#7B8598',
                        fontSize: '0.95rem',
                      }}
                    >
                      {candidate.role}
                    </Typography>
                  </Box>

                  <AppBadge label={candidate.match} color={candidate.color} />
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                mt: 2.3,
                height: 38,
                borderRadius: '999px',
                backgroundColor: '#E9EEFF',
                color: '#5B4CF0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.98rem',
              }}
            >
              View all recommended candidates
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
              Funnel snapshot
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                color: '#7B8598',
                fontSize: '0.98rem',
              }}
            >
              Current candidate movement across all jobs
            </Typography>

            <Box
              sx={{
                mt: 4,
                px: 2,
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              {[
                { label: 'Applied', h: 120, color: '#C7D2FE' },
                { label: 'Screen', h: 165, color: '#A5B4FC' },
                { label: 'Assess', h: 142, color: '#7C87F6' },
                { label: 'Interview', h: 92, color: '#5B4CF0' },
              ].map((bar) => (
                <Box key={bar.label} sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 62,
                      height: bar.h,
                      borderRadius: '22px',
                      backgroundColor: bar.color,
                      mx: 'auto',
                    }}
                  />
                  <Typography
                    sx={{
                      mt: 1.4,
                      color: '#7B8598',
                      fontSize: '0.95rem',
                    }}
                  >
                    {bar.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </AppCard>
        </Box>
      </Box>
    </AppShell>
  )
}