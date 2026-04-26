import { Box, Typography, Avatar } from '@mui/material'
import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppButton from '../components/ui/AppButton'
import AppBadge from '../components/ui/AppBadge'
import AppInput from '../components/ui/AppInput'

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

function InfoBlock({ title, subtitle }) {
  return (
    <Box
      sx={{
        p: 2.8,
        border: '1px solid #E7EBF3',
        borderRadius: '22px',
        bgcolor: '#F8FAFD',
      }}
    >
      <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1rem' }}>
        {title}
      </Typography>
      <Typography sx={{ mt: 1, color: '#7B8598', fontSize: '0.98rem', lineHeight: 1.6 }}>
        {subtitle}
      </Typography>
    </Box>
  )
}

export default function ProfilePage() {
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
            Profile
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: '#7B8598',
              fontSize: '1.1rem',
            }}
          >
            Manage personal account details, role information, and preferences.
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
          Save Profile
        </AppButton>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', xl: '1.6fr 0.8fr' },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AppCard sx={{ p: 4 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                flexWrap: 'wrap',
              }}
            >
              <Avatar
                sx={{
                  width: 86,
                  height: 86,
                  bgcolor: '#E3E7FF',
                  color: '#5B4CF0',
                  fontSize: '2rem',
                  fontWeight: 800,
                }}
              >
                RK
              </Avatar>

              <Box>
                <Typography
                  sx={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#182033',
                  }}
                >
                  Riya Kapoor
                </Typography>

                <Typography
                  sx={{
                    mt: 0.7,
                    color: '#7B8598',
                    fontSize: '1rem',
                  }}
                >
                  Lead Recruiter • Acme Talent Team
                </Typography>

                <Box sx={{ mt: 1.5, display: 'flex', gap: 1.2, flexWrap: 'wrap' }}>
                  <AppBadge label="Admin" color="brand" />
                  <AppBadge label="Active" color="success" />
                </Box>
              </Box>
            </Box>
          </AppCard>

          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Personal Information
            </Typography>

            <Box
              sx={{
                mt: 3,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}
            >
              <Box>
                <FieldLabel>Full Name</FieldLabel>
                <AppInput defaultValue="Riya Kapoor" />
              </Box>

              <Box>
                <FieldLabel>Work Email</FieldLabel>
                <AppInput defaultValue="riya@acme.com" />
              </Box>

              <Box>
                <FieldLabel>Role</FieldLabel>
                <AppInput defaultValue="Lead Recruiter" />
              </Box>

              <Box>
                <FieldLabel>Location</FieldLabel>
                <AppInput defaultValue="Bangalore" />
              </Box>
            </Box>
          </AppCard>

          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Preferences
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <InfoBlock
                title="Default workspace"
                subtitle="Acme Talent Team is your primary recruiting workspace."
              />
              <InfoBlock
                title="Notifications"
                subtitle="Email and in-app alerts are enabled for hiring updates."
              />
            </Box>
          </AppCard>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Account Status
            </Typography>

            <Box sx={{ mt: 3 }}>
              <InfoBlock
                title="Access level"
                subtitle="You have admin access to jobs, candidates, analytics, and settings."
              />
            </Box>

            <Box sx={{ mt: 2 }}>
              <InfoBlock
                title="Last login"
                subtitle="Today, 9:14 AM from Bangalore, India."
              />
            </Box>
          </AppCard>

          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Security
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <AppButton
                variant="outlined"
                sx={{
                  height: 52,
                  borderRadius: '18px',
                  fontWeight: 700,
                }}
              >
                Change Password
              </AppButton>

              <AppButton
                variant="outlined"
                sx={{
                  height: 52,
                  borderRadius: '18px',
                  fontWeight: 700,
                }}
              >
                Enable 2FA
              </AppButton>
            </Box>
          </AppCard>
        </Box>
      </Box>
    </AppShell>
  )
}