import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppBadge from '../components/ui/AppBadge'
import AppButton from '../components/ui/AppButton'
import SearchBar from '../components/ui/SearchBar'
import ProgressBar from '../components/ui/ProgressBar'


import { Box, Typography } from '@mui/material'

const notifications = [
  {
    title: 'New AI shortlist ready',
    desc: '6 strong candidates recommended for Senior Frontend Engineer.',
    time: '2 mins ago',
    type: 'brand',
  },
  {
    title: 'Assessment submission flagged',
    desc: 'Potential integrity issue detected in Frontend Technical Screen.',
    time: '18 mins ago',
    type: 'warning',
  },
  {
    title: 'Interview scheduled',
    desc: 'Kabir Mehta has been scheduled for a panel round tomorrow.',
    time: '1 hour ago',
    type: 'success',
  },
  {
    title: 'Candidate moved to offer',
    desc: 'Ananya Das advanced to the offer stage.',
    time: '3 hours ago',
    type: 'brand',
  },
]

export default function NotificationsPage() {
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
              fontSize: '3rem',
              fontWeight: 700,
              lineHeight: 1.08,
              color: '#182033',
            }}
          >
            Notifications
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: '#7B8598',
              fontSize: '1.1rem',
            }}
          >
            Stay updated on hiring activity, alerts, and candidate actions.
          </Typography>
        </Box>

        <AppButton
          variant="outlined"
          sx={{
            minWidth: 150,
            height: 58,
            borderRadius: '18px',
            fontWeight: 700,
          }}
        >
          Mark all read
        </AppButton>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', xl: '1.7fr 0.7fr' },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <AppCard sx={{ p: 4 }}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
            Recent notifications
          </Typography>

          <Box sx={{ mt: 3, borderTop: '1px solid #EEF1F6' }}>
            {notifications.map((item, index) => (
              <Box
                key={item.title}
                sx={{
                  py: 3,
                  borderTop: index === 0 ? '1px solid #EEF1F6' : '1px solid #EEF1F6',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 3,
                  flexWrap: 'wrap',
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: '1.08rem', fontWeight: 700, color: '#182033' }}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 0.8,
                      color: '#7B8598',
                      fontSize: '0.98rem',
                      maxWidth: 620,
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Typography sx={{ mt: 1.1, color: '#98A2B3', fontSize: '0.92rem' }}>
                    {item.time}
                  </Typography>
                </Box>

                <AppBadge label="New" color={item.type} />
              </Box>
            ))}
          </Box>
        </AppCard>

        <AppCard sx={{ p: 4 }}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
            Summary
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
              <Typography sx={{ color: '#7B8598', fontSize: '0.95rem' }}>
                Unread
              </Typography>
              <Typography sx={{ mt: 1, fontSize: '2rem', fontWeight: 700, color: '#182033' }}>
                8
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
              <Typography sx={{ color: '#7B8598', fontSize: '0.95rem' }}>
                Alerts
              </Typography>
              <Typography sx={{ mt: 1, fontSize: '2rem', fontWeight: 700, color: '#182033' }}>
                3
              </Typography>
            </Box>
          </Box>
        </AppCard>
      </Box>
    </AppShell>
  )
}