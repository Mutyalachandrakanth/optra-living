"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const properties = [
  {
    id: 1,
    title: "3 BHK Apartment in Jubilee Hills",
    location: "Jubilee Hills, Hyderabad",
    rent: "55,000",
    deposit: "1,65,000",
    beds: 3,
    baths: 2,
    area: "1,650 sq ft",
    available: "Available Now",
    badge: "Featured",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=75",
  },
  {
    id: 2,
    title: "2 BHK in Banjara Hills",
    location: "Banjara Hills, Hyderabad",
    rent: "38,000",
    deposit: "1,14,000",
    beds: 2,
    baths: 2,
    area: "1,200 sq ft",
    available: "Available Now",
    badge: "Verified",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=75",
  },
  {
    id: 3,
    title: "4 BHK Villa in Gachibowli",
    location: "Gachibowli, Hyderabad",
    rent: "90,000",
    deposit: "2,70,000",
    beds: 4,
    baths: 3,
    area: "2,800 sq ft",
    available: "Oct 2026",
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=75",
  },
];

const badgeColors: Record<string, "primary" | "secondary" | "success"> = {
  Featured: "secondary",
  Verified: "primary",
  Premium: "success",
};

export default function FeaturedProperties() {
  return (
    <Box
      component="section"
      id="properties"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: "background.default" }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            mb: 5,
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "secondary.main",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              HANDPICKED LISTINGS
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" }, mt: 0.5 }}
            >
              Featured Properties
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
              Verified, managed and ready to move in.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ whiteSpace: "nowrap" }}
          >
            View All Properties
          </Button>
        </Box>

        {/* Property Cards */}
        <Grid container spacing={3}>
          {properties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                {/* Image */}
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={property.image}
                    alt={property.title}
                    sx={{ height: 220, objectFit: "cover" }}
                  />
                  {/* Badge */}
                  <Chip
                    label={property.badge}
                    color={badgeColors[property.badge] || "primary"}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      fontWeight: 700,
                    }}
                  />
                  {/* Wishlist */}
                  <IconButton
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      backgroundColor: "rgba(255,255,255,0.9)",
                      "&:hover": { backgroundColor: "white" },
                    }}
                  >
                    <FavoriteBorderIcon
                      fontSize="small"
                      sx={{ color: "primary.main" }}
                    />
                  </IconButton>
                  {/* Availability */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      px: 2,
                      py: 0.75,
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "#a8e6b8", fontWeight: 600 }}
                    >
                      ● {property.available}
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <CardContent sx={{ flex: 1, p: 2.5 }}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 0.5, fontSize: "1rem", lineHeight: 1.3 }}
                  >
                    {property.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      mb: 2,
                    }}
                  >
                    <LocationOnIcon
                      sx={{ fontSize: 14, color: "text.secondary" }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {property.location}
                    </Typography>
                  </Box>

                  {/* Features */}
                  <Stack direction="row" spacing={2} sx={{ mb: 2.5 }}>
                    {[
                      {
                        icon: <BedIcon sx={{ fontSize: 14 }} />,
                        label: `${property.beds} Beds`,
                      },
                      {
                        icon: <BathtubIcon sx={{ fontSize: 14 }} />,
                        label: `${property.baths} Baths`,
                      },
                      {
                        icon: <AspectRatioIcon sx={{ fontSize: 14 }} />,
                        label: property.area,
                      },
                    ].map((feat) => (
                      <Box
                        key={feat.label}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.4,
                          color: "text.secondary",
                          fontSize: "0.78rem",
                        }}
                      >
                        {feat.icon}
                        {feat.label}
                      </Box>
                    ))}
                  </Stack>

                  {/* Rent */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      pt: 2,
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        Monthly Rent
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: "primary.main", fontWeight: 700 }}
                      >
                        ₹{property.rent}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="caption" color="text.secondary">
                        Deposit
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        ₹{property.deposit}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
