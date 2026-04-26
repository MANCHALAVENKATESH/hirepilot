import { Box, Typography } from '@mui/material'
import LinkRoundedIcon from '@mui/icons-material/LinkRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppButton from '../components/ui/AppButton'
import AppBadge from '../components/ui/AppBadge'

const integrations = [
  {
    name: 'Slack',
    description: 'Send hiring alerts and interview updates to recruiting channels.',
    status: 'Connected',
    color: 'success',
    action: 'Manage',
  },
  {
    name: 'Google Calendar',
    description: 'Schedule interviews and sync panel availability automatically.',
    status: 'Connected',
    color: 'success',
    action: 'Manage',
  },
  {
    name: 'Greenhouse',
    description: 'Sync job openings and candidate stages with your ATS.',
    status: 'Not connected',
    color: 'warning',
    action: 'Connect',
  },
  {
    name: 'Zoom',
    description: 'Generate interview meeting links and share them with candidates.',
    status: 'Connected',
    color: 'success',
    action: 'Manage',
  },
]

function IntegrationRow({ item }) {
  return (
    <Box
      sx={{
        py: 3,
        borderTop: '1px solid #EEF1F6',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 3,
        flexWrap: 'wrap',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '16px',
            bgcolor: '#EEF2FF',
            color: '#5B4CF0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <LinkRoundedIcon />
        </Box>

        <Box>
          <Typography sx={{ fontSize: '1.05rem', fontWeight: 700, color: '#182033' }}>
            {item.name}
          </Typography>

          <Typography
            sx={{
              mt: 0.8,
              color: '#7B8598',
              fontSize: '0.98rem',
              maxWidth: 560,
              lineHeight: 1.6,
            }}
          >
            {item.description}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <AppBadge label={item.status} color={item.color} />

        <AppButton
          variant={item.action === 'Connect' ? 'contained' : 'outlined'}
          sx={{
            height: 46,
            minHeight: 46,
            minWidth: 110,
            borderRadius: '999px',
            fontWeight: 700,
          }}
        >
          {item.action}
        </AppButton>
      </Box>
    </Box>
  )
}

export default function IntegrationsPage() {
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
            Integrations
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: '#7B8598',
              fontSize: '1.1rem',
            }}
          >
            Connect external tools to streamline hiring workflows and collaboration.
          </Typography>
        </Box>

        <AppButton
          sx={{
            minWidth: 180,
            height: 58,
            borderRadius: '18px',
            fontWeight: 700,
          }}
        >
          Add Integration
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
          <Typography sx={{ fontSize: '1.55rem', fontWeight: 700, color: '#182033' }}>
            Available integrations
          </Typography>

          <Typography sx={{ mt: 0.6, color: '#7B8598', fontSize: '0.98rem' }}>
            Manage connected tools and enable new platform integrations.
          </Typography>

          <Box sx={{ mt: 3, borderTop: '1px solid #EEF1F6' }}>
            {integrations.map((item) => (
              <IntegrationRow key={item.name} item={item} />
            ))}
          </Box>
        </AppCard>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Status
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
              <Typography sx={{ color: '#7B8598', fontSize: '0.95rem' }}>
                Connected integrations
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#182033',
                }}
              >
                3
              </Typography>

              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleRoundedIcon sx={{ color: '#22C55E', fontSize: 20 }} />
                <Typography sx={{ color: '#22C55E', fontSize: '0.95rem', fontWeight: 600 }}>
                  Systems healthy
                </Typography>
              </Box>
            </Box>
          </AppCard>

          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Recommendation
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
              <Typography sx={{ fontWeight: 700, color: '#182033' }}>
                Connect ATS sync
              </Typography>

              <Typography
                sx={{
                  mt: 1.2,
                  color: '#7B8598',
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                }}
              >
                Connecting Greenhouse will reduce duplicate updates and keep job stages in sync.
              </Typography>
            </Box>
          </AppCard>
        </Box>
      </Box>
    </AppShell>
  )
}