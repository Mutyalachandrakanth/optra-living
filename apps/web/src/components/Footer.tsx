"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
  IconButton,
} from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const footerLinks = {
  Services: [
    { label: "Tenant Discovery & Letting", href: "#services" },
    { label: "Tenant KYC & Verification", href: "#services" },
    { label: "Lease Management", href: "#services" },
    { label: "Rent Collection", href: "#services" },
    { label: "Maintenance & Repairs", href: "#services" },
    { label: "NRI Property Management", href: "#services" },
    { label: "Optra Shield", href: "#services" },
  ],
  Company: [
    { label: "About Optra Living", href: "#about" },
    { label: "Optra Serve", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ],
  "For Owners": [
    { label: "List Your Property", href: "#owner-cta" },
    { label: "Management Services", href: "#services" },
    { label: "Owner Portal", href: "#" },
    { label: "NRI Management", href: "#services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#060f1c", pt: { xs: 7, md: 9 }, pb: 4 }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} sx={{ mb: 7 }}>
          {/* Brand */}
          <Grid item xs={12} md={3.5}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2.5 }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, #1a3c5e 0%, #2d5f8a 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(232,168,56,0.2)",
                }}
              >
                <HomeWorkIcon sx={{ color: "#e8a838", fontSize: 21 }} />
              </Box>
              <Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "white",
                    fontFamily: '"Playfair Display", serif',
                  }}
                >
                  Optra
                </Box>
                <Box
                  component="span"
                  sx={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "#e8a838",
                    fontFamily: '"Playfair Display", serif',
                  }}
                >
                  {" "}
                  Living
                </Box>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.9,
                mb: 1,
                maxWidth: 280,
              }}
            >
              Professional property letting and management in Hyderabad. A
              division of Optra Serve.
            </Typography>

            <Stack spacing={0.6} sx={{ mb: 3 }}>
              {[
                "📍 Jubilee Hills, Hyderabad – 500033",
                "📞 +91 98765 43210",
                "✉️ hello@optraliving.com",
                '📍 Hyderabad, Telangana, India',
                '📞 +91 XXXXX XXXXX',
                '✉️ hello@optraliving.com',
              ].map((item) => (
                <Typography
                  key={item}
                  variant="caption"
                  sx={{
                    color: "rgba(255,255,255,0.35)",
                    display: "block",
                    lineHeight: 1.8,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>

            <Stack direction="row" spacing={1}>
              {[
                {
                  icon: <WhatsAppIcon fontSize="small" />,
                  href: "#",
                  label: "WhatsApp",
                },
                {
                  icon: <InstagramIcon fontSize="small" />,
                  href: "#",
                  label: "Instagram",
                },
                {
                  icon: <LinkedInIcon fontSize="small" />,
                  href: "#",
                  label: "LinkedIn",
                },
                {
                  icon: <TwitterIcon fontSize="small" />,
                  href: "#",
                  label: "Twitter",
                },
              ].map((s) => (
                <IconButton
                  key={s.label}
                  size="small"
                  component="a"
                  href={s.href}
                  aria-label={s.label}
                  sx={{
                    color: "rgba(255,255,255,0.4)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 1.5,
                    "&:hover": {
                      color: "#e8a838",
                      borderColor: "rgba(232,168,56,0.4)",
                      bgcolor: "rgba(232,168,56,0.06)",
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <Grid item xs={6} sm={3} md={2.125} key={section}>
              <Typography
                variant="overline"
                sx={{
                  color: "rgba(255,255,255,0.35)",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  fontSize: "0.68rem",
                  display: "block",
                  mb: 2,
                }}
              >
                {section}
              </Typography>
              <Stack spacing={1.25}>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    underline="none"
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                      "&:hover": { color: "rgba(255,255,255,0.9)" },
                      transition: "color 0.15s",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 3.5 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "rgba(255,255,255,0.25)", lineHeight: 1.8 }}
          >
            © {new Date().getFullYear()} Optra Living — A division of Optra
            Serve. All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.18)",
              maxWidth: 560,
              textAlign: { xs: "left", md: "right" },
              lineHeight: 1.7,
            }}
          >
            Optra Living is a property management services company. Insurance,
            legal and financial services are provided by appropriately licensed
            third-party partners. RERA compliance applicable where required.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
