"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  Rating,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const testimonials = [
  {
    name: "Ramesh Agarwal",
    role: "NRI Owner, Dubai",
    avatar: "R",
    rating: 5,
    quote:
      "Managing my flat in Banjara Hills from Dubai was a nightmare before Optra Living. Now I get monthly reports, my rent arrives on time, and I haven't had a single chase-up call in 8 months. Absolutely worth it.",
    property: "3 BHK, Banjara Hills",
  },
  {
    name: "Priya Subramanian",
    role: "Tenant, Gachibowli",
    avatar: "P",
    rating: 5,
    quote:
      "The whole process from apartment viewing to moving in was digital and smooth. KYC took 2 days. The maintenance request system is excellent — my AC issue was sorted in 24 hours.",
    property: "2 BHK, Gachibowli",
  },
  {
    name: "Vikram & Sunita Reddy",
    role: "Property Owners, Hyderabad",
    avatar: "V",
    rating: 5,
    quote:
      "We gave them two properties to manage. Verified tenant found in 3 weeks, lease signed digitally, and rent is credited every month without follow-ups. The owner dashboard is excellent.",
    property: "2 Properties, Jubilee Hills",
  },
];

const colors = ["#1a3c5e", "#2e7d52", "#7b3f00"];

export default function Testimonials() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 10 },
        background: "linear-gradient(135deg, #1a3c5e 0%, #0f2540 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="overline"
            sx={{ color: "#e8a838", fontWeight: 700, letterSpacing: 2 }}
          >
            WHAT PEOPLE SAY
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              mt: 0.5,
              color: "white",
            }}
          >
            Trusted by Owners &amp; Tenants
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} md={4} key={t.name}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: 3,
                  backgroundColor: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FormatQuoteIcon
                  sx={{ fontSize: 40, color: "#e8a838", opacity: 0.6, mb: 1 }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.88)",
                    lineHeight: 1.8,
                    flex: 1,
                    fontStyle: "italic",
                    mb: 3,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    sx={{
                      backgroundColor: colors[i],
                      border: "2px solid rgba(232,168,56,0.5)",
                      width: 44,
                      height: 44,
                      fontWeight: 700,
                    }}
                  >
                    {t.avatar}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "white", fontWeight: 700 }}
                    >
                      {t.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {t.role}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 0.25,
                      }}
                    >
                      <Rating
                        value={t.rating}
                        readOnly
                        size="small"
                        sx={{ color: "#e8a838" }}
                      />
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 2,
                    pt: 2,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    📍 {t.property}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
