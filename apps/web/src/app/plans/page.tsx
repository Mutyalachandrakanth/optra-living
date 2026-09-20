'use client';

import {
  Box, Container, Typography, Grid, Paper, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Button,
  Chip, Stack, Divider, List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import BuildIcon from '@mui/icons-material/Build';
import TuneIcon from '@mui/icons-material/Tune';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plans = [
  {
    icon: <StarIcon sx={{ fontSize: 28 }} />,
    name: 'End-to-End Management',
    tagline: 'Full-service property management from listing to handover and beyond.',
    color: '#1a3c5e',
    lightColor: '#e8f0f8',
    term: '1 Year (renewable)',
    fee: '1.25 × Monthly Rent',
    feeSub: 'Year 1 service fee',
    renewalFee: '0.5 × Monthly Rent',
    renewalNote: 'Subsequent years if same tenant stays',
    badge: 'Most Popular',
    features: [
      'Professional listing, photography & walkthrough video',
      'Multi-portal marketing & tenant sourcing',
      'Full KYC verification & background check',
      'Lease drafting & digital agreement execution',
      'Rent collection, reminders & monthly owner statement',
      'Maintenance coordination with vetted vendors',
      'Periodic inspections (every 6 months)',
      'Dedicated property manager',
      'NRI-friendly remote management',
      'Tenant replacement: 1 month rent',
    ],
  },
  {
    icon: <CheckCircleIcon sx={{ fontSize: 28 }} />,
    name: 'Rental Management',
    tagline: 'Tenant discovery, verification and handover — we find the right tenant fast.',
    color: '#2e7d52',
    lightColor: '#e8f5ee',
    term: 'Till property is handed over to tenant',
    fee: '1 × Monthly Rent',
    feeSub: 'One-time placement fee',
    renewalFee: null,
    renewalNote: null,
    badge: null,
    features: [
      'Professional listing with photos & description',
      'Multi-platform advertising & WhatsApp network',
      'Tenant shortlisting & viewing coordination',
      'KYC, identity & employment verification',
      'Basic lease drafting & execution support',
      'Move-in documentation & handover report',
    ],
  },
  {
    icon: <TuneIcon sx={{ fontSize: 28 }} />,
    name: 'Custom Management',
    tagline: 'Pick and combine exactly the services your property needs.',
    color: '#4a148c',
    lightColor: '#f3edf9',
    term: '1 Year',
    fee: 'Custom Quotation',
    feeSub: 'Based on services selected',
    renewalFee: null,
    renewalNote: null,
    badge: null,
    features: [
      'Select individual services à la carte',
      'Ideal for partially self-managed properties',
      'Maintenance-only or inspection-only packages',
      'Rent collection only packages available',
      'NRI reporting and compliance support',
      'Quoted transparently with no hidden fees',
    ],
  },
];

const tiers = [
  {
    name: 'Monthly Flex',
    managementFee: '10.0% of Monthly Rent',
    photography: 'Included',
    placementFee: '20 Days\' Rent',
    replacementShield: '6 Months',
    kyc: '1 Check Included',
    inspections: 'Every 6 Months',
    fieldVisits: '2 Free / Year',
    maintenanceFee: 'Direct Cost + 10%',
    tenantReplacement: '1 Month\'s Rent',
    highlight: false,
    badge: null,
  },
  {
    name: 'Yearly Advance',
    managementFee: '9.0% of Monthly Rent',
    photography: 'Included',
    placementFee: '20 Days\' Rent',
    replacementShield: '6 Months',
    kyc: '1 Check Included',
    inspections: 'Every 6 Months',
    fieldVisits: '2 Free / Year',
    maintenanceFee: 'Direct Cost + 10%',
    tenantReplacement: '1 Month\'s Rent',
    highlight: false,
    badge: null,
  },
  {
    name: 'Founding Charter',
    managementFee: '7.5% of Monthly Rent',
    photography: 'Included (Priority)',
    placementFee: '20 Days\' Rent (30% Disc.)',
    replacementShield: '6 Months',
    kyc: '1 Check Included',
    inspections: 'Every 6 Months',
    fieldVisits: '2 Free / Year',
    maintenanceFee: 'Direct Cost + 10%',
    tenantReplacement: '1 Month\'s Rent',
    highlight: true,
    badge: 'First 50 Clients',
    note: '2-Year Lock-in',
  },
];

const tableRows = [
  { label: 'Management Fee (Monthly)', key: 'managementFee', bold: true },
  { label: 'Field Photography & Walkthrough Video', key: 'photography' },
  { label: 'Placement Fee (Multi-Vendor Ads)', key: 'placementFee' },
  { label: '6-Month Replacement Shield', key: 'replacementShield' },
  { label: 'Verified KYC Check', key: 'kyc' },
  { label: 'Periodic Digital Condition Audits', key: 'inspections' },
  { label: 'Complimentary Field Visits', key: 'fieldVisits' },
  { label: 'Maintenance Coordination Fee', key: 'maintenanceFee' },
  { label: 'Tenant Replacement Fee', key: 'tenantReplacement', bold: true },
];

export default function PlansPage() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          header, nav, .no-print { display: none !important; }
          .print-page { padding: 0 !important; }
          body { background: white !important; }
          .MuiPaper-root { box-shadow: none !important; border: 1px solid #ddd !important; }
          @page { margin: 20mm; size: A4; }
        }
      `}</style>

      <Navbar />

      {/* Hero */}
      <Box sx={{
        pt: { xs: 14, md: 16 }, pb: { xs: 6, md: 8 },
        background: 'linear-gradient(160deg, #0c2237 0%, #1a3c5e 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <Box sx={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 640 }}>
            <Typography variant="overline"
              sx={{ color: '#e8a838', fontWeight: 700, letterSpacing: 2.5, display: 'block', mb: 1.5 }}>
              PRICING & PLANS
            </Typography>
            <Typography variant="h1" sx={{
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              color: 'white', lineHeight: 1.15, mb: 2,
              fontFamily: '"Playfair Display", serif',
            }}>
              Transparent Plans.
              <br />
              <Box component="span" sx={{
                background: 'linear-gradient(90deg, #e8a838 0%, #f5c842 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                No Hidden Fees.
              </Box>
            </Typography>
            <Typography variant="body1"
              sx={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.9, maxWidth: 520, fontSize: '1.03rem' }}>
              Choose the plan that fits your property needs. All plans include a dedicated manager,
              verified tenants and full documentation.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box className="print-page" sx={{ backgroundColor: '#f8f9fb', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="xl">

          {/* ── PLAN CARDS ── */}
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography variant="overline"
              sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2.5, display: 'block', mb: 1 }}>
              MANAGEMENT PLANS
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 1 }}>
              Pick Your Level of Service
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
              One-time or ongoing — structured to match how involved you want to be.
            </Typography>

            <Grid container spacing={3}>
              {plans.map((plan) => (
                <Grid item xs={12} md={4} key={plan.name}>
                  <Paper elevation={0} sx={{
                    p: 4, height: '100%', borderRadius: 3,
                    border: `2px solid`,
                    borderColor: plan.badge ? plan.color : 'rgba(26,60,94,0.1)',
                    display: 'flex', flexDirection: 'column',
                    position: 'relative', overflow: 'hidden',
                    boxShadow: plan.badge ? `0 8px 32px ${plan.color}22` : 'none',
                  }}>
                    {plan.badge && (
                      <Box sx={{
                        position: 'absolute', top: 16, right: 16,
                        bgcolor: plan.color, color: 'white',
                        px: 1.5, py: 0.4, borderRadius: 10,
                        fontSize: '0.72rem', fontWeight: 700, letterSpacing: 0.5,
                      }}>
                        {plan.badge}
                      </Box>
                    )}

                    <Box sx={{
                      width: 52, height: 52, borderRadius: 2.5, mb: 2.5,
                      bgcolor: plan.lightColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: plan.color,
                    }}>
                      {plan.icon}
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: plan.color }}>
                      {plan.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                      {plan.tagline}
                    </Typography>

                    <Divider sx={{ mb: 3 }} />

                    {/* Pricing */}
                    <Box sx={{ mb: 3, p: 2.5, bgcolor: plan.lightColor, borderRadius: 2 }}>
                      <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', mb: 0.5, fontWeight: 600, letterSpacing: 0.5 }}>
                        SERVICE FEE
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: plan.color, lineHeight: 1.2 }}>
                        {plan.fee}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">{plan.feeSub}</Typography>

                      {plan.renewalFee && (
                        <Box sx={{ mt: 1.5, pt: 1.5, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                          <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', fontWeight: 600 }}>
                            RENEWAL
                          </Typography>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: plan.color }}>
                            {plan.renewalFee}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">{plan.renewalNote}</Typography>
                        </Box>
                      )}

                      <Box sx={{ mt: 1.5, pt: 1.5, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                        <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block', fontWeight: 600 }}>
                          TERM
                        </Typography>
                        <Typography variant="caption" color="text.secondary">{plan.term}</Typography>
                      </Box>
                    </Box>

                    {/* Features */}
                    <List dense disablePadding sx={{ flex: 1 }}>
                      {plan.features.map((f) => (
                        <ListItem key={f} disablePadding sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <CheckIcon sx={{ fontSize: 15, color: plan.color }} />
                          </ListItemIcon>
                          <ListItemText primary={f}
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', lineHeight: 1.6 }} />
                        </ListItem>
                      ))}
                    </List>

                    <Button variant="contained" fullWidth href="#contact"
                      sx={{
                        mt: 3, py: 1.4, borderRadius: 2, fontWeight: 700,
                        bgcolor: plan.color,
                        '&:hover': { bgcolor: plan.color, opacity: 0.9, boxShadow: `0 6px 20px ${plan.color}40` },
                      }}>
                      Get Started
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* ── TIERS TABLE ── */}
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} mb={4} spacing={2}>
              <Box>
                <Typography variant="overline"
                  sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2.5, display: 'block', mb: 1 }}>
                  ONGOING MANAGEMENT TIERS
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                  End-to-End Management Tiers
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  Applies to End-to-End Management plan — choose your billing preference.
                </Typography>
              </Box>
              <Button
                variant="outlined" color="primary" startIcon={<DownloadIcon />}
                onClick={handleDownloadPDF}
                className="no-print"
                sx={{ fontWeight: 700, px: 3, py: 1.4, borderRadius: 2, whiteSpace: 'nowrap', borderWidth: 2, '&:hover': { borderWidth: 2 } }}>
                Download PDF
              </Button>
            </Stack>

            <TableContainer component={Paper} elevation={0} sx={{
              borderRadius: 3, border: '1px solid rgba(26,60,94,0.1)',
              overflow: 'hidden',
            }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f0f4f8' }}>
                    <TableCell sx={{ fontWeight: 700, fontSize: '0.9rem', py: 2.5, width: '34%', color: 'text.primary' }}>
                      Service Feature
                    </TableCell>
                    {tiers.map((tier) => (
                      <TableCell key={tier.name} align="center"
                        sx={{
                          fontWeight: 700, fontSize: '0.9rem', py: 2.5, width: '22%',
                          bgcolor: tier.highlight ? '#1a3c5e' : 'transparent',
                          color: tier.highlight ? 'white' : 'text.primary',
                        }}>
                        <Box>
                          {tier.name}
                          {tier.badge && (
                            <Chip label={tier.badge} size="small" sx={{
                              display: 'block', mx: 'auto', mt: 0.75,
                              bgcolor: '#e8a838', color: '#0f2540',
                              fontWeight: 700, fontSize: '0.68rem', height: 20,
                            }} />
                          )}
                          {tier.note && (
                            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: '#f5c842', fontWeight: 600 }}>
                              {tier.note}
                            </Typography>
                          )}
                        </Box>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableRows.map((row, idx) => (
                    <TableRow key={row.label}
                      sx={{ bgcolor: idx % 2 === 0 ? 'white' : '#f8f9fb' }}>
                      <TableCell sx={{
                        fontWeight: row.bold ? 700 : 400,
                        color: 'text.primary', py: 2, fontSize: '0.875rem',
                      }}>
                        {row.label}
                      </TableCell>
                      {tiers.map((tier) => (
                        <TableCell key={tier.name} align="center"
                          sx={{
                            py: 2, fontSize: '0.875rem',
                            fontWeight: tier.highlight ? 700 : 400,
                            color: tier.highlight ? '#1a3c5e' : 'text.secondary',
                            bgcolor: tier.highlight ? 'rgba(26,60,94,0.04)' : 'transparent',
                            borderLeft: tier.highlight ? '2px solid rgba(26,60,94,0.15)' : 'none',
                            borderRight: tier.highlight ? '2px solid rgba(26,60,94,0.15)' : 'none',
                          }}>
                          {tier[row.key as keyof typeof tier] as string}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Notes */}
            <Box sx={{ mt: 3, p: 3, bgcolor: 'rgba(26,60,94,0.04)', borderRadius: 2, border: '1px solid rgba(26,60,94,0.08)' }}>
              <Stack direction="row" gap={1} alignItems="flex-start">
                <InfoOutlinedIcon sx={{ fontSize: 18, color: 'text.disabled', mt: 0.2, flexShrink: 0 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.8, display: 'block' }}>
                    <strong>Placement fee</strong> applies when a new tenant is placed. <strong>Tenant replacement fee</strong> is 1 month's rent and applies if a tenant exits within the agreement term and a new tenant is required. <strong>Founding Charter</strong> is available to the first 50 landlords only and requires a 2-year commitment. All fees are exclusive of GST where applicable. Management fees are charged on rent collected.
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>

          {/* ── CTA ── */}
          <Paper elevation={0} sx={{
            p: { xs: 4, md: 6 }, borderRadius: 3, textAlign: 'center',
            background: 'linear-gradient(135deg, #1a3c5e 0%, #2d5f8a 100%)',
          }}>
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 1.5, fontFamily: '"Playfair Display", serif' }}>
              Not sure which plan is right for you?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.68)', mb: 4, maxWidth: 500, mx: 'auto' }}>
              Speak to our team — we&apos;ll recommend the right plan based on your property and goals.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button variant="contained" color="secondary" size="large" href="/#contact"
                sx={{ fontWeight: 700, px: 4, py: 1.5, borderRadius: 2.5, color: '#0f2540' }}>
                Talk to Us
              </Button>
              <Button variant="outlined" size="large" href="/"
                sx={{
                  fontWeight: 600, px: 4, py: 1.5, borderRadius: 2.5,
                  color: 'white', borderColor: 'rgba(255,255,255,0.35)', borderWidth: 1.5,
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.07)', borderWidth: 1.5 },
                }}>
                Back to Home
              </Button>
            </Stack>
          </Paper>

        </Container>
      </Box>

      <Footer />
    </>
  );
}

