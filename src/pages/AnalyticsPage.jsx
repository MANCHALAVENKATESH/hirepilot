import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppBadge from '../components/ui/AppBadge'
import AppButton from '../components/ui/AppButton'
import SearchBar from '../components/ui/SearchBar'
import ProgressBar from '../components/ui/ProgressBar'

import { Box, Typography } from '@mui/material'


function MetricCard({ label, value, helper }) {
  return (
    <AppCard sx={{ p: 3 }}>
      <Typography sx={{ color: '#7B8598', fontSize: '0.95rem' }}>{label}</Typography>
      <Typography sx={{ mt: 1, fontSize: '2rem', fontWeight: 700, color: '#182033' }}>
        {value}
      </Typography>
      <Typography sx={{ mt: 1, color: '#98A2B3', fontSize: '0.92rem' }}>{helper}</Typography>
    </AppCard>
  )
}

export default function AnalyticsPage() {
  return (
    <AppShell>
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: 1.08,
            color: '#182033',
          }}
        >
          Analytics
        </Typography>

        <Typography
          sx={{
            mt: 1.2,
            color: '#7B8598',
            fontSize: '1.1rem',
          }}
        >
          Track hiring funnel performance and pipeline efficiency.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            xl: 'repeat(4, 1fr)',
          },
          gap: 3,
          mb: 3,
        }}
      >
        <MetricCard label="Applications" value="542" helper="Across all active roles" />
        <MetricCard label="Screen pass rate" value="68%" helper="Improved by 4% this month" />
        <MetricCard label="Assessment completion" value="81%" helper="Visible test completion" />
        <MetricCard label="Offer acceptance" value="73%" helper="Last 30 days" />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', xl: '1.5fr 1fr' },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <AppCard sx={{ p: 4 }}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
            Funnel performance
          </Typography>

          <Typography sx={{ mt: 0.8, color: '#7B8598', fontSize: '0.98rem' }}>
            Candidate movement across hiring stages
          </Typography>

          <Box
            sx={{
              mt: 5,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
              minHeight: 260,
            }}
          >
            {[
              { label: 'Applied', h: 180, color: '#C7D2FE' },
              { label: 'Screen', h: 220, color: '#A5B4FC' },
              { label: 'Assess', h: 165, color: '#7C87F6' },
              { label: 'Interview', h: 120, color: '#5B4CF0' },
            ].map((bar) => (
              <Box key={bar.label} sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 72,
                    height: bar.h,
                    borderRadius: '24px',
                    backgroundColor: bar.color,
                    mx: 'auto',
                  }}
                />
                <Typography sx={{ mt: 1.4, color: '#7B8598', fontSize: '0.95rem' }}>
                  {bar.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </AppCard>

        <AppCard sx={{ p: 4 }}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
            Insights
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
              <Typography sx={{ fontWeight: 700, color: '#182033' }}>
                Best performing role
              </Typography>
              <Typography sx={{ mt: 1, color: '#7B8598' }}>
                Senior Frontend Engineer has the highest AI match conversion.
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
              <Typography sx={{ fontWeight: 700, color: '#182033' }}>
                Drop-off alert
              </Typography>
              <Typography sx={{ mt: 1, color: '#7B8598' }}>
                Campus Hiring - SDE shows elevated assessment abandonment.
              </Typography>
            </Box>
          </Box>
        </AppCard>
      </Box>
    </AppShell>
  )
}