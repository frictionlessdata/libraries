/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Image from "@theme/IdealImage";
import Layout from "@theme/Layout";
import classnames from "classnames";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields = {}, tagline } = {} } = context;

  return (
    <Layout
      title={tagline}
      permalink="/"
      description={customFields.description}
    >
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Docusaurus with Keytar"
              className={styles.heroLogo}
              src={useBaseUrl("img/example.png")}
            />
            Data <span className={styles.heroProjectKeywords}>libraries</span>
            <br />
            for 10 platforms
          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={styles.indexCtasGetStartedButton}
              to={useBaseUrl("docs/table-schema/python")}
            >
              Get Started
            </Link>
            <span className={styles.indexCtasGitHubButtonWrapper}>
              <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=frictionlessdata&amp;repo=project&amp;type=star&amp;count=true&amp;size=large"
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </span>
          </div>
        </div>
      </div>
      <div className={classnames(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          Frictionless is a set of libraries implementing Frictionless
          Specifications for 10 programming languages.
        </div>
      </div>
      <div className={styles.section}>
        <div className="container text--center">
          <div className="row">
            <div className="col">
              <a href="docs/table-schema/python">
                <img
                  className={styles.featureImage}
                  alt="Specifications"
                  src={useBaseUrl("img/table-schema.png")}
                />
                <h3 className="padding-top--md">Table Schema</h3>
              </a>
              <p className="padding-horiz--md">
                A simple format to declare a schema for tabular data. The schema
                is designed to be expressible in JSON or YAML.
              </p>
            </div>
            <div className="col">
              <a href="docs/data-package/python">
                <img
                  className={styles.featureImage}
                  alt="Specifications"
                  src={useBaseUrl("img/data-package.png")}
                />
                <h3 className="padding-top--md">Data Package</h3>
              </a>
              <p className="padding-horiz--md">
                A simple container format for describing a coherent collection
                of data in a single package of data resources.
              </p>
            </div>
            <div className="col">
              <a href="docs/other-libraries/ckan">
                <img
                  className={styles.featureImage}
                  alt="Specifications"
                  src={useBaseUrl("img/misc.png")}
                />
                <h3 className="padding-top--md">Other Libraries</h3>
              </a>
              <p className="padding-horiz--md">
                Frictionless Data provides other usefull libraries to work with
                data usually written in Python or JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
