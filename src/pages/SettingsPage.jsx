import { Box, Typography, Switch } from '@mui/material'
import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppButton from '../components/ui/AppButton'
import AppInput from '../components/ui/AppInput'
import AppBadge from '../components/ui/AppBadge'

function SectionTitle({ children }) {
  return (
    <Typography
      sx={{
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#182033',
      }}
    >
      {children}
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

function SettingRow({ title, subtitle, defaultChecked = false }) {
  return (
    <Box
      sx={{
        py: 2.2,
        borderTop: '1px solid #EEF1F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Box>
        <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#182033' }}>
          {title}
        </Typography>
        <Typography sx={{ mt: 0.7, fontSize: '0.95rem', color: '#7B8598' }}>
          {subtitle}
        </Typography>
      </Box>

      <Switch defaultChecked={defaultChecked} color="primary" />
    </Box>
  )
}

export default function SettingsPage() {
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
            Settings
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: '#7B8598',
              fontSize: '1.1rem',
            }}
          >
            Manage workspace preferences, notifications, and hiring defaults.
          </Typography>
        </Box>

        <AppButton
          sx={{
            minWidth: 160,
            height: 58,
            borderRadius: '18px',
            fontWeight: 700,
          }}
        >
          Save Changes
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AppCard sx={{ p: 4 }}>
            <SectionTitle>Workspace</SectionTitle>

            <Box
              sx={{
                mt: 3,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}
            >
              <Box>
                <FieldLabel>Workspace Name</FieldLabel>
                <AppInput defaultValue="Acme Talent Team" />
              </Box>

              <Box>
                <FieldLabel>Default Hiring Region</FieldLabel>
                <AppInput defaultValue="India" />
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <FieldLabel>Recruiting Email</FieldLabel>
              <AppInput defaultValue="hiring@acme.com" />
            </Box>
          </AppCard>

          <AppCard sx={{ p: 4 }}>
            <SectionTitle>Notifications</SectionTitle>

            <Box sx={{ mt: 2 }}>
              <SettingRow
                title="AI shortlist alerts"
                subtitle="Receive updates when new recommended candidates are available."
                defaultChecked
              />
              <SettingRow
                title="Assessment alerts"
                subtitle="Get notified when assessments are submitted or flagged."
                defaultChecked
              />
              <SettingRow
                title="Interview reminders"
                subtitle="Receive reminders before scheduled interviews."
                defaultChecked
              />
              <SettingRow
                title="Weekly analytics summary"
                subtitle="A digest of hiring performance and funnel movement."
              />
            </Box>
          </AppCard>

          <AppCard sx={{ p: 4 }}>
            <SectionTitle>Hiring Defaults</SectionTitle>

            <Box sx={{ mt: 2 }}>
              <SettingRow
                title="Enable AI candidate matching"
                subtitle="Use AI to rank and recommend candidates by job fit."
                defaultChecked
              />
              <SettingRow
                title="Auto-send assessments"
                subtitle="Automatically send assessments after shortlist approval."
              />
              <SettingRow
                title="Enable proctoring by default"
                subtitle="Apply webcam and integrity settings to new assessments."
                defaultChecked
              />
            </Box>
          </AppCard>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Plan
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
                Current plan
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#182033',
                }}
              >
                Growth
              </Typography>

              <Box sx={{ mt: 1.5 }}>
                <AppBadge label="Active" color="success" />
              </Box>
            </Box>
          </AppCard>

          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Security
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
                Access control
              </Typography>

              <Typography
                sx={{
                  mt: 1.2,
                  color: '#7B8598',
                  fontSize: '0.98rem',
                  lineHeight: 1.6,
                }}
              >
                Manage recruiter access, admin roles, and workspace permissions.
              </Typography>

              <Box sx={{ mt: 2.5 }}>
                <AppButton
                  variant="outlined"
                  sx={{
                    height: 46,
                    minHeight: 46,
                    borderRadius: '999px',
                    fontWeight: 700,
                  }}
                >
                  Manage Access
                </AppButton>
              </Box>
            </Box>
          </AppCard>
        </Box>
      </Box>
    </AppShell>
  )
}