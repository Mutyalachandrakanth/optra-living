"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import Image from "next/image";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GroupsIcon from "@mui/icons-material/Groups";

const values = [
  {
    icon: <GpsFixedIcon sx={{ fontSize: 22 }} />,
    title: "Precision",
    desc: "Every process — from tenant verification to maintenance — follows a defined, accountable workflow.",
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 22 }} />,
    title: "Transparency",
    desc: "Owners see everything. Rent status, maintenance costs, inspection results — all visible in real time.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 22 }} />,
    title: "Relationships",
    desc: "We build long-term relationships with owners and tenants, not one-time transactions.",
  },
];

export default function AboutCompany() {
  return (
    <Box
      component="section"
      id="about"
      sx={{ py: { xs: 9, md: 13 }, backgroundColor: "background.paper" }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left — image block */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative" }}>
              {/* Main image */}
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  height: { xs: 300, md: 480 },
                  position: "relative",
                  boxShadow: "0 24px 64px rgba(26,60,94,0.16)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                  alt="Optra Living office team"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(10,28,50,0.5) 100%)",
                  }}
                />
              </Box>

              {/* Floating company tag */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  bottom: -24,
                  right: -24,
                  p: 2.5,
                  borderRadius: 3,
                  minWidth: 180,
                  border: "1px solid rgba(26,60,94,0.1)",
                  boxShadow: "0 8px 32px rgba(26,60,94,0.12)",
                  backgroundColor: "background.paper",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 2,
                      background: "linear-gradient(135deg, #1a3c5e, #2d5f8a)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <HomeWorkIcon sx={{ color: "#e8a838", fontSize: 18 }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.disabled",
                        display: "block",
                        lineHeight: 1,
                      }}
                    >
                      A DIVISION OF
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "primary.main", fontWeight: 800 }}
                    >
                      Optra Serve
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ mb: 1 }} />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  Technology-first property management
                  <br />
                  built for Hyderabad.
                </Typography>
              </Paper>
            </Box>
          </Grid>

          {/* Right — content */}
          <Grid item xs={12} md={7}>
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
              ABOUT OPTRA LIVING
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.7rem" },
                lineHeight: 1.15,
                mb: 3,
              }}
            >
              Property Management
              <br />
              <Box component="span" sx={{ color: "primary.main" }}>
                Done Properly.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.95, mb: 2.5, fontSize: "1.03rem" }}
            >
              Optra Living is a professional property letting and management
              service based in Hyderabad, operating as a division of{" "}
              <strong style={{ color: "#1a3c5e" }}>Optra Serve</strong> — a
              technology services company. We bring a structured, process-driven
              approach to an industry that has historically relied on informal
              arrangements.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.95, mb: 2.5, fontSize: "1.03rem" }}
            >
              Our platform is purpose-built for the Indian market — specifically
              Hyderabad and Telangana — with deep respect for local tenancy
              norms, Indian regulatory requirements, and the trust that owners
              and tenants place in us.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.95, mb: 4, fontSize: "1.03rem" }}
            >
              Whether you are a local landlord with a single apartment, a
              portfolio owner with multiple properties, or an NRI entrusting us
              with your Hyderabad home from overseas — we treat every property
              as if it were our own.
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Values */}
            <Stack spacing={3}>
              {values.map((v) => (
                <Box
                  key={v.title}
                  sx={{ display: "flex", gap: 2.5, alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      flexShrink: 0,
                      bgcolor: "rgba(26,60,94,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                    }}
                  >
                    {v.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 700, mb: 0.4 }}
                    >
                      {v.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.75 }}
                    >
                      {v.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* Regulatory note */}
            <Box
              sx={{
                mt: 4.5,
                p: 2.5,
                borderRadius: 2.5,
                bgcolor: "rgba(26,60,94,0.04)",
                border: "1px solid rgba(26,60,94,0.08)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "text.disabled",
                  lineHeight: 1.7,
                  display: "block",
                }}
              >
                <strong>Regulatory note:</strong> Optra Living is a property
                management services company. We are not a real estate broker,
                insurance company, law firm or financial advisor. Where
                regulated services are required (RERA registration, insurance
                products, legal documentation, tax advice), we work with and
                refer you to appropriately licensed third-party professionals.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
