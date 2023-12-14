import {
  Column,
  Container,
  Heading,
  Hr,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Body, Head, Html, Preview } from "@react-email/components";
import React from "react";

export default function test() {
  return (
    <Html>
      <Preview>WIP</Preview>
      <Tailwind>
      <Head />
        <Body style={main} className="m-0 h-screen dark:bg-[#F8F8FC] bg-[#F8F8FC]">
          <Container className="mx-auto p-5 h-full">
            <Img
              src="https://i.imgur.com/1JVNRM1.png"
              className="mx-auto mb-10 w-[300px] object-contain"
            />
            <Container className="overflow-hidden rounded-t-xl">
              <Container className="bg-[url(https://i.imgur.com/1iDjcek.png)] bg-cover">
                <Text className="my-10 text-center sm:text-5xl text-3xl font-bold text-white">
                  Hey there!
                </Text>
              </Container>
              <Container className="p-10">
                <Heading as="h2" className="m-0">
                  {`Hey {username},`}
                </Heading>
                <Text className="text-xl font-light text-slate-700">
                  Thanks for signing up!
                  <br />
                  Your application is now under review. You will be notified of
                  our decision shortly
                </Text>
              </Container>
            </Container>
            <Container className="bg-[#101010] dark:bg-[#101010] overflow-hidden rounded-b-xl p-5 text-white">
              <Row align="center" className="w-min mt-5">
                <Column align="center" className="w-min px-5">
                  <Img src="https://i.imgur.com/7o6GWyY.png" />
                </Column>
                <Column align="center" className="w-min px-5">
                  <Img src="https://i.imgur.com/GKwbIW9.png" />
                </Column>
                <Column align="center" className="w-min px-5">
                  <Img src="https://i.imgur.com/5LnoXSV.png" />
                </Column>
              </Row>
              <Row className="w-min my-5">
                <Column className="w-min px-1">
                  <Link
                    className="text-white underline"
                    href="mailto:help@sidekicks.co.uk"
                  >
                    Support
                  </Link>
                </Column>
                <Column className="w-min px-1">
                  <Text className="font-semibold my-0">|</Text>
                </Column>
                <Column className="w-min px-1">
                  <Link
                    className="whitespace-nowrap text-white underline"
                    href=""
                  >
                    Terms & Conditions
                  </Link>
                </Column>
              </Row>
              <Container className="px-10">
                <Container className="h-[1px] bg-neutral-600 dark:bg-neutral-600" />
              </Container>
              <Container align="center" className="my-5 text-neutral-400">
                <Text className="text-center my-0">All rights reserved 2024 Side Kicks</Text>
                <Text className="text-center my-0">
                  Sidekicks Store Limited, 99-101 The Horsefair, BS1 3JR | VAT
                  number: N/A
                </Text>
              </Container>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const main = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};
