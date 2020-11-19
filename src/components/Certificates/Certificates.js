import React from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import { useIntl } from "react-intl";
import diplomaPWA from '../../images/diploma-pwa-react-js-1.jpg'
import diplomaRN from '../../images/diploma-react-native-1.jpg'
import diplomaReactAvanzado from '../../images/diploma-react-avanzado-1.jpg'
import diplomaGatsby from '../../images/diploma-gatsby-1.jpg'
import diplomaReactCoursera from '../../images/Coursera react-1.jpg'
import diplomaBootstrap from '../../images/Coursera bootstrap-1.jpg'
import diplomaBackCoursera from '../../images/Coursera backend-1.jpg'
import diplomaGenexus from '../../images/diploma genexus.jpg'
import CertificatesCard from "./CertificatesCard";
import { motion } from "framer-motion";

const CertificatesStyled = styled.div`
  .certificates__container {
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 20px;
    margin: 80px auto;
  }
  .certificates__title {
    text-align: center;
    margin-top: 80px;
    font-size: 34px;
  }
`;

function Certificates() {
  const intl = useIntl();

  const pageVariants = {
    inY: {
      opacity: 1,
      y: 0,
    },
    outY: {
      opacity: 0,
      y: "-50vh",
    },
  };

  return (
    <Wrapper>
      <CertificatesStyled>
        <motion.h2
          initial={pageVariants.outY}
          animate={pageVariants.inY}
          exit={pageVariants.outY}
          transition={{ duration: 1 }}
          className="certificates__title"
        >
          {intl.messages["certificates.title1"]} <br />
          {intl.messages["certificates.title2"]}
        </motion.h2>

        <div className="certificates__container">
          <CertificatesCard title="modal1" img={diplomaReactAvanzado}/>
          <CertificatesCard title="modal2" img={diplomaRN} />
          <CertificatesCard title="modal3" img={diplomaPWA}/>
          <CertificatesCard title="modal1" img={diplomaGatsby}/>
          <CertificatesCard title="modal2" img={diplomaReactCoursera}/>
          <CertificatesCard title="modal3" img={diplomaBackCoursera}/>
          <CertificatesCard title="modal3" img={diplomaBootstrap}/>
          <CertificatesCard title="modal1" img={diplomaGenexus}/>
        </div>
      </CertificatesStyled>
    </Wrapper>
  );
}

export default Certificates;
