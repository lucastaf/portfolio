"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Card,
  CardContent,
  styled,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import Link from "next/link";

function Contact() {
  const isSmScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const titleVariant: Variant = isSmScreen ? "h6" : "h3";
  const subjectVariant: Variant = isSmScreen ? "subtitle2" : "h4";

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant={titleVariant}>
            Lucas Bittencourt Rauch
          </Typography>
          <Link
            href={"mailto:lucas.bittencourtrauch@gmail.com"}
            target="_blank"
          >
            <ContactTypography variant={subjectVariant}>
              <Icon icon="ic:baseline-email" />
              lucas.bittencourtrauch@gmail.com
            </ContactTypography>
          </Link>
          <Link href={"https://wa.me/5548996095391"} target="_blank">
            <ContactTypography variant={subjectVariant}>
              <Icon icon="ic:baseline-phone" />
              (48) 99609-5391
            </ContactTypography>
          </Link>
          <ContactTypography variant={subjectVariant}>
            <Icon icon="entypo:address" />
            Tijucas - SC
          </ContactTypography>
          <ContactTypography sx={{ mt: 5 }} variant={titleVariant}>
            Redes Sociais:
          </ContactTypography>
          <Link
            href={
              "https://www.linkedin.com/in/lucas-bittencourt-rauch-b40967243"
            }
            target="_blank"
          >
            <ContactTypography
              variant={titleVariant}
              sx={{ display: "flex", alignItems: "center", my: 2 }}
            >
              <Icon fontSize={60} icon="mdi:linkedin" />
              Linkedin
            </ContactTypography>
          </Link>
          <Link href={"https://github.com/lucastaf"} target="_blank">
            <ContactTypography
              variant={titleVariant}
              sx={{ display: "flex", alignItems: "center", my: 2 }}
            >
              <Icon fontSize={60} icon="mdi:github" />
              Github
            </ContactTypography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
}

const ContactTypography = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginTop: 5,
});

export default Contact;
