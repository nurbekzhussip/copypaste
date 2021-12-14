import React, { useState } from "react";
import QRCode from "react-qr-code";
import QrReader from "react-qr-reader";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import {InputGroup, InputRightElement, useClipboard} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

import "./style.css";
import { generateShortUUID } from "../../utils/helpers";

export const MainPage = () => {
  const [qrCode, setQrCode] = useState(generateShortUUID());
  const [result, setResult] = useState();
  const { hasCopied, onCopy } = useClipboard(qrCode);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="page__main">
      <Tabs variant="soft-rounded" colorScheme="green" align="center" isLazy={true}>
        <TabList>
          <Tab>Мой QR-код</Tab>
          <Tab>Найти</Tab>
        </TabList>
        <TabPanels>
          <TabPanel role="tabpanel">
            <QRCode value={qrCode} fgColor="black" bgColor="white" size="200" />
            <br/>
            <InputGroup size='md' width={"100%"} style={{ width: "300px" }}>
              <Input value={qrCode} pr='5rem' isReadOnly/>
              <InputRightElement width='5rem'>
                <Button h='1.75rem' size='sm' onClick={onCopy} ml={2}>
                  {hasCopied ? "Copied" : "Copy"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </TabPanel>
          <TabPanel>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "300px" }}
            />
            <br/>
            <InputGroup size='md' width={"100%"} style={{ width: "400px" }}>
              <Input pr='9.5rem' placeholder="или вставьте код"/>
              <InputRightElement width='9.5rem'>
                <Button h='1.75rem' size='sm' onClick={onCopy} ml={2}>
                  Подключиться
                </Button>
              </InputRightElement>
            </InputGroup>
            <p>{result}</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
