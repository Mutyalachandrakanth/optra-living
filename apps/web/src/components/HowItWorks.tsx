"use client";

import { Box, Container, Grid, Typography, Paper, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentIcon from "@mui/icons-material/Assignment";
import KeyIcon from "@mui/icons-material/Key";
import AddHomeIcon from "@mui/icons-material/AddHome";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import HandshakeIcon from "@mui/icons-material/Handshake";

const tenantSteps = [
  {
    step: "01",
    icon: <SearchIcon sx={{ fontSize: 28, color: "secondary.main" }} />,
    title: "Discover & Enquire",
    desc: "Browse verified listings. Schedule a visit directly on the platform.",
  },
  {
    step: "02",
    icon: <AssignmentIcon sx={{ fontSize: 28, color: "secondary.main" }} />,
    title: "Apply & KYC",
    desc: "Submit your application with Aadhaar/PAN verification. Fully digital, secure.",
  },
  {
    step: "03",
    icon: <KeyIcon sx={{ fontSize: 28, color: "secondary.main" }} />,
    title: "Move In & Manage",
    desc: "Sign the agreement, pay online, and manage everything through your tenant portal.",
  },
];

const ownerSteps = [
  {
    step: "01",
    icon: <AddHomeIcon sx={{ fontSize: 28, color: "primary.main" }} />,
    title: "List Your Property",
    desc: "Add property details, photos, and documents. Our team verifies within 48 hours.",
  },
  {
    step: "02",
    icon: <PersonSearchIcon sx={{ fontSize: 28, color: "primary.main" }} />,
    title: "We Find Tenants",
    desc: "We advertise, screen, and KYC-verify tenants so you get reliable, vetted occupants.",
  },
  {
    step: "03",
    icon: <HandshakeIcon sx={{ fontSize: 28, color: "primary.main" }} />,
    title: "Sit Back & Earn",
    desc: "We manage rent collection, maintenance, inspections and monthly reporting for you.",
  },
];

function StepCard({
  step,
  icon,
  title,
  desc,
  accentColor,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  accentColor: string;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: 4,
          height: "100%",
          backgroundColor: accentColor,
          borderRadius: "3px 0 0 3px",
        },
      }}
    >
      <Box
        sx={{
          fontSize: "3rem",
          fontWeight: 800,
          color: accentColor,
          opacity: 0.12,
          lineHeight: 1,
          mb: 1,
          fontFamily: '"Playfair Display", serif',
        }}
      >
        {step}
      </Box>
      <Box sx={{ mb: 1.5 }}>{icon}</Box>
      <Typography
        variant="h6"
        sx={{ mb: 1, fontWeight: 700, fontSize: "1rem" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ lineHeight: 1.7 }}
      >
        {desc}
      </Typography>
    </Paper>
  );
}

export default function HowItWorks() {
  return (
    <Box
      component="section"
      id="services"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#f0f4f8" }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="overline"
            sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: 2 }}
          >
            SIMPLE PROCESS
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 0.5 }}
          >
            How It Works
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 1, maxWidth: 520, mx: "auto" }}
          >
            Whether you&apos;re a tenant looking for a home or an owner with a
            property to let — our process is transparent and hassle-free.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* For Tenants */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 3,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: "rgba(232,168,56,0.1)",
                width: "fit-content",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, color: "secondary.dark" }}
              >
                🏠 For Tenants
              </Typography>
            </Box>
            <Stack spacing={2}>
              {tenantSteps.map((s) => (
                <StepCard key={s.step} {...s} accentColor="#e8a838" />
              ))}
            </Stack>
          </Grid>

          {/* For Owners */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 3,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: "rgba(26,60,94,0.08)",
                width: "fit-content",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, color: "primary.main" }}
              >
                🏢 For Property Owners
              </Typography>
            </Box>
            <Stack spacing={2}>
              {ownerSteps.map((s) => (
                <StepCard key={s.step} {...s} accentColor="#1a3c5e" />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
