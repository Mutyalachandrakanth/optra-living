"use client";

import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleIcon from "@mui/icons-material/People";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import StarIcon from "@mui/icons-material/Star";

const stats = [
  {
    icon: <ApartmentIcon sx={{ fontSize: 36, color: "secondary.main" }} />,
    value: "200+",
    label: "Managed Properties",
    sublabel: "Across Hyderabad",
  },
  {
    icon: <HomeWorkIcon sx={{ fontSize: 36, color: "secondary.main" }} />,
    value: "150+",
    label: "Happy Landlords",
    sublabel: "Incl. NRI owners",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 36, color: "secondary.main" }} />,
    value: "500+",
    label: "Verified Tenants",
    sublabel: "KYC checked",
  },
  {
    icon: <StarIcon sx={{ fontSize: 36, color: "secondary.main" }} />,
    value: "4.8★",
    label: "Owner Rating",
    sublabel: "Average satisfaction",
  },
];

export default function StatsStrip() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 7 },
        background: "linear-gradient(135deg, #1a3c5e 0%, #0f2540 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={0} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  py: { xs: 2, md: 0 },
                  px: { xs: 1, md: 3 },
                  position: "relative",
                  "&::after":
                    index < stats.length - 1
                      ? {
                          content: '""',
                          position: "absolute",
                          right: 0,
                          top: "20%",
                          height: "60%",
                          width: 1,
                          bgcolor: "rgba(255,255,255,0.15)",
                          display: { xs: "none", md: "block" },
                        }
                      : {},
                }}
              >
                <Box sx={{ mb: 1 }}>{stat.icon}</Box>
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontFamily: '"Playfair Display", serif',
                    fontSize: { xs: "1.8rem", md: "2.4rem" },
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "white", fontWeight: 600, lineHeight: 1.2 }}
                >
                  {stat.label}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.6)", mt: 0.25 }}
                >
                  {stat.sublabel}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
