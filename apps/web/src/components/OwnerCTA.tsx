"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";

const ownerBenefits = [
  "One dedicated property manager assigned to your property",
  "Tenant KYC, reference and background verification",
  "Digital rent collection with automated owner payouts",
  "Periodic property inspections with photographic reports",
  "Maintenance coordination — zero calls to you",
  "Secure digital storage for all agreements and documents",
  "Monthly financial statement for every property",
  "NRI-friendly management — fully remote, fully transparent",
];

export default function OwnerCTA() {
  return (
    <Box
      component="section"
      id="owner-cta"
      sx={{
        py: { xs: 9, md: 12 },
        background:
          "linear-gradient(160deg, #0c2237 0%, #1a3c5e 60%, #0f2540 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle pattern overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gold accent */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 400,
          height: 400,
          borderRadius: "50%",
          bgcolor: "#e8a838",
          opacity: 0.04,
          transform: "translate(30%, -30%)",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          {/* Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{
                color: "#e8a838",
                fontWeight: 700,
                letterSpacing: 2.5,
                display: "block",
                mb: 1.5,
              }}
            >
              FOR PROPERTY OWNERS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                color: "white",
                lineHeight: 1.15,
                mb: 2.5,
              }}
            >
              List Your Property.
              <br />
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #e8a838 0%, #f5c842 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Leave the Rest to Us.
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.9,
                mb: 4,
                maxWidth: 520,
                fontSize: "1.02rem",
              }}
            >
              From the moment you list with Optra Living, we take over —
              marketing your property, vetting tenants, managing rent and
              handling every maintenance call. You get full visibility through
              your owner portal with zero day-to-day involvement.
            </Typography>

            <List dense disablePadding sx={{ mb: 4.5 }}>
              {ownerBenefits.map((benefit) => (
                <ListItem key={benefit} disablePadding sx={{ py: 0.6 }}>
                  <ListItemIcon sx={{ minWidth: 30 }}>
                    <CheckCircleOutlineIcon
                      sx={{ fontSize: 17, color: "#e8a838" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={benefit}
                    primaryTypographyProps={{
                      variant: "body2",
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.6,
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.5,
                  borderRadius: 2.5,
                  color: "#0f2540",
                }}
              >
                List My Property
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/919876543210"
                href="https://wa.me/91XXXXXXXXXX"
                sx={{
                  fontWeight: 600,
                  px: 3,
                  py: 1.5,
                  borderRadius: 2.5,
                  color: "#4ade80",
                  borderColor: "rgba(74,222,128,0.4)",
                  "&:hover": {
                    borderColor: "#4ade80",
                    bgcolor: "rgba(74,222,128,0.06)",
                  },
                }}
              >
                WhatsApp Us
              </Button>
            </Box>

            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 2.5,
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.6,
              }}
            >
              Management fees apply. Service agreement required. Subject to
              property inspection and verification.
            </Typography>
          </Grid>

          {/* Image + stat card */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  height: { xs: 280, md: 440 },
                  position: "relative",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80"
                  alt="Professional property management"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(8,20,38,0.7) 100%)",
                  }}
                />
              </Box>

              {/* Floating transparency card */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  bottom: { xs: 16, md: -28 },
                  left: { xs: 16, md: -28 },
                  p: 2.5,
                  borderRadius: 3,
                  minWidth: 200,
                  bgcolor: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  OUR PROMISE
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "white", fontWeight: 800, mb: 0.5 }}
                >
                  ₹0
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.65)" }}
                >
                  Hidden charges. Ever.
                </Typography>
                <Divider
                  sx={{ my: 1.5, borderColor: "rgba(255,255,255,0.1)" }}
                />
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Clear, agreed fees. No surprises.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
