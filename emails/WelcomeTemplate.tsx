import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Body style={body}>
        <Container>
          <Text style={text}>Hello {name}</Text>
          <Link href="https://eden.bz">www.eden.bz</Link>
        </Container>
      </Body>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

const text: CSSProperties = {
  fontSize: "3rem",
};

export default WelcomeTemplate;
