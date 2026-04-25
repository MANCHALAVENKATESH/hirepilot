import {
  Box,
  Typography,
  Avatar,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { NavLink, useLocation } from 'react-router-dom'

const sections = [
  {
    title: 'WORKSPACE',
    items: [
      { label: 'Home', to: '/dashboard' },
      { label: 'Jobs', to: '/jobs' },
      { label: 'Candidates', to: '/candidates' },
      { label: 'Pipeline', to: '/pipeline' },
      { label: 'Assessments', to: '/assessments' },
    ],
  },
  {
    title: 'INSIGHTS',
    items: [
      { label: 'Analytics', to: '/analytics' },
      { label: 'Notifications', to: '/notifications' },
    ],
  },
  {
    title: 'SYSTEM',
    items: [
      { label: 'Integrations', to: '/integrations' },
      { label: 'Settings', to: '/settings' },
    ],
  },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <Box
      sx={{
        width: 346,
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          height: 'calc(100vh - 32px)',
          position: 'sticky',
          top: 16,
          bgcolor: '#fff',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '30px',
          px: 3.5,
          py: 3.5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 800,
            color: '#182033',
            lineHeight: 1.1,
          }}
        >
          HirePilot
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: 'inline-flex',
            alignSelf: 'flex-start',
            px: 2.5,
            py: 1.1,
            bgcolor: '#EEF2FF',
            color: '#5B4CF0',
            borderRadius: '999px',
            fontWeight: 700,
            fontSize: '0.95rem',
          }}
        >
          AI Recruiting OS
        </Box>

        <Box
          sx={{
            mt: 3.5,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '18px',
            px: 2.5,
            py: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#182033' }}>
            Acme Talent Team
          </Typography>
          <KeyboardArrowDownIcon sx={{ color: '#98A2B3' }} />
        </Box>

        <Box sx={{ mt: 4, flex: 1 }}>
          {sections.map((section) => (
            <Box key={section.title} sx={{ mb: 3.5 }}>
              <Typography
                sx={{
                  mb: 1.3,
                  color: '#98A2B3',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                }}
              >
                {section.title}
              </Typography>

              <List disablePadding>
                {section.items.map((item) => {
                  const active = location.pathname === item.to
                  return (
                    <ListItemButton
                      key={item.label}
                      component={NavLink}
                      to={item.to}
                      sx={{
                        mb: 0.5,
                        borderRadius: '18px',
                        px: 3,
                        py: 1.7,
                        color: active ? '#5B4CF0' : '#6F7B91',
                        bgcolor: active ? '#EEF2FF' : 'transparent',
                        '&:hover': {
                          bgcolor: active ? '#EEF2FF' : '#F8FAFC',
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: '1rem',
                          fontWeight: active ? 700 : 500,
                        }}
                      />
                    </ListItemButton>
                  )
                })}
              </List>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '22px',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 1.8,
          }}
        >
          <Avatar
            sx={{
              width: 42,
              height: 42,
              bgcolor: '#E3E7FF',
              color: '#5B4CF0',
              fontWeight: 800,
            }}
          >
            RK
          </Avatar>

          <Box>
            <Typography sx={{ fontWeight: 700, color: '#182033', fontSize: '1rem' }}>
              Riya Kapoor
            </Typography>
            <Typography sx={{ color: '#7B8598', fontSize: '0.95rem' }}>
              Lead Recruiter
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}