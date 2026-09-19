"use client";

import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BuildIcon from "@mui/icons-material/Build";
import DescriptionIcon from "@mui/icons-material/Description";
import FlightIcon from "@mui/icons-material/Flight";
import ShieldIcon from "@mui/icons-material/Shield";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const features = [
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 32 }} />,
    title: "KYC-Verified Tenants",
    desc: "Every tenant is screened with Aadhaar/PAN verification, rental history checks, and employment validation.",
    color: "#1a3c5e",
  },
  {
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 32 }} />,
    title: "Transparent Rent Tracking",
    desc: "Online rent collection via UPI/Razorpay with automated receipts, TDS data, and real-time payment status.",
    color: "#2e7d52",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 32 }} />,
    title: "Managed Maintenance",
    desc: "Tenants raise issues; we assign vetted vendors, get quotes approved, and close tickets — no landlord hassle.",
    color: "#7b3f00",
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: 32 }} />,
    title: "Digital Agreements",
    desc: "Rental agreements drafted, e-signed and stored digitally. Compliant with Telangana registration norms.",
    color: "#4a148c",
  },
  {
    icon: <FlightIcon sx={{ fontSize: 32 }} />,
    title: "NRI Property Management",
    desc: "Full end-to-end management for non-resident owners. Monthly reports, inspections, and remittance tracking.",
    color: "#b71c1c",
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 32 }} />,
    title: "Optra Shield",
    desc: "Optional property and rental income protection through licensed insurance partners. Coming soon.",
    color: "#e8a838",
  },
  {
    icon: <AssessmentIcon sx={{ fontSize: 32 }} />,
    title: "Owner Reports & Insights",
    desc: "Monthly statements, occupancy history, rent received, and maintenance costs — all in your owner portal.",
    color: "#0277bd",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
    title: "Dedicated Property Manager",
    desc: "Every property gets a dedicated manager reachable via WhatsApp, phone, and email.",
    color: "#2e7d52",
  },
];

export default function WhyOptraLiving() {
  return (
    <Box
      component="section"
      id="owners"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: "background.paper" }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="overline"
            sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: 2 }}
          >
            WHY OPTRA LIVING
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 0.5 }}
          >
            Everything. Managed.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1, maxWidth: 540, mx: "auto" }}
          >
            We handle the full property management lifecycle so you don&apos;t
            have to.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: feature.color,
                    boxShadow: `0 8px 32px ${feature.color}22`,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2.5,
                    backgroundColor: `${feature.color}14`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                    color: feature.color,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ mb: 1, fontSize: "1rem", fontWeight: 700 }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {feature.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
