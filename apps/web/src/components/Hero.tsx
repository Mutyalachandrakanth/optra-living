"use client";

import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
          alt="Luxury property Hyderabad"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, rgba(8,20,38,0.92) 0%, rgba(8,20,38,0.78) 45%, rgba(8,20,38,0.45) 100%)",
          }}
        />
        {/* Subtle gold accent line */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background:
              "linear-gradient(180deg, transparent 0%, #e8a838 30%, #e8a838 70%, transparent 100%)",
            opacity: 0.6,
          }}
        />
      </Box>

      <Container
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 1, py: { xs: 14, md: 0 } }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "55%" } }}>
          {/* Eyebrow tag */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.75,
              mb: 3.5,
              borderRadius: 10,
              border: "1px solid rgba(232,168,56,0.35)",
              backgroundColor: "rgba(232,168,56,0.08)",
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: "#e8a838",
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: "#e8a838",
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Hyderabad&apos;s Premium Property Partner
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem" },
              color: "#fff",
              lineHeight: 1.1,
              mb: 3,
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
            }}
          >
            Your Property,
            <br />
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #e8a838 0%, #f5c842 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Perfectly Managed.
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.72)",
              fontWeight: 400,
              mb: 4.5,
              lineHeight: 1.8,
              maxWidth: 500,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Professional letting and full-service property management in
            Hyderabad. Verified tenants, digital agreements, on-time rent —
            handled end-to-end.
          </Typography>

          {/* CTAs */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="#owner-cta"
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontWeight: 700,
                px: 3.5,
                py: 1.5,
                color: "#0f2540",
                borderRadius: 2.5,
              }}
            >
              List My Property
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#contact"
              startIcon={<PhoneIcon />}
              sx={{
                fontWeight: 600,
                px: 3.5,
                py: 1.5,
                borderRadius: 2.5,
                color: "white",
                borderColor: "rgba(255,255,255,0.35)",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              Speak to an Expert
            </Button>
          </Stack>

          {/* Trust line */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              mt: 4,
              flexWrap: "wrap",
            }}
          >
            {[
              "✓ KYC-verified tenants",
              "✓ Digital agreements",
              "✓ Monthly owner reports",
            ].map((t) => (
              <Typography
                key={t}
                variant="caption"
                sx={{
                  color: "rgba(255,255,255,0.55)",
                  fontWeight: 500,
                  letterSpacing: 0.3,
                }}
              >
                {t}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
