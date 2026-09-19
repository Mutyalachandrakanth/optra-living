"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BuildIcon from "@mui/icons-material/Build";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ShieldIcon from "@mui/icons-material/Shield";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CheckIcon from "@mui/icons-material/Check";

const services = [
  {
    icon: <SearchIcon sx={{ fontSize: 26 }} />,
    color: "#1a3c5e",
    number: "01",
    title: "Tenant Discovery & Letting",
    summary:
      "We find the right tenant for your property — not just the first available one.",
    points: [
      "Professional listing with photos & description",
      "Marketing across portals & WhatsApp networks",
      "Shortlisting based on income & rental history",
      "Viewing coordination with feedback reports",
    ],
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 26 }} />,
    color: "#2e7d52",
    number: "02",
    title: "Tenant KYC & Verification",
    summary:
      "Every tenant is identity-checked, employment-verified and reference-confirmed before move-in.",
    points: [
      "Aadhaar & PAN identity verification",
      "Employment and income validation",
      "Previous landlord reference checks",
      "Secure digital KYC document storage",
    ],
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 26 }} />,
    color: "#4a148c",
    number: "03",
    title: "Lease & Agreement Management",
    summary:
      "Legally sound rental agreements prepared, executed digitally and stored securely.",
    points: [
      "Telangana-compliant agreement drafting",
      "Digital signing & cloud storage",
      "Renewal reminders & notice management",
      "Registration support where required",
    ],
    note: "Legal review by an advocate is recommended.",
  },
  {
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 26 }} />,
    color: "#1565c0",
    number: "04",
    title: "Rent Collection & Tracking",
    summary:
      "Online rent collection with automated reminders, instant receipts and monthly owner payouts.",
    points: [
      "UPI, NEFT & Razorpay payment support",
      "Automated tenant payment reminders",
      "Instant digital rent receipts",
      "TDS-relevant records for NRI owners",
    ],
  },
  {
    icon: <BuildIcon sx={{ fontSize: 26 }} />,
    color: "#e65100",
    number: "05",
    title: "Maintenance & Repairs",
    summary:
      "Tenants report issues; we assign verified vendors, get quotes and close jobs — with zero calls to you.",
    points: [
      "Tenant-facing maintenance request portal",
      "Network of vetted local technicians",
      "Owner approval for significant works",
      "Completed job documentation & invoices",
    ],
  },
  {
    icon: <HomeWorkIcon sx={{ fontSize: 26 }} />,
    color: "#00695c",
    number: "06",
    title: "Property Inspections",
    summary:
      "Scheduled inspections with photo evidence keep your property in perfect condition and disputes off the table.",
    points: [
      "Move-in & move-out condition reports",
      "Periodic inspections (quarterly / bi-annual)",
      "Photographic documentation shared digitally",
      "Security deposit reconciliation support",
    ],
  },
  {
    icon: <FlightTakeoffIcon sx={{ fontSize: 26 }} />,
    color: "#c62828",
    number: "07",
    title: "NRI Property Management",
    summary:
      "Full remote management for non-resident owners. You stay informed; we handle everything on the ground.",
    points: [
      "Dedicated local property manager",
      "WhatsApp & email reporting",
      "Monthly video inspection on request",
      "GST/TDS data for your CA or tax advisor",
    ],
    note: "Consult your CA for NRI tax & FEMA compliance.",
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 26 }} />,
    color: "#b8860b",
    number: "08",
    title: "Optra Shield",
    summary:
      "Optional protection for your property and rental income, offered through licensed insurance partners.",
    points: [
      "Rental income protection against default",
      "Structural & contents insurance options",
      "Facilitated via licensed intermediaries only",
      "Register your interest — launching soon",
    ],
    note: "Insurance is provided by IRDA-licensed partners only.",
    badge: "Coming Soon",
  },
  {
    icon: <AssessmentIcon sx={{ fontSize: 26 }} />,
    color: "#0277bd",
    number: "09",
    title: "Owner Reporting & Insights",
    summary:
      "Real-time visibility into rent, maintenance, inspections and documents — all in your owner portal.",
    points: [
      "Monthly income & expense statement",
      "Live rent payment & deposit status",
      "Maintenance logs with invoices",
      "Secure document vault",
    ],
  },
];

export default function Services() {
  return (
    <Box
      component="section"
      id="services"
      sx={{ py: { xs: 9, md: 12 }, backgroundColor: "#f8f9fb" }}
    >
      <Container maxWidth="xl">
        {/* Section header */}
        <Box sx={{ maxWidth: 600, mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              fontWeight: 700,
              letterSpacing: 2.5,
              display: "block",
              mb: 1.5,
            }}
          >
            OUR SERVICES
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            Everything Your Property Needs.
            <br />
            <Box component="span" sx={{ color: "primary.main" }}>
              All Under One Roof.
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.9, fontSize: "1.03rem" }}
          >
            Optra Living manages the complete property lifecycle — from finding
            the right tenant to collecting rent and handling repairs. You stay
            in control; we do the work.
          </Typography>
        </Box>

        {/* Service cards grid */}
        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} lg={4} key={service.number}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "rgba(26,60,94,0.09)",
                  backgroundColor: "background.paper",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    borderColor: service.color,
                    boxShadow: `0 8px 32px ${service.color}18`,
                  },
                }}
              >
                {/* Card top row: icon + number */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    mb: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2.5,
                      flexShrink: 0,
                      backgroundColor: `${service.color}12`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {service.badge && (
                      <Chip
                        label={service.badge}
                        size="small"
                        sx={{
                          bgcolor: "#fff8e1",
                          color: "#b8860b",
                          border: "1px solid #f0d060",
                          fontWeight: 700,
                          fontSize: "0.68rem",
                        }}
                      />
                    )}
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.disabled",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        letterSpacing: 1,
                      }}
                    >
                      {service.number}
                    </Typography>
                  </Box>
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    fontSize: "1.05rem",
                    lineHeight: 1.35,
                  }}
                >
                  {service.title}
                </Typography>

                {/* Summary */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.8, mb: 2.5, fontSize: "0.9rem" }}
                >
                  {service.summary}
                </Typography>

                <Divider sx={{ mb: 2.5, borderColor: "rgba(26,60,94,0.07)" }} />

                {/* Bullet points */}
                <Stack spacing={1.2} sx={{ flex: 1 }}>
                  {service.points.map((point) => (
                    <Box
                      key={point}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.25,
                      }}
                    >
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          flexShrink: 0,
                          mt: 0.15,
                          backgroundColor: `${service.color}14`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CheckIcon
                          sx={{ fontSize: 11, color: service.color }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.65,
                          fontSize: "0.875rem",
                        }}
                      >
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {/* Regulatory note */}
                {service.note && (
                  <Typography
                    variant="caption"
                    sx={{
                      display: "block",
                      mt: 2.5,
                      color: "text.disabled",
                      fontStyle: "italic",
                      lineHeight: 1.6,
                    }}
                  >
                    * {service.note}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
