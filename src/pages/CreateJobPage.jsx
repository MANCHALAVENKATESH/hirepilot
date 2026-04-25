import { Box, Typography } from '@mui/material'

import AppShell from '../components/layout/AppShell'
import AppCard from '../components/ui/AppCard'
import AppBadge from '../components/ui/AppBadge'
import AppButton from '../components/ui/AppButton'
import SearchBar from '../components/ui/SearchBar'
import ProgressBar from '../components/ui/ProgressBar'


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

function SegButton({ label, active = false }) {
  return (
    <Box
      sx={{
        height: 52,
        minWidth: 150,
        px: 3,
        borderRadius: '18px',
        border: '1px solid',
        borderColor: active ? 'transparent' : '#E7EBF3',
        bgcolor: active ? '#EEF2FF' : '#fff',
        color: active ? '#5B4CF0' : '#6F7B91',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: active ? 700 : 500,
        fontSize: '1rem',
      }}
    >
      {label}
    </Box>
  )
}

export default function CreateJobPage() {
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
          <Typography sx={{ color: '#98A2B3', fontSize: '0.95rem', mb: 1 }}>
            Jobs / Create
          </Typography>

          <Typography
            sx={{
              fontSize: '3rem',
              fontWeight: 700,
              lineHeight: 1.08,
              color: '#182033',
            }}
          >
            Create Job
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              color: '#7B8598',
              fontSize: '1.1rem',
            }}
          >
            Add a new role and configure hiring workflow.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <AppButton
            variant="outlined"
            sx={{
              minWidth: 140,
              height: 58,
              borderRadius: '18px',
              fontWeight: 700,
            }}
          >
            Save Draft
          </AppButton>

          <AppButton
            sx={{
              minWidth: 160,
              height: 58,
              borderRadius: '18px',
              fontWeight: 700,
            }}
          >
            Publish Job
          </AppButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', xl: '1.75fr 0.6fr' },
          gap: 3,
          alignItems: 'start',
        }}
      >
        <AppCard sx={{ p: 4 }}>
          <Typography sx={{ fontSize: '1.7rem', fontWeight: 700, color: '#182033' }}>
            Role Details
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
              <FieldLabel>Job Title</FieldLabel>
              <AppInput defaultValue="Senior Frontend Engineer" />
            </Box>

            <Box>
              <FieldLabel>Department</FieldLabel>
              <AppInput defaultValue="Engineering" />
            </Box>

            <Box>
              <FieldLabel>Location</FieldLabel>
              <AppInput defaultValue="Bangalore" />
            </Box>

            <Box>
              <FieldLabel>Employment Type</FieldLabel>
              <AppInput defaultValue="Full-time" />
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <FieldLabel>Experience Range</FieldLabel>
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              <SegButton label="0–2 yrs" />
              <SegButton label="3–5 yrs" />
              <SegButton label="4–6 yrs" active />
              <SegButton label="7+ yrs" />
            </Box>
          </Box>

          <Box sx={{ mt: 5, borderTop: '1px solid #EEF1F6' }} />

          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Job Description
            </Typography>

            <Box
              sx={{
                mt: 3,
                minHeight: 220,
                border: '1px solid #E7EBF3',
                borderRadius: '22px',
                bgcolor: '#fff',
                p: 3,
                color: '#7B8598',
                fontSize: '1rem',
                lineHeight: 1.7,
              }}
            >
              We are looking for a Senior Frontend Engineer with strong experience in
              React, TypeScript, modern UI systems, and scalable application architecture...
            </Box>
          </Box>

          <Box sx={{ mt: 5, borderTop: '1px solid #EEF1F6' }} />

          <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Skills Required
            </Typography>

            <Box sx={{ mt: 2, display: 'flex', gap: 1.2, flexWrap: 'wrap' }}>
              <AppBadge label="React" color="default" />
              <AppBadge label="TypeScript" color="default" />
              <AppBadge label="Next.js" color="default" />
              <AppBadge label="System Design" color="default" />
            </Box>
          </Box>
        </AppCard>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Hiring Setup
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
              <Typography sx={{ fontWeight: 700, color: '#182033' }}>Workflow</Typography>
              <Typography sx={{ mt: 1.2, color: '#7B8598' }}>
                Screening → Assessment → Interview → Offer
              </Typography>
            </Box>

            <Box
              sx={{
                mt: 2,
                p: 2.8,
                border: '1px solid #E7EBF3',
                borderRadius: '22px',
                bgcolor: '#F8FAFD',
              }}
            >
              <Typography sx={{ fontWeight: 700, color: '#182033' }}>AI Matching</Typography>
              <Typography sx={{ mt: 1.2, color: '#7B8598' }}>
                Enabled for shortlist recommendations
              </Typography>
            </Box>
          </AppCard>

          <AppCard sx={{ p: 4 }}>
            <Typography sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#182033' }}>
              Actions
            </Typography>

            <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <AppButton sx={{ height: 56, borderRadius: '18px', fontWeight: 700 }}>
                Publish Job
              </AppButton>
              <AppButton
                variant="outlined"
                sx={{ height: 56, borderRadius: '18px', fontWeight: 700 }}
              >
                Save Draft
              </AppButton>
            </Box>
          </AppCard>
        </Box>
      </Box>
    </AppShell>
  )
}