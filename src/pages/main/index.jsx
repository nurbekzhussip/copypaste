import React, { useState } from "react";
import QRCode from "react-qr-code";
import QrReader from "react-qr-reader";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/tabs";
import { Center, InputGroup, InputRightElement, useClipboard} from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Flex} from '@chakra-ui/react'
import { Button } from "@chakra-ui/button";

import { generateShortUUID } from "../../utils/helpers";
import "./style.css";

export const MainPage = () => {
  const [qrCode] = useState(generateShortUUID());
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
      <Flex >
        <Center w='100%'>
      <Tabs variant="soft-rounded" colorScheme="green" align="center" isLazy={true}>
        <TabList>
          <Tab>Мой QR-код</Tab>
          <Tab>Найти</Tab>
        </TabList>
        <TabPanels>
          <TabPanel role="tabpanel">
             <QRCode value={qrCode} fgColor="black" bgColor="white" />
             <br/>
             <InputGroup size='md' width="100%">
               <Input value={qrCode} pr='5rem' isReadOnly/>
               <InputRightElement width='5rem'>
                 <Button h='1.75rem' size='sm' onClick={onCopy} ml={2}>
                   {hasCopied ? "Copied" : "Copy"}
                 </Button>
               </InputRightElement>
             </InputGroup>
          </TabPanel>
          <TabPanel role="tabpanel">
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
            />
            <br/>
            <InputGroup size='md' width="100%" >
              <Input pr='5rem' placeholder="или вставьте код"/>
              <InputRightElement width='6rem'>
                <Button h='1.75rem' size='sm' onClick={onCopy} ml={2}>
                  Connect
                </Button>
              </InputRightElement>
            </InputGroup>
            <p>{result}</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
        </Center>
      </Flex>
    </div>
  );
};
